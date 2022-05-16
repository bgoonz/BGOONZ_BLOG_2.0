export interface IResizeArgs {
    width: number;
    height: number;
    format: string;
    outputPath?: string;
    quality: number;
}
export declare function transformImage({ outputDir, args: { url, filename, contentDigest, ...args }, }: {
    outputDir: string;
    args: IResizeArgs & {
        url: string;
        filename: string;
        contentDigest?: string;
    };
}): Promise<string>;
