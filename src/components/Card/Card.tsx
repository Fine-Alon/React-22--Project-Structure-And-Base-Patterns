import {FC} from "react";

type CardProps = {
    pic: string;
    name: string
    country: string
    rating: number
}
export const Card: FC<CardProps> = ({pic, name, country, rating}) => {

    return (
        <div className="card">
            <img src={pic} alt={name} className="image"/>
            <div className="content">
                <h2 className="title">{name}</h2>
                <p className="country">{country}</p>
                <div className="rating">
                    {[...Array(rating)].map((_, index) => (
                        <span key={index} className="star">&#9733;</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
