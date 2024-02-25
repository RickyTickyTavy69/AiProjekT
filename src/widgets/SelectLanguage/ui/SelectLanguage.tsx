import { type ChangeEvent, type JSX } from 'react'
import { useTranslation } from 'react-i18next'

const SelectLanguage = (): JSX.Element => {
  const languages = ['en-US', 'es-ES', 'ru-RU']
  const choosenLanguage = localStorage.getItem('language')

  const { t, i18n } = useTranslation()
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng)
  })

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    void i18n.changeLanguage(e.target.value)
    console.log('lang chosen is', e.target.value)
  }
  return (
        <>
            <div>
                <select className={`text-black`} onChange={changeLanguage}>
                    {languages.map((lang, idx) => <option key={idx} selected={choosenLanguage === lang} value={lang}>{ t(lang) }</option>)}
                </select>
            </div>
        </>

  )
}

export default SelectLanguage
