import {type JSX, memo, useState} from 'react'
import Button from '../../../../shared/uiKit/Button/Button.tsx'
import {NavLinkButton} from "../../../../shared/uiKit/NavLinkButton";


const Sidebar = memo((): JSX.Element => {

  const [opened, setOpened] = useState<boolean>(false);

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
                  <NavLinkButton showTitle={opened} to={"profile"}/>
                  <NavLinkButton showTitle={opened} to={"create"}/>
                  <NavLinkButton showTitle={opened} to={"main"}/>
          </div>
      </div>
  )
})

export default Sidebar
