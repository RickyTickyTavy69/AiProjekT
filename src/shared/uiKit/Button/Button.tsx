import { JSX } from 'react'
import classNames from "../../lib/classNames/classNames.ts";

interface ButtonProps {
    title: string
    onClick?: () => void
}

const Button = ({ title, onClick }: ButtonProps): JSX.Element => {


    return (
            <div
                onClick={onClick}
                 data-testid={"button"}
                 className={classNames(`text-center
                  border-2 border-black dark:border-white w-fit
                                  px-2 py-1 h-fit cursor-pointer text-black dark:text-white`, {}, [])}>
                {title}
            </div>
    )
}

export default Button
