import { render} from "@testing-library/react";
import i18n from "../../config/i18n/i18nForTests.ts"
import {I18nextProvider, withTranslation} from "react-i18next";
import {ComponentType} from "react";


export function Render(Component: ComponentType<any>){
    const ComponentWithTranslation = withTranslation()(Component)
    render(
        <I18nextProvider i18n={i18n}>
           <ComponentWithTranslation/>
        </I18nextProvider>
    )
}