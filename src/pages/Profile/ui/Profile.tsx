import DynamicModuleImport, {
  ReducersList,
} from "../../../shared/lib/components/DynamicModuleImport/DynamicModuleImport.tsx";
import {profileActions, profileReducer} from "../../../entities/Profile/model/slice/Profile.slice.ts";
import { ProfileCard } from "../../../entities/Profile";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/providers/StoreProvider";
import {useCallback, useEffect} from "react";
import { fetchProfileData } from "../../../entities/Profile/model/services/FetchProfileData/fetchProfileData.ts";
import {getFormData} from "../../../entities/Profile/model/selectors/getFormData/getFormData.ts";
import { getProfileIsLoading } from "../../../entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading.ts";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader.tsx";
import {getProfileReadOnly} from "../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadOnly.ts";
import {PageLoader} from "../../../widgets/PageLoader";
import {Text} from "../../../shared/uiKit/Text";

const Profile = () => {
  const data = useSelector(getFormData);
  // const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const reducers: ReducersList = {
    profile: profileReducer,
  };

  const onHandleChange = useCallback((value: string, name: string) => {
    dispatch(profileActions.changeProfileForm({
      [name]: value,
    }));
  }, [dispatch]);

  return (
    <DynamicModuleImport ReducersList={reducers}>
      <div className={"flex flex-col h-full"}>
        {(data?.name && data?.lastName) &&
            <>
              <ProfilePageHeader/>
              <ProfileCard
                  onHandleChange={onHandleChange}
                  isLoading={isLoading}
                  profileForm={data}
                  readonly={readonly}
              />
            </>
        }


        { !(data?.name && data?.lastName) && (
            <>
              {isLoading ? (
                  <PageLoader />
              ) : (
                  <Text
                      text={"Some error happened, please refresh the page."}
                      color={"error"}
                  />
              )}
            </>
        )}
      </div>

    </DynamicModuleImport>
  );
};

export default Profile;
