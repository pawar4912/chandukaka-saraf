import AboutUs from './Components/Screens/AboutUs';
import BlogNews from './Components/Screens/BlogNews';
import ContactUs from './Components/Screens/ContactUs';
import Home from './Components/Screens/Home';
import ProductDashBoard from './Components/Screens/ProductDashBoard';
import TermsAndCondition from './Components/Screens/TermsAndCondition';
import CRSPolicy from './Components/Screens/CRSPolicy';

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
    path: '/terms-&-conditions',
    name: 'Home',
    element: <TermsAndCondition />,
    exact: true,
    strict: false,
  },
  {
    path: '/CSR-Policy',
    name: 'Home',
    element: <CRSPolicy />,
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
    path: '/blognews',
    name: 'Home',
    element: <BlogNews />,
    exact: true,
    strict: false,
  },
  {
    path: '/product-dashboard',
    name: 'Home',
    element: <ProductDashBoard />,
    exact: true,
    strict: false,
  },
];

export default routes;
