import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Language = (): null => {
  const { i18n } = useTranslation()

  const chosenLanguage = localStorage.getItem('language')
  useEffect(() => {
    if (chosenLanguage) {
      void i18n.changeLanguage(chosenLanguage)
    } else {
      void i18n.changeLanguage(navigator.language)
    }
  }, [chosenLanguage, i18n])

  return null
}

export default Language
