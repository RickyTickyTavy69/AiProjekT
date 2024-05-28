import React, {useCallback, useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

import { SelectLanguage } from "src/widgets/SelectLanguage";
import { Theme } from "src/widgets/ThemeSwitcher";
import { Button } from "../../../shared/uiKit/Button";

import { LoginModal } from "../../../features/AuthByUserName";
import { getAuthData } from "../../../entities/User/model/selectors/getAuthData/getAuthData.ts";
import { User } from "../../../entities/User";
import {userActions} from "../../../entities/User";

const Navbar = (): React.ReactNode => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const user: User | undefined = useSelector(getAuthData);
  const dispatch = useDispatch();

  const onModalToggle = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const onLogOut = useCallback(() => {
      dispatch(userActions.logout());
  }, [dispatch])

  console.log("user is", user);

  useEffect(() => {
    if(user?.username && user.id){
      setModalOpen(false)
    }
  }, [user])

  return (
    <>
      {(user?.id && user.username) ? (
        <nav
          className={
            `flex justify-end pt-2 px-20 ` +
            ` h-navbar border-b-2 border-b-gray gap-12`
          }
        >
          <div className={"flex items-center"}>
            <Button onClick={onLogOut} title={t(`Logout`)} />
          </div>
          <LoginModal isOpen={modalOpen} onClose={onModalToggle} />
          <div className={"flex gap-4 items-center"}>
            <Theme />
            <SelectLanguage short={false} />
          </div>
        </nav>
      ) : (
        <nav
          className={
            `flex justify-end pt-2 px-20 ` +
            ` h-navbar border-b-2 border-b-gray gap-12`
          }
        >
          <div className={"flex items-center"}>
            <Button onClick={onModalToggle} title={t(`Login`)} />
          </div>
          <LoginModal isOpen={modalOpen} onClose={onModalToggle} />
          <div className={"flex gap-4 items-center"}>
            <Theme />
            <SelectLanguage short={false} />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
