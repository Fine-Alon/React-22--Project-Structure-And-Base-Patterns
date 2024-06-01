import './Stars.css'
import {FC, useState} from "react";
import {UpdateRestaurantRaitingArgs} from "../../api/api.ts";
import {StarsEditor} from "../StarsEditor";

type StarsProps = {
    rating: number
    id: string
    handleRating: ({id, raiting}: UpdateRestaurantRaitingArgs) => void
}
export const Stars: FC<StarsProps> = ({rating, id, handleRating}) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;

    const [newRating, setNewRating] = useState(rating)
    const [editMode, setEditMode] = useState(true)


    const handleClick = () => {
        handleRating({id, raiting: newRating})
        console.log(id)
    }

    return (<button className='stars-container' onClick={handleClick}>
            {!editMode
                ? <>
                    {[...Array(fullStars)].map((_, index) => (
                        <span key={index} className="star">&#9733;</span> // Полная звезда
                    ))}
                    {hasHalfStar && <span className="star">&#9734;</span>} {/* Полая звезда */}
                    {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                        <span key={index + fullStars + 1} className="star">&#9734;</span> // Полая звезда
                    ))}
                </>
                : <StarsEditor/>
                //     ==============     ЗВЕЗДЫ   =========
                //     ==============     ЗВЕЗДЫ   =========
                //     ==============     ЗВЕЗДЫ   =========
                //     ==============     ЗВЕЗДЫ   =========
                //     ==============     ЗВЕЗДЫ   =========
            }
        </button>
    );
};
