import {type ChangeEvent, type JSX, memo} from 'react'
import { useTranslation } from 'react-i18next'

const SelectLanguage = memo(({short}: {short: boolean}): JSX.Element => {
  const languages = ['en-US', 'es-ES', 'ru-RU']
  const choosenLanguage = localStorage.getItem('language')

  const { t, i18n } = useTranslation();
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
                <select defaultValue={choosenLanguage ?? "en-US"} className={`text-black`} onChange={changeLanguage}>
                    {languages.map((lang, idx) => <option key={idx} value={lang}>
                        {`${short? t( `${lang}`+ ` short`) : t(lang)}`}
                    </option>)}
                </select>
            </div>
        </>

  )
});

export default SelectLanguage
