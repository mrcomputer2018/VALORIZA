import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const secret =  process.env.JWT_SECRET as string;

interface IPayload {
    sub: string;
}

export function ensureAuthenticated (req: Request, res: Response, next: NextFunction){
    // receber  token
    const authToken = req.headers.authorization;

    // validar se token esta preenchido
    if (!authToken) {
       return res.status(401).json({ message: 'Unauthenticated. Please login.' });
    }

    const [, token ] = authToken.split(' ');

    // varificar se o token a valido
    try {
        const { sub } = verify(token, secret) as IPayload;

        // recuperar informacoes do usuario
        // repassando dados
        req.user_id = sub;

        // seguindo o fluxo
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthenticated. Please login.' });
    }
}

