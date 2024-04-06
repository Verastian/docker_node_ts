FROM node:20-alpine3.18 AS base

RUN apk update && apk add --no-cache dumb-init

ENV DIR /app
WORKDIR $DIR

#*DEVELOPMENT
FROM base AS dev

ENV NODE_ENV=dev

COPY package*.json .

RUN npm ci

COPY tsconfig*.json .
COPY .swcrc .
COPY src src

EXPOSE $PORT
CMD ["npm", "run", "dev"]

# *BUILD
FROM base AS build

RUN apk update && apk add --no-cache dumb-init=1.2.5-r2

COPY package*.json .
RUN npm ci 

COPY tsconfig*.json .
COPY .swcrc .
COPY src src

RUN npm run build && \
    npm prune --production
# *PRODUCTION
FROM base AS prod

ENV NODE_ENV=prod
# En producción se asigna el rol de usuario de node, para limitar los permisos
ENV USER=node
# copiar desde el bloque de build
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=build $DIR/node_modules node_modules
COPY --from=build $DIR/dist dist

USER $USER

EXPOSE $PORT

CMD ["dumb-init", "node", "dist/main.js"]
