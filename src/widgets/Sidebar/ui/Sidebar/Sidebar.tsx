import { type JSX, useState } from 'react'
import Button from '../../../../shared/uiKit/Button/Button.tsx'
import { useTranslation } from 'react-i18next'

const Sidebar = (): JSX.Element => {
  const { t } = useTranslation();

  const [opened, setOpened] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpened((prevState) => !prevState);
  }

  return (
        <div data-testid={"sidebar"} className={`${opened ? 'w-52' : 'w-24'} pt-4 border-r-gray border-r-2 bg-navbar h-full flex justify-center`}>
            <Button data-testid={"toggleButton"} onClick={handleClick} title={`${t(opened ? 'close' : 'open')}`} />
        </div>
  )
}

export default Sidebar
