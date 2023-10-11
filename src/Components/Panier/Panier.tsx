import React from "react"
import Layout from "../Layout/Layout";
import {usePanier} from "../../Hooks/usePanierContext";
import CardComponent from "../Card/CardComponent";

const PanierComponent = () => {
    const {panier} = usePanier();


    return (
        <Layout>
            <div className="panier">
                <CardComponent clothes={panier}/>
            </div>
        </Layout>
    )
}


export default PanierComponent;