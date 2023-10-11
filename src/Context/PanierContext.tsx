import {createContext, ReactNode, useEffect, useReducer} from "react";

export const PanierContext = createContext<any>(null);

export const PanierReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_TO_PANIER":
            const existingItem = state.find((item: any) => item.id === action.payload.id);
            if (existingItem) {
                return state.map((item: any) => item.id === action.payload.id ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item);
            } else {
                return [...state, {...action.payload, quantity: 1}];
            }
        case "REMOVE_FROM_PANIER":
            const existingItemIndex = state.findIndex((item: any) => item.id === action.payload.id);
            // Si l'objet n'est pas dans le panier, ne faites rien
            if (existingItemIndex === -1) return state;
            const existingItems = state[existingItemIndex];
            // Si la quantité est supérieure à 1, décrémentez-la
            if (existingItems.quantity > 1) {
                return state.map((item: any) =>
                    item.id === action.payload.id
                        ? {...item, quantity: item.quantity - 1}
                        : item
                );
            }
            // Sinon, supprimez l'objet du panier
            return state.filter((item: any) => item.id !== action.payload.id);
        default:
            return state;
    }
}

type PanierProviderProps = {
    children: ReactNode
}
export const PanierProvider = ({children}: PanierProviderProps) => {
    const [panier, dispatch] = useReducer(PanierReducer, [], () => {
        const localData = localStorage.getItem("panier");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("panier", JSON.stringify(panier));
        if (panier.length === 0) {
            localStorage.removeItem("panier")
        }
    }, [panier]);

    return (
        <PanierContext.Provider value={{panier, dispatch}}>
            {children}
        </PanierContext.Provider>
    )

}