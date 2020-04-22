import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { TokenHelper } from "../../helper/token.helper";
import { ILoginController } from "./ILogin.controller"
import { HttpStatusCode } from "../../helper/enum/httpStatusCode.enum";
import { HttpMethod } from "../../helper/enum/httpMethod.enum";
import { Controller } from "../../decorator/routing/controller.decorator";
import { Route } from "../../decorator/routing/route.decorator";
import { Injectable } from "../../decorator/injection/injectable.decorator";

@Injectable()
@Controller("/login")
export class LoginController implements ILoginController {

    private _userService: UserService;

    public constructor(userService: UserService) {
        this._userService = userService;
    }

    @Route(HttpMethod.Get, "/loginAsync")
    public async loginAsync(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;
        const user = await this._userService.verifyCredentialsAsync(username, password);

        if (username == null || password == null || user == null) {
            return res.status(HttpStatusCode.Forbidden).send();
        }

        const token = jwt.sign({ username: username }, TokenHelper.jwtKey, {
            algorithm: TokenHelper.algorithm,
            expiresIn: TokenHelper.jwtExpire
        });

        res.send({ token: token });
    }

    @Route(HttpMethod.Get, "/registerAsync")
    public async registerAsync(req: Request, res: Response): Promise<Response>  {
        const { username, password } = req.body;

        try {
            await this._userService.registerUserAsync(username, password);
        } catch {
            return res.status(HttpStatusCode.Error).send();
        }

        res.send();
    }
}