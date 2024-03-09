import {StoryFn} from "@storybook/react";
import {ThemeType} from "../../../../app/providers/ThemeProvider/ui/ThemeProvider.tsx";
import {useEffect} from "react";

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: StoryFn) => {

    useEffect(() => {
        document.documentElement.className = theme === "Dark"? "dark": "";
    }, [theme])


    return(
            <StoryComponent/>
    )
}