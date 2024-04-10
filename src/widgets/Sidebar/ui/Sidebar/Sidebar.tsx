import { type JSX, useState } from 'react'
import Button from '../../../../shared/uiKit/Button/Button.tsx'
import { useTranslation } from 'react-i18next'
import {NavLinkButton} from "../../../../shared/uiKit/NavLinkButton";
import {RoutePaths} from "../../../../shared/config/routeConfig/RouterTypes.ts";

const Sidebar = (): JSX.Element => {
  const { t } = useTranslation();

  const [opened, setOpened] = useState<boolean>(true);

  const handleClick = (): void => {
    setOpened((prevState) => !prevState);
  }

  return (
      <div data-testid={"sidebar"}
           className={`${opened ? 'w-44' : 'w-16'} transition-all pt-4 border-r-gray border-r-2 bg-navbar h-full flex flex-col box-content`}>

          <div className={`flex justify-around pb-4`}>
              <Button data-testid={"toggleButton"} onClick={handleClick}
                      title={`${opened ? '< ' : ' >'}`}/>
          </div>

          <div className={'flex flex-col items-center gap-6 py-8'}>
                  <NavLinkButton showTitle={opened} icon={"profile"} to={RoutePaths.profile}>{t('Profile')}</NavLinkButton>
                  <NavLinkButton showTitle={opened} icon={"ai_art"} to={RoutePaths.create}>{t('Create')}</NavLinkButton>
                  <NavLinkButton showTitle={opened} icon={"home"} to={RoutePaths.main}>{t('Main')}</NavLinkButton>
          </div>
      </div>
  )
}

export default Sidebar
