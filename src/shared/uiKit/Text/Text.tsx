type TextColor = "primary" | "error" | "warning";
import classNames from "../../lib/classNames/classNames.ts";

type TextProps = {
  title?: string;
  text?: string;
  color?: TextColor;
};

const Text = ({ title, text, color = "primary" }: TextProps) => {
  return (
    <div className={"py-2"}>
        {<div className={classNames(
            "text-lg font-bold",
        {
          "text-black dark:text-white": color === "primary",
            "text-error" : color === "error",
            "text-warning" : color === "warning",
        }
        )}>
            {title}
        </div>}
        {<div className={classNames("text-md",
            {
              "text-black dark:text-white": color === "primary",
                "text-error" : color === "error",
                "text-warning" : color === "warning",
            }
        )}>
            {text}
        </div>}
    </div>
  );
};

export default Text;
