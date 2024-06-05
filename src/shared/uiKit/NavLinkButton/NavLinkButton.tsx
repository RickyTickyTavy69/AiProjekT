import { Link, type LinkProps } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import {DynamicIconImport} from "../../assets";

import {AppRoutes, RoutePaths} from "../../config/routeConfig/RouterTypes.ts";
import {IconName} from "../../assets/assets.types.ts";
import {memo} from "react";



interface NavLinkButtonProps extends LinkProps {
    showTitle?: boolean;
    to: AppRoutes;
}

const NavLinkButton = memo((
  { to, showTitle = true, ...rest }: NavLinkButtonProps
): JSX.Element => {
    const Icon = DynamicIconImport(to as IconName);
    const { t } = useTranslation()
  return (
        <Link {...rest}
              className={`border-black dark:border-white
                text-center
                text-xl
               border-2 h-fit w-fit transition-transform duration-1000
               px-2 py-2 rounded-2xl hover:border-red-600
               flex items-center gap-2`}
              to={RoutePaths[to]}>
            {Icon && Icon}
            {showTitle && <span>{t(`${to}`)}</span>}
        </Link>
  )
});

export default NavLinkButton
