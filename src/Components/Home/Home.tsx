import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import {getClothes} from "../../Axios/axiosGet";
import CarouselComponent from "../Carousel/Carousel";
import {IClothes} from "../Interfaces/IClothes";
import CardComponent from "../Card/CardComponent";

const Home = () => {
    const [clothes, setClothes] = useState<IClothes[]>([]);
    const getClothesFromApi = async () => {
        const response = await getClothes();
        if (response) {
            setClothes(response)
        }
    }


    useEffect(() => {
        getClothesFromApi();
    }, [])
    return (
        <Layout>
            <div className="home">
                <div className={"home_carousel"}>
                    <CarouselComponent clothes={clothes}/>
                </div>
                <div>
                    <CardComponent clothes={clothes}/>
                </div>
            </div>
        </Layout>


    )

}

export default Home