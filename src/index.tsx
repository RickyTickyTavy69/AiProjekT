import App from './app/App'
import { createRoot } from 'react-dom/client'
import 'src/shared/config/i18n'

const container = document.getElementById('root')

const root = createRoot(container!);

root.render(
        <App/>
)
