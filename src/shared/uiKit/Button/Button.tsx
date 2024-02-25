import { type JSX } from 'react'
import classNames from "../../lib/classNames/classNames.ts";

interface ButtonProps {
    title: string
    onClick?: () => void
    textColor?: "main" | "navigation"
}

const Button = ({ title, onClick, textColor = "navigation" }: ButtonProps): JSX.Element => {

    const main = textColor === "main";

    return (
            <div
                onClick={onClick}
                 data-testid={"button"}
                 className={classNames(`text-center border-2 w-fit
                                  px-2 py-1 h-fit cursor-pointer`, {
                     "text-content": main,
                     "text-navContent": !main,
                     "border-content": main,
                     "border-navContent": !main,
                 }, [])}>
                {title}
            </div>
    )
}

export default Button
