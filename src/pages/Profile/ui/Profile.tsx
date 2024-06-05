import {useTranslation} from "react-i18next";

import DynamicModuleImport, {
    ReducersList
} from "../../../shared/lib/components/DynamicModuleImport/DynamicModuleImport.tsx";
import {profileReducer} from "../../../entities/Profile/model/slice/Profile.slice.ts";
import {Text} from "../../../shared/uiKit/Text";



const Profile = () => {
    const { t } = useTranslation()

    const reducers: ReducersList = {
        profile: profileReducer,
    }

    return (
        <DynamicModuleImport ReducersList={reducers}>
            <div>
                <div>
                    <Text
                        title={t('profile')}
                    />
                </div>
            </div>
        </DynamicModuleImport>

    )
}

export default Profile
