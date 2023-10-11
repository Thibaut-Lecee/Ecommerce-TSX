// NavBar.js
import React, {useEffect, useState} from 'react';
import './NavBar.css';
import Button from "@mui/material/Button"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {useNavigate, useParams} from "react-router-dom";
import {usePanier} from "../../Hooks/usePanierContext";
import {postProduct} from "../../Axios/axiosPost";

const NavBar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const {panier} = usePanier();
    const totalItems = panier.reduce((acc: any, item: { quantity: number; }) => acc + item.quantity, 0);
// Affichez totalItems où vous voulez dans votre Navbar.
const handleAddProduct = async() => {
    const sendProduct = await postProduct('test', 13.4, 'lorem ipsum set', 'https://i.pravatar.cc',
     'electronic')
    console.log(sendProduct)

}

    return (
        <div className="navbar">
            <div className="icon-left">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
                {showMenu &&
                    <div className="cardLeft">
                        <Button variant={"outlined"} onClick={() => navigate('/')}>Accueil</Button>
                        <Button variant={"outlined"}>A propos</Button>
                        <Button variant={"outlined"}>Contact</Button>
                        <Button variant={"outlined"} onClick={() => handleAddProduct()}>Ajouter un produit</Button>
                    </div>
                }
            </div>
            <div className="icon-right" onClick={() => navigate('/panier')}>
                <Button variant={"outlined"}>
                    <ShoppingCartOutlinedIcon/>
                    {totalItems}
                </Button>
            </div>
            {/* Icône de caddie */}
        </div>
    );
};

export default NavBar;
