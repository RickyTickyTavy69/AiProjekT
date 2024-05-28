import {Button} from "../../../../shared/uiKit/Button";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/uiKit/Input";
import {Text} from "../../../../shared/uiKit/Text";
import {useDispatch} from "react-redux";
import {loginActions} from "../../model/slice/LoginSlice.ts";
import {LoginByUserName} from "../../model/services/LoginByUserName/LoginByUserName.ts";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState.ts";
import {useSelector} from "react-redux";
import {memo, useCallback} from "react";


const LoginForm = memo(() => {

    const {username, password, isLoading, error} = useSelector(getLoginState);

    const {t} = useTranslation();

    const dispatch = useDispatch();

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
                {error && <Text color={"error"} text={error} />}
                <Button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    title={t('Login')}
                />
            </div>
        </div>
    )
});

export default LoginForm
