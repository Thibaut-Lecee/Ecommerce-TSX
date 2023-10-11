import React from 'react';
import {IClothes} from "../Interfaces/IClothes";
import MediaCard from "./MediaCard";

type CardComponentPros = {
    clothes: IClothes[];
}


const CardComponent = ({clothes}: CardComponentPros) => {

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", margin: 2}}>
            {clothes.map((clothe, index) => (
                <MediaCard key={index} clothes={clothe}/>
            ))}
        </div>
    )
}

export default CardComponent;