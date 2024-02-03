import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <Outlet className="outlet-container"/>
            <Footer />
        </div>
    )
}

export default HomeLayout
