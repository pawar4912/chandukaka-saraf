import ContactUs from './Components/Screens/ContactUs';
import Home from './Components/Screens/Home';
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
    path: '/contactus',
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
];

export default routes;
