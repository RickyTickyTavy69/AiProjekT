import React from 'react'
import { Theme } from 'src/widgets/ThemeSwitcher'

import { NavLinkButton } from '../../../shared/uiKit/NavLinkButton'
import { useTranslation } from 'react-i18next'
import { SelectLanguage } from 'src/widgets/SelectLanguage'

const Navbar = (): React.ReactNode => {
  const { t } = useTranslation()

  return (
          <nav className={`flex justify-between pt-2 px-20 ` +
              ` h-navbar border-b-2 border-b-gray`}>
              <div className={'flex gap-6'}>
                  <NavLinkButton to={'/profile'}>{t('Profile')}</NavLinkButton>
                  <NavLinkButton to={'/menu'}>{t('Menu')}</NavLinkButton>
                  <NavLinkButton to={'/'}>{t('Main')}</NavLinkButton>
              </div>
              <div className={'flex gap-4 items-center'}>
                  <Theme/>
                  <SelectLanguage/>
              </div>
          </nav>
  )
}

export default Navbar
