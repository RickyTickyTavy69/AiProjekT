import {StoryFn} from "@storybook/react";
import {ThemeType} from "../../../../app/providers/ThemeProvider/ui/ThemeProvider.tsx";
import {useEffect} from "react";

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: StoryFn) => {

    useEffect(() => {
        document.documentElement.className = theme === "Dark"? "dark": "bright";
        if(theme === "Dark"){
            document.body?.classList.add("dark");
        } else{
            document.body?.classList.remove("dark");
        }
        // document.body?.classList.add(`${theme === "Dark" ? "dark": "bright"}`);
    }, [theme])


    return(
            <StoryComponent/>
    )
}