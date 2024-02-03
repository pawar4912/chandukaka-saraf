import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import { ShoppingBag } from './Components/Screens/ShoppingBag';
import { useState } from 'react';

const HomeLayout = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = () => {
        console.log("in handle");
        setOpenDrawer(!openDrawer);
    };
    return (
        <div>
            <ShoppingBag open={openDrawer} handleDrawer={handleOpenDrawer} />
            <Header openDrawer={openDrawer} handleOpenDrawer={handleOpenDrawer} />
            <Outlet className="outlet-container" />
            <Footer />
        </div>
    )
}

export default HomeLayout
