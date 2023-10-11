import React, {useCallback, useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {IClothes} from "../Interfaces/IClothes";
import "./Carousel.css"
import ScrumButton from "../Button/Button";
import modal from "../Modal/Modal";
import ModalComponent from "../Modal/Modal";

type CarouselProps = {
    clothes: IClothes[];
}

const CarouselComponent = ({clothes}: CarouselProps) => {
    const [selectedProduct, setSelectedProduct] = useState<IClothes | null>(null)
    const getRandomClothes = (clothes: IClothes[], count: number): IClothes[] => {
        const shuffled = clothes.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const handleModalOpen = (open: boolean, product: IClothes) => {
        setSelectedProduct(product);
        setIsOpen(open)
    }

    const closeModal = useCallback(() => {
        setIsOpen(!modalIsOpen)
    }, [modalIsOpen])

    return (
        <>
            <Carousel infiniteLoop={true} showArrows={true} autoPlay={true} showIndicators={false} showThumbs={false}
                      interval={3000} transitionTime={1000} stopOnHover={true}>
                {getRandomClothes(clothes, 5).map((product, index) => (
                    <>
                        <div key={product.id} className="carousel-item">
                            <img src={product.image} alt={product.title}/>
                            <div className="carousel-content">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <div className={"btn-content"}>
                                    <ScrumButton onClickFunction={() => {
                                        handleModalOpen(true, product);
                                    }}>Voir le produit</ScrumButton>

                                </div>
                            </div>
                        </div>
                        {modalIsOpen && (
                            <ModalComponent modalIsOpen={modalIsOpen} closeModal={closeModal}
                                            product={selectedProduct!}/>
                        )}
                    </>
                ))}
            </Carousel>

        </>
    );
};

export default CarouselComponent;
