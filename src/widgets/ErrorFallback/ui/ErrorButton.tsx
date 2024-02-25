import { type JSX, useEffect, useState } from "react"
import Button from "../../../shared/uiKit/Button/Button.tsx"

const ErrorButton = (): JSX.Element => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (isError) {
      throw new Error()
    }
  }, [isError])
  const onThrow = (): void => {
    setIsError(!isError)
  }
  return (
      <Button onClick={onThrow} title={"Throw Error"}/>
  )
}

export default ErrorButton
