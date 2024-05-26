import {Button} from "../../../../shared/uiKit/Button";
import {useTranslation} from "react-i18next";
import {Input} from "../../../../shared/uiKit/Input";

const LoginForm = () => {

    const {t} = useTranslation();

    return(
        <div className={"flex flex-col"}>
            <Input
                autoFocus={true}
                placeholder={t('Username')}
            />
            <Input
                placeholder={t('Password')}
            />
            <div className={'flex justify-end'}>
                <Button
                    title={t('Login')}
                />
            </div>
        </div>
    )
}

export default LoginForm
