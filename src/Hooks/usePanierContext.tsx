import {PanierContext} from "../Context/PanierContext";
import {useContext} from "react";
import toast from "react-hot-toast";


export const usePanier = () => {
    const {dispatch, panier} = useContext(PanierContext);

    const addToPanier = (item: any) => {
        dispatch({type: "ADD_TO_PANIER", payload: item});
        localStorage.setItem("panier", JSON.stringify(panier));
        toast.success("Article ajouté au panier")
    }

    const removeFromPanier = (item: any) => {
        dispatch({type: "REMOVE_FROM_PANIER", payload: item});
        localStorage.setItem("panier", JSON.stringify(panier));
        toast.error("Article supprimé du panier")
    }

    return {
        addToPanier,
        removeFromPanier,
        panier
    }
}