import './Stars.css'
import {FC, useState} from "react";
import './Stars.css';
import {UpdateRestaurantRaitingArgs} from "../../api/api.ts";

type StarsProps = {
    raiting: number;
    id: string;
    handleRating: ({id, raiting}: UpdateRestaurantRaitingArgs) => void;
};

export const Stars: FC<StarsProps> = ({raiting, id, handleRating}) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(raiting);

    const handleMouseEnter = (raiting: number) => {
        setHoveredRating(raiting);
    };
    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    const handleClick = (raiting: number) => {
        setSelectedRating(raiting);
        handleRating({id, raiting});
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= (hoveredRating || selectedRating) ? 'filled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(i)}
                > &#9733; </span>
            );
        }
        return stars;
    };

    return (
        <div className="stars-container">
            {renderStars()}
        </div>
    );
};

