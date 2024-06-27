import { JSX } from "react";
import classNames from "../../lib/classNames/classNames.ts";
import { ThemeColor } from "../common.types.ts";
import {Size} from "../common.types.ts";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  size?: Size;
  reverseTheme?: boolean;
  disabled?: boolean;
  color?: ThemeColor;
  type?: "submit";
}

const Button = ({
  title,
  onClick,
  size = "M",
  disabled = false,
  color = "primary",
    type,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      data-testid={"button"}
      className={classNames(
        `text-center w-fit h-fit cursor-pointer text-black dark:text-white`,
        {
          "text-lg px-2 py-1": size === "M",
          "text-xl px-2.5 py-1.5": size === "L",
          "text-2xl px-3 py-1.5": size === "XL",
          "opacity-40 cursor-default pointer-events-none": disabled,
            "border-2 border-black dark:border-white": color === "primary",
          "border-2 border-black dark:border-white hover:border-warning dark:hover:border-warning": color === "warning",
          "border-2 border-black dark:border-white hover:border-error dark:hover:border-error": color === "error",
          "border-2 border-black dark:border-white hover:border-success dark:hover:border-success": color === "success",

        },
        [],
      )}
    >
      {title}
    </button>
  );
};

export default Button;
