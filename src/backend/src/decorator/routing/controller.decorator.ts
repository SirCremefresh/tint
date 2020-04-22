import { GeneralHelper } from "../../helper/env/general.helper";

export const Controller = (prefix: string = ""): ClassDecorator => {
    return (target: any) => {
        Reflect.defineMetadata(GeneralHelper.prefixMeta, prefix, target);

        if (!Reflect.hasMetadata(GeneralHelper.routeMeta, target))
            Reflect.defineMetadata(GeneralHelper.routeMeta, [], target);
    };
};