import {StoryFn} from "@storybook/react";
import {ThemeType} from "../../../../app/providers/ThemeProvider/ui/ThemeProvider.tsx";

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: StoryFn) => {

        if(theme === "Dark"){
            console.log("dark");
            document.body?.classList.add("dark");
        } else{
            document.body?.classList.remove("dark");
        }

    return(
            <StoryComponent/>
    )
}