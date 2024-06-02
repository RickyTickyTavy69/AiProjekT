import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";

import {Button} from "../../../../shared/uiKit/Button";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/uiKit/Input";
import {Text} from "../../../../shared/uiKit/Text";

import {loginActions, loginReducer} from "../../model/slice/LoginSlice.ts";
import {LoginByUserName} from "../../model/services/LoginByUserName/LoginByUserName.ts";

import {AppDispatch} from "../../../../app/providers/StoreProvider/config/store.ts";
import {getLoginUsername} from "../../model/selectors/getLoginState/getLoginUsername.ts";
import {getLoginPassword} from "../../model/selectors/getLoginState/getLoginPassword.ts";
import {getLoginIsLoading} from "../../model/selectors/getLoginState/getLoginIsLoading.ts";
import {getLoginError} from "../../model/selectors/getLoginState/getLoginError.ts";

import DynamicModuleImport from "../../../../shared/lib/components/DynamicModuleImport/DynamicModuleImport.tsx";


const LoginForm = memo(() => {

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const initialReducers = {
        login: loginReducer,
    }

    const {t} = useTranslation();

    const dispatch = useDispatch<AppDispatch>();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const handleSubmit = useCallback(() => {
        dispatch(LoginByUserName({username, password}));
    }, [dispatch, username, password])

    return(
        <DynamicModuleImport
            ReducersList={initialReducers}
            removeAfterUnmount={true}
        >
            <div className={"flex flex-col"}>
                <Text
                    title={t("Authorization Form")}
                />
                <Input
                    value={username}
                    onChange={onChangeUsername}
                    autoFocus={true}
                    placeholder={t('Username')}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    placeholder={t('Password')}
                />
                <div className={'flex justify-end gap-4'}>
                    {error && <Text color={"error"} text={error}/>}
                    <Button
                        disabled={isLoading}
                        onClick={handleSubmit}
                        title={t('Login')}
                    />
                </div>
            </div>
        </DynamicModuleImport>
    )
});

export default LoginForm
