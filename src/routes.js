import AboutUs from './Components/Screens/AboutUs';
import NewsAndBlogs from './Components/Screens/NewsAndBlogs';
import ContactUs from './Components/Screens/ContactUs';
import FindAStore from './Components/Screens/FindAStore';
import Home from './Components/Screens/Home';
import TermsAndCondition from './Components/Screens/TermsAndCondition';
import CRSPolicy from './Components/Screens/CRSPolicy';
import PrivacyPolicy from './Components/Screens/PrivacyPolicy';
import Bullions from './Components/Screens/Bullions';
import Jewellerys from './Components/Screens/Jewellerys';

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
    name: 'ContactUs',
    element: <ContactUs />,
    exact: true,
    strict: false,
  },
  {
    path: '/terms-&-conditions',
    name: 'TermsAndCondition',
    element: <TermsAndCondition />,
    exact: true,
    strict: false,
  },
  {
    path: '/CSR-Policy',
    name: 'CRSPolicy',
    element: <CRSPolicy />,
    exact: true,
    strict: false,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    element: <PrivacyPolicy />,
    exact: true,
    strict: false,
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    element: <AboutUs />,
    exact: true,
    strict: false,
  },
  {
    path: '/news-&-blog',
    name: 'NewsAndBlogs',
    element: <NewsAndBlogs />,
    exact: true,
    strict: false,
  },
  {
    path: '/bullions',
    name: 'Home',
    element: <Bullions />,
    exact: true,
    strict: false,
  },
  {
    path: '/jewellerys',
    name: 'Home',
    element: <Jewellerys />,
    exact: true,
    strict: false,
  },
  {
    path: '/find-a-store',
    name: 'Home',
    element: <FindAStore />,
    exact: true,
    strict: false,
  },
];

export default routes;
