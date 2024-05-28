import { JSX } from 'react'
import classNames from "../../lib/classNames/classNames.ts";

type ButtonSize = "M" | "L" | "XL"; // 24, 32, 40 ?

interface ButtonProps {
    title: string
    onClick?: () => void
    size?: ButtonSize
    reverseTheme?: boolean
    disabled?: boolean
}

const Button = ({ title,
                    onClick,
                    size = "M",
                    disabled = false,
}: ButtonProps): JSX.Element => {


    return (
            <div
                onClick={onClick}
                 data-testid={"button"}
                 className={classNames(`text-center
                  border-2 border-black dark:border-white w-fit h-fit cursor-pointer text-black dark:text-white`, {
                 "text-lg px-2 py-1": (size === "M"),
                 "text-xl px-2.5 py-1.5": (size === "L"),
                 "text-2xl px-3 py-1.5": (size === "XL"),
                     "opacity-40 cursor-default pointer-events-none" : disabled,
                 }, [])}>
                {title}
            </div>
    )
}

export default Button
