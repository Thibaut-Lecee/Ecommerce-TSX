import React, {ReactNode} from 'react';
import NavBar from "../Navigation/NavBar";

type LayoutProps = {
    children: ReactNode,
}
const Layout = ({children}: LayoutProps) => {
    return (
        <div className={"layout"}>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout