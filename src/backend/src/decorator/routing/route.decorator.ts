import { IRouteDefinition } from "./IRouteDefinition";
import { HttpMethod } from "../../helper/enum/httpMethod.enum";
import { GeneralHelper } from "../../helper/env/general.helper";

export const Route = (method: HttpMethod, path: string): MethodDecorator => {
    return (target: any, propertyKey: string): void => {
        if (!Reflect.hasMetadata(GeneralHelper.routeMeta, target.constructor)) 
            Reflect.defineMetadata(GeneralHelper.routeMeta, [], target.constructor);

        const routes: IRouteDefinition[] = Reflect.getMetadata(GeneralHelper.routeMeta, target.constructor) as IRouteDefinition[];

        routes.push({
            method: method,
            path: path,
            name: propertyKey
        });

        Reflect.defineMetadata(GeneralHelper.routeMeta, routes, target.constructor);
    };
};