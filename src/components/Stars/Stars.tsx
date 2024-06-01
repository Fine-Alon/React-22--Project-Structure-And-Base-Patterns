import './Stars.css'
import {FC} from "react";

type StarsProps = {
    rating: number
}
export const Stars: FC<StarsProps> = ({rating}) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;
    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <span key={index} className="star">&#9733;</span> // Полная звезда
            ))}
            {hasHalfStar && <span className="star">&#9734;</span>} {/* Полая звезда */}
            {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                <span key={index + fullStars + 1} className="star">&#9734;</span> // Полая звезда
            ))}
        </>
    );
};
