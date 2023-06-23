import { Request, Response, NextFunction } from 'express';

import { UsersRepositories } from './../repositories/UsersRepositories';

export async function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    // pegando o id do usuario de request
    const { user_id } = req;

    const user = await UsersRepositories.findOneBy({ id: user_id });

    // verificar se o usuario e admin
    /* const admin = true; */

    if (user?.admin) {
        return next();
    }

    return res.status(401).json({
        error:'Unauthorized- user is not admin.',
    });
}
