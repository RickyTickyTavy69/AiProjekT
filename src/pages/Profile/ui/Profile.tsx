import DynamicModuleImport, {
    ReducersList
} from "../../../shared/lib/components/DynamicModuleImport/DynamicModuleImport.tsx";
import {profileReducer} from "../../../entities/Profile/model/slice/Profile.slice.ts";
import {ProfileCard} from "../../../entities/Profile";



const Profile = () => {

    const reducers: ReducersList = {
        profile: profileReducer,
    }

    return (
        <DynamicModuleImport ReducersList={reducers}>
                <ProfileCard/>
        </DynamicModuleImport>

    )
}

export default Profile
