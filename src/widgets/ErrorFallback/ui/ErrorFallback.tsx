import { JSX } from "react"
import { useTranslation } from "react-i18next"
import Button from "../../../shared/uiKit/Button/Button.tsx"
const ErrorFallback = (): JSX.Element => {
  const { t } = useTranslation()

  const reLoad = (): void => {
    location.reload()
  }

  return (
        <div className={""}>
            <p>
                {t(`Something went wrong. Please refresh the page...`)}
            </p>
            <Button onClick={reLoad} title={t(`Reload`)}></Button>
        </div>
  )
}

export default ErrorFallback
