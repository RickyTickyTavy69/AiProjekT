import SVG from '../lib/icecat.svg?react'
import {Text} from "@/shared/uiKit/Text";
const PageLoader = (): JSX.Element => {
  return (
      <div className={'flex flex-col items-center'}>
          <SVG color={'currentColor'} height={'400px'} width={'400px'}/>
          <Text title={'AI PROJECT'}></Text>
      </div>
  )
}

export default PageLoader
