import React from 'react'
import { Theme } from 'src/widgets/ThemeSwitcher'

import { SelectLanguage } from 'src/widgets/SelectLanguage'

const Navbar = (): React.ReactNode => {

  return (
          <nav className={`flex justify-end pt-2 px-20 ` +
              ` h-navbar border-b-2 border-b-gray`}>

              <div className={'flex gap-4 items-center'}>
                  <Theme/>
                  <SelectLanguage short={false}/>
              </div>
          </nav>
  )
}

export default Navbar
