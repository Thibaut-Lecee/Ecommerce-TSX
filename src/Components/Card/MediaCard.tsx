import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IClothes, Rating} from "../Interfaces/IClothes";
import ScrumButton from "../Button/Button";
import {useCallback, useState} from "react";
import ModalComponent from "../Modal/Modal";
import {usePanier} from "../../Hooks/usePanierContext";
import panier from "../Panier/Panier";

type MediaCardProps = {
    clothes: IClothes

}
const MediaCard = ({clothes}: MediaCardProps) => {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const {addToPanier, removeFromPanier} = usePanier();

    const handleModalOpen = (open: boolean) => {
        setIsOpen(open)
    }

    const closeModal = useCallback(() => {
        setIsOpen(!modalIsOpen)
    }, [modalIsOpen])

    return (
        <>
            <Card sx={{maxWidth: 345, maxHeight: 345, marginBottom: 5}} style={{overflow: "auto"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{maxWidth: 200, maxHeight: 200, objectFit: "cover"}}

                    image={clothes.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {clothes.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {clothes.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {clothes.price} €
                    </Typography>
                </CardContent>
                <CardActions>
                    <ScrumButton onClickFunction={() => addToPanier(clothes)}>Ajouter au panier</ScrumButton>
                    <ScrumButton onClickFunction={() => removeFromPanier(clothes)}>Retirer du panier</ScrumButton>
                    <ScrumButton onClickFunction={() => handleModalOpen(true)}>Voir l'article</ScrumButton>
                </CardActions>

            </Card>
            {modalIsOpen && (
                <ModalComponent
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    product={clothes}  // Passez les détails du produit ici
                />
            )}
        </>
    );
}
export default MediaCard;
