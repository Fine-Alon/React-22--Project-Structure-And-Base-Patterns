import { useState, FC } from "react";
import './StarsEditor.css';

type StarsProps = {
    onRatingChange?: (rating: number) => void;
};

export const StarsEditor: FC<StarsProps> = ({ onRatingChange }) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);

    const handleMouseEnter = (rating: number) => {
        setHoveredRating(rating);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    const handleClick = (rating: number) => {
        setSelectedRating(rating);
        onRatingChange(rating);
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
                >
                    &#9733;
                </span>
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

