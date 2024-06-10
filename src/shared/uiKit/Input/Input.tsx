import {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";
import {useTheme} from "../../../widgets/ThemeSwitcher";
import classNames from "../../lib/classNames/classNames.ts";
// actually, useTheme is in the widgets and Input is in the shared layer, so I am not supposed to use it here, it should also
// be in the shared layer to use it in the shared layer


type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">;

interface InputProps extends InputHTMLProps  {
    value?: string | number;
    onChange?: (value: string, name: string) => void;
    readonly?: boolean;
}

const Input = memo((props : InputProps) => {

    const {theme} = useTheme();

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null)

    const onFocuse = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value, e.currentTarget.name);
        setCaretPosition(e.currentTarget.value.length);
    }

    const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e.currentTarget.selectionStart || 0);
    }


    const {value,
        onChange,
        type = "text",
        placeholder = "",
        autoFocus = false,
        readonly = false,
        ...rest} = props;


    useEffect(() => {
        if(autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus])



    return(
        <div className={"my-2 flex text-black dark:text-white gap-2 overflow-x-hidden"}>
            { placeholder && <div
            >{`${placeholder}>`}</div> }
            <div className={"flex gap-2 relative"}>
                <div className={'text-black dark:text-white'}>
                    <input
                        readOnly={readonly}
                        ref={inputRef}
                        onFocus={onFocuse}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        style={{
                            color: 'transparent',
                            textShadow: theme === "Dark" ? '0 0 0 #dec8c8': '0 0 0 #18181B',
                        }}
                        className={classNames(
                            "focus:outline-none bg-transparent font-mono border-2 border-white overflow-hidden",
                            )}
                        {...rest}
                        onChange={handleChange}
                        value={value}
                        type={type}
                    />
                </div>
                <div>
                    {(isFocused && !readonly) && <div
                        className={
                        `w-4 h-1 absolute bottom-0 animate-blink_terminal bg-black dark:bg-white`
                    }
                        style={{
                            left: `${caretPosition * 8.8}px`,
                        }}
                    />}
                </div>
            </div>
        </div>
    )
});

export default Input;
