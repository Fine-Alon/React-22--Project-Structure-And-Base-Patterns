import {FC, ReactNode} from "react";
import './Rooms.css';

interface RoomsProps {
    children: ReactNode
}

export const Rooms: FC<RoomsProps> = ({children}) => {

    return (
        <div className="room-box">
            {children}
        </div>
    );
}
