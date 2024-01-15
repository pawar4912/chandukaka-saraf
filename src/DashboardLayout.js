import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default DashboardLayout
