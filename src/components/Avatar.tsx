import {FC} from "react";

type AvatarProps = {
    avatar?: string
}
export const Avatar: FC<AvatarProps> = ({avatar}) => {

    return <div className="profile">
        <img alt="profile" src={avatar ? avatar : "/avatar.png"}/>
    </div>
}
