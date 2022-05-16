import { transformImage } from "../transform-images";
export declare function FILE_CDN({ outputDir, args: { url, filename, contentDigest }, }: {
    outputDir: string;
    args: {
        url: string;
        filename: string;
        contentDigest: string;
    };
}): Promise<void>;
export declare function IMAGE_CDN(args: {
    outputDir: Parameters<typeof transformImage>[0]["outputDir"];
    args: Parameters<typeof transformImage>[0]["args"] & {
        contentDigest: string;
    };
}): Promise<void>;
