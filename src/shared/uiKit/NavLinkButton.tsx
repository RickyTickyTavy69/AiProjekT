import { type JSX } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface NavLinkButtonProps extends LinkProps {}

const NavLinkButton = (
  { to, children, ...rest }: NavLinkButtonProps
): JSX.Element => {
  return (
        <Link {...rest}
              className={`border-navContent
               border-2 h-[30px] min-w-[50px] 
               px-2 rounded-2xl hover:border-red-600`}
              to={to}>
            {children}
        </Link>
  )
}

export default NavLinkButton
