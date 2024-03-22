import React from "react";
import { render} from "@testing-library/react";
import i18n from "../../config/i18n/i18nForTests.ts"
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";


export function Render(Component: React.ReactNode){
    render(
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                {Component}
            </I18nextProvider>
        </BrowserRouter>
    )
}