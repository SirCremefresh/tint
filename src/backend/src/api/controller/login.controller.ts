import { Controller, Req, Res, Get } from "routing-controllers";

@Controller("/login")
export class LoginController {

    @Get("/loginAsync")
    public async loginAsync(@Req() request: any, @Res() response: any): Promise<any> {
        return "heheheh";
    }
}