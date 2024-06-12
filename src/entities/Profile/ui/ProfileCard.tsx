import { Text } from "../../../shared/uiKit/Text";
import { ProfileSchema } from "../index.ts";

import { Input } from "../../../shared/uiKit/Input";
import Image from "../../../shared/uiKit/Image/Image.tsx";

const ProfileCard = ({
  profileForm,
  readonly,
  onHandleChange,
}: Omit<ProfileSchema, "user"> & {
  onHandleChange: (value: string, name: string) => void;
}) => {

  return (
    <div className={"border-black dark:border-white border-2 rounded px-2"}>
      <div className={"flex gap-2"}>
        <div className={"flex flex-col gap-1"}>
          <Text title={"your credentials:"} />
          {profileForm &&
            <div>
              <Input
                placeholder={"your name"}
                onChange={onHandleChange}
                readonly={readonly}
                value={profileForm.name}
                name={"name"}
              />
              <Input
                placeholder={"your lastname"}
                onChange={onHandleChange}
                readonly={readonly}
                value={profileForm.lastName}
                name={"lastName"}
              />
              <Input
                placeholder={"username"}
                onChange={onHandleChange}
                readonly={readonly}
                value={profileForm.username}
                name={"username"}
              />
              <Input
                placeholder={"age"}
                onChange={onHandleChange}
                readonly={readonly}
                value={profileForm.age}
                name={"age"}
              />
              <Input
                placeholder={"city"}
                onChange={onHandleChange}
                readonly={readonly}
                value={profileForm.city}
                name={"city"}
              />
              <Input
                placeholder={"country"}
                onChange={onHandleChange}
                readonly={readonly}
                value={profileForm.country}
                name={"country"}
              />
              <div>
                <div>Avatar:</div>
                {readonly ? (
                  <Image size={"XL"} src={profileForm.avatar} />
                ) : (
                    <>
                      <Input
                          placeholder={"enter avatar url"}
                          onChange={onHandleChange}
                          value={profileForm.avatar}
                          name={"avatar"}
                      />
                      <Image size={"XL"} src={profileForm.avatar} />
                    </>
                )}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
