import App from './app/App'
import { createRoot } from 'react-dom/client'
import '@/shared/config/i18n'
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "./app/providers/StoreProvider";

const container = document.getElementById('root')

const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>


)
