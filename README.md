# Node TypeScript Docker

This is a Node.js project with TypeScript and Docker for development and production.

## ⚙Requirements

- Node.js
- Docker
- Docker-compose


# 💥How to use this project

To start using this project, follow these steps:

1. Clone the repository

```bash
git clone https://github.com/verastian/docker_node_ts.git
```

2. Install dependencies
```bash
npm install
```

### 🛠**Start in development mode**

To run in development mode, follow these steps:

1. Start the development container:

```bash
docker-compose up node_service_dev
```

This will start the application in development mode with debugging support on port **9229**.


2. Access the application in your web browser:
 
```bash
http://localhost:port
```

### 🦺**Start in production mode**

To run in production mode, follow these steps:

1. Start the production container:
 
  ```bash
  docker-compose up node_service_prod
  ```

This will start the application in production mode.

2. Access the application in your web browser:

```bash
http://localhost:port
```


## 🧱Project Structure

The project structure is as follows:

bashCopy code

```bash
├──📁src
│ └──📁config
│     └──📄 config.ts
│     └──📄 load.ts
│ └──📁controllers
│     └──📄 user.controller.ts
│ └──📁routes
│     └──📄 user.route.ts
│ └──📁models
│     └──📄 server.models.ts
│ └──📄 app.ts
│
├──📄 .env.template
├──📄 .dockerignore
├──📄 docker-compose.yml
├──📄 Dockerfile
├──📄 package-lock.json
├──📄 package.json
├──📄 tsconfig.json
├──📄 tsconfig.prod.json
├──📄 tslint.json
```

## 📃License

This project is licensed under the MIT License.