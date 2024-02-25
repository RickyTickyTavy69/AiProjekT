import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Language = (): null => {
  const { i18n } = useTranslation()

  const chosenLanguage = localStorage.getItem('language')
  console.log('lang', navigator.language)
  useEffect(() => {
    if (chosenLanguage) {
      void i18n.changeLanguage(chosenLanguage)
    } else {
      void i18n.changeLanguage(navigator.language)
    }
  }, [])

  return null
}

export default Language
