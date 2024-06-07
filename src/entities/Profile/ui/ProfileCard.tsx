import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../app/providers/StoreProvider";
import {fetchProfileData} from "../model/services/FetchProfileData/fetchProfileData.ts";
import {getProfileData} from "../model/selectors/getProfileData/getProfileData.ts";
import {Text} from "../../../shared/uiKit/Text";

const ProfileCard = () => {

    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector(getProfileData);

    // console.log("data is", data);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);


    return (
      <div className={"border-black dark:border-white rounded p-2"}>
          <div className={"flex gap-2"}>
            <div className={"flex flex-col gap-1"}>
              <Text title={"your credentials:"} />
              {data &&
                <div>
                  <div>{data.name}</div>
                  <div>{data.lastName}</div>
                </div>
              }
            </div>
          </div>
      </div>
    );
}

export default ProfileCard;
