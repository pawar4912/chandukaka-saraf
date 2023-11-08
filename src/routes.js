import AboutUs from './Components/Screens/AboutUs';
import ContactUs from './Components/Screens/ContactUs';
import Home from './Components/Screens/Home';
import LoginRegister from './Components/Screens/LoginRegister';
import MyOrder from './Components/Screens/MyOrder';
import PrivacyPolicy from './Components/Screens/PrivacyPolicy';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    exact: true,
    strict: false,
  },
  {
    path: '/test',
    name: 'Home',
    element: <Home />,
    exact: true,
    strict: false,
  },
  {
    path: '/contact-us',
    name: 'Home',
    element: <ContactUs />,
    exact: true,
    strict: false,
  },
  {
    path: '/privacy-policy',
    name: 'Home',
    element: <PrivacyPolicy />,
    exact: true,
    strict: false,
  },
  {
    path: '/aboutus',
    name: 'Home',
    element: <AboutUs />,
    exact: true,
    strict: false,
  },
  {
    path: '/loginregister',
    name: 'Home',
    element: <LoginRegister/>,
    exact: true,
    strict: false,
  },
  {
    path: '/myorder',
    name: 'Home',
    element: <MyOrder/>,
    exact: true,
    strict: false,
  },
];

export default routes;
