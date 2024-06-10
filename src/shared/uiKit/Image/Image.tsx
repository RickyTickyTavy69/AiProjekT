import {ImgHTMLAttributes} from "react";
import {Size} from "../common.types.ts";
import classNames from "../../lib/classNames/classNames.ts";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    size: Size
}

const Image = ({size, src, alt,  ...rest}: ImageProps) => {
    return(
        <div>
            <img className={classNames(
                "object-contain",
                {
                    "w-40 h-40": size === "M",
                    "w-80 h-80": size === "XL",
                    "w-60 h-60": size === "L",
                },
            )}
                 src={src}
                 alt={alt}
                 {...rest}/>
        </div>
    )
}

export default Image
