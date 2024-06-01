import {FC} from "react";
import './Card.css'
import {Stars} from "../Stars";
import {UpdateRestaurantRaitingArgs} from "../../api/api.ts";

type CardProps = {
    pic: string;
    name: string
    country: string
    rating: number
    id: string
    handleRating: ({id, raiting}: UpdateRestaurantRaitingArgs) => void
}
export const Card: FC<CardProps> = ({pic, name, country, rating, id, handleRating}) => {

    return (
        <div className="card">
            <img src={pic} alt={name} className="image"/>
            <div className="content">
                <h2 className="title">{name}</h2>
                <p className="country">{country}</p>
                <div className="rating">
                    <Stars id={id} handleRating={handleRating} rating={rating}/>
                </div>
            </div>
        </div>
    );
}
