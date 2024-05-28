import { type JSX } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import {IconName} from "../../assets/assets.types.ts";
import {DynamicIconImport} from "../../assets";

interface NavLinkButtonProps extends LinkProps {
    icon?: IconName;
    showTitle?: boolean;
}

const NavLinkButton = (
  { to, children, icon, showTitle = true, ...rest }: NavLinkButtonProps
): JSX.Element => {
    const Icon = DynamicIconImport(icon);
  return (
        <Link {...rest}
              className={`border-black dark:border-white
                text-center
                text-xl
               border-2 h-fit w-fit transition transition-transform duration-1000
               px-2 py-2 rounded-2xl hover:border-red-600
               flex items-center gap-2`}
              to={to}>
            {icon && Icon}
            {showTitle && children}
        </Link>
  )
}

export default NavLinkButton
