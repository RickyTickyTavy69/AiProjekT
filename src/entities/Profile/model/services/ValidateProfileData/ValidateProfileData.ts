import {ProfileType} from "../../types/Profile.schema.ts";

enum ValidationErrors{
    NAME_REQUIRED = "Name and lastname is required",
    AGE_ISNAN = "Age must be a number",
    USERNAME_WRONG_LENGTH = "Username must be between 3 and 10 characters",
}

const ValidateProfileData = (profileData: ProfileType): ValidationErrors | null => {

    if(!profileData.name || !profileData.lastName){
        return ValidationErrors.NAME_REQUIRED;
    }

    if(profileData.age && isNaN(+profileData?.age)){
        return ValidationErrors.AGE_ISNAN;
    }

    if(profileData.username && (profileData.username.length < 3 || profileData.username.length > 14)){
        return ValidationErrors.USERNAME_WRONG_LENGTH;
    }

    return null;
}

export default ValidateProfileData;
