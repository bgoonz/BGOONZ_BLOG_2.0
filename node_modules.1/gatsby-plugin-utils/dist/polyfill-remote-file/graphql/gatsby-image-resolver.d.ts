import { PlaceholderType } from "../placeholder-handler";
import { ImageCropFocus } from "../types";
import type { Actions } from "gatsby";
import type { IRemoteFileNode, IRemoteImageNode, IGraphQLFieldConfigDefinition, ImageFormat, CalculateImageSizesArgs } from "../types";
import type { getRemoteFileEnums } from "./get-remote-file-enums";
interface IGatsbyImageData {
    sources: Array<{
        srcSet: string;
        type: string;
        sizes: string;
    }>;
    fallback: {
        srcSet: string;
        src: string;
        sizes: string;
    };
}
declare type IGatsbyImageDataArgs = Omit<CalculateImageSizesArgs, "fit" | "outputPixelDensities"> & {
    formats?: Array<ImageFormat>;
    backgroundColor?: string;
    placeholder?: PlaceholderType | "none";
    aspectRatio?: number;
    sizes?: string;
    cropFocus?: Array<ImageCropFocus>;
    fit?: CalculateImageSizesArgs["fit"];
    outputPixelDensities?: CalculateImageSizesArgs["outputPixelDensities"];
    quality?: number;
};
export declare function gatsbyImageResolver(source: IRemoteFileNode, args: IGatsbyImageDataArgs, actions: Actions): Promise<{
    images: IGatsbyImageData;
    layout: string;
    width: number;
    height: number;
    backgroundColor?: string;
    placeholder?: {
        fallback: string;
    } | undefined;
} | null>;
export declare function generateGatsbyImageFieldConfig(enums: ReturnType<typeof getRemoteFileEnums>, actions: Actions): IGraphQLFieldConfigDefinition<IRemoteFileNode | IRemoteImageNode, ReturnType<typeof gatsbyImageResolver>, IGatsbyImageDataArgs>;
export {};
