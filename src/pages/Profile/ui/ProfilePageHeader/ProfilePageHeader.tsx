
import {useDispatch, useSelector} from "react-redux";

import {Button} from "../../../../shared/uiKit/Button";

import {AppDispatch} from "../../../../app/providers/StoreProvider";
import {profileActions} from "../../../../entities/Profile/model/slice/Profile.slice.ts";
import {updateProfileData} from "../../../../entities/Profile/model/services/UpdateProfileData/updateProfileData.ts";
import {getProfileReadOnly} from "../../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadOnly";

const ProfilePageHeader = () => {

    const dispatch = useDispatch<AppDispatch>();
    const readonly = useSelector(getProfileReadOnly);

    const editProfile = () => {
        dispatch(profileActions.changeReadonlyState());
    }

    const handleCancel = () => {
        dispatch(profileActions.cancelEditing());
    }

    const applyChanges = () => {
        dispatch(updateProfileData())
    }

    return(
        <div className={"w-full h-5 my-8"}>
            {!readonly ?
                <div className={"flex gap-4"}>
                    <Button
                        color={"success"}
                        onClick={applyChanges}
                        title={"okay"}
                    />
                    <Button
                        color={"error"}
                        onClick={handleCancel}
                        title={"cancel"}
                    />
                </div> :
                <div>
                    <Button
                        color={"warning"}
                        onClick={editProfile}
                        title={"Edit Profile"}
                    />
                </div>
            }
        </div>
    )
}

export default ProfilePageHeader;
