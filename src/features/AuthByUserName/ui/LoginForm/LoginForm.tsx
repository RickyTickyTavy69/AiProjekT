import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback} from "react";
import { Button } from "../../../../shared/uiKit/Button";
import { useTranslation } from "react-i18next";
import { Input } from "../../../../shared/uiKit/Input";
import { Text } from "../../../../shared/uiKit/Text";

import {
    // loginActions,
    loginReducer
} from "../../model/slice/LoginSlice.ts";
import { LoginByUserName } from "../../model/services/LoginByUserName/LoginByUserName.ts";

import { AppDispatch } from "../../../../app/providers/StoreProvider";
// import { getLoginUsername } from "../../model/selectors/getLoginState/getLoginUsername/getLoginUsername.ts";
// import { getLoginPassword } from "../../model/selectors/getLoginState/getLoginPassword/getLoginPassword.ts";
import { getLoginIsLoading } from "../../model/selectors/getLoginState/getLoginIsLoading/getLoginIsLoading.ts";
import { getLoginError } from "../../model/selectors/getLoginState/getLoginError/getLoginError.ts";

import DynamicModuleImport from "../../../../shared/lib/components/DynamicModuleImport/DynamicModuleImport.tsx";

const LoginForm = memo(() => {
 //  const username = useSelector(getLoginUsername);
 //  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const initialReducers = {
    login: loginReducer,
  };

  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  // this can be removed then
 /* const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  ); */

  const handleSubmit = useCallback(
    (formData: FormData) => {
      const username = formData.get("username") as string;
      const password = formData.get("password") as string;
      if (username && password) {
        dispatch(LoginByUserName({ username, password }));
      }
    },
    [dispatch],
  );

  return (
    <DynamicModuleImport
      ReducersList={initialReducers}
      removeAfterUnmount={true}
    >
      <div className={"flex flex-col"}>
        <Text title={t("Authorization Form")} />
        <form action={handleSubmit} className={"flex flex-col gap-1"}>
          <Input
            name={"username"}
            // value={username}
            // onChange={onChangeUsername}
            autoFocus={true}
            placeholder={t("Username")}
          />
          <Input
            name={"password"}
            // value={password}
            // onChange={onChangePassword}
            placeholder={t("Password")}
          />
          <div className={"flex justify-end gap-4"}>
            {error && <Text color={"error"} text={error} />}
            <Button
              type={"submit"}
              disabled={isLoading}
              onClick={() => null}
              title={t("Login")}
            />
          </div>
        </form>
      </div>
    </DynamicModuleImport>
  );
});

export default LoginForm;
