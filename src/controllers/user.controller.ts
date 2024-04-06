import { Request, Response } from 'express';
import httpStatus from 'http-status';


export const getUsers = async (req: Request, res: Response) => {
    console.log('hello')
    return res.status(httpStatus.OK).json({
        message: 'Obtener Lista de usuarios',
    })
}

export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    return res.status(httpStatus.OK).json({
        message: 'Obtener un usuarios',
        id
    })
}
export const postUser = async (req: Request, res: Response) => {

    const { body } = req;

    return res.status(httpStatus.OK).json({
        message: 'Crear un usuario',
        body
    })
}
export const putUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    return res.status(httpStatus.OK).json({
        message: 'Actualizar un usuario',
        id,
        body
    })
}
export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    return res.status(httpStatus.OK).json({
        message: 'Eliminar un usuario',
        id
    })

}
