import Sidebar from './Components/Common/Sidebar';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <>
            <Header />
            <div className="d-flex dash-wrapper">
                <div className="col-0 col-md-5 col-lg-4">
                    <Sidebar />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout
