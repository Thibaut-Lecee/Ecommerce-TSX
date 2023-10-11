import {IClothes} from "../Interfaces/IClothes";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import Modal from "react-modal"


type ModalProps = {
    modalIsOpen: boolean,
    closeModal: () => void;
    product: IClothes;  // Ajoutez ceci
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: 'auto'
    },
};

const ModalComponent = ({modalIsOpen, closeModal, product}: ModalProps) => {

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
            <h1>{product.title}</h1>
            <CardMedia
                component="img"
                alt={product.title}
                sx={{maxWidth: 200, maxHeight: 200, objectFit: "cover"}}
                image={product.image}
            />
            <p>{product.description}</p>
            <p>Prix: {product.price} €</p>
            <p>Note: {product.rating.rate}</p>
        </Modal>
    )
}

export default ModalComponent;
