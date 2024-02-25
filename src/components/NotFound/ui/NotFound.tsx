import { useTranslation } from 'react-i18next'
import { NavLinkButton } from 'src/shared/uiKit'
import React from 'react'

const NotFound = (): React.ReactNode => {
  const { t } = useTranslation()

  return (
      <nav>
          <div className={''}>
              {t('Nothing over there')}
          </div>
          <p className={'flex gap-2'}>
              {t('looks, like this page does not exist. Go back to the')}
              <NavLinkButton
                  to={'/'}
              >{t('Main Page')}</NavLinkButton>
          </p>
      </nav>

  )
}

export default NotFound
