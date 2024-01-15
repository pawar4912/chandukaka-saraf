import AboutUs from './Components/Screens/AboutUs';
import NewsAndBlogs from './Components/Screens/NewsAndBlogs';
import ContactUs from './Components/Screens/ContactUs';
import FindAStore from './Components/Screens/FindAStore';
import Home from './Components/Screens/Home';
import AuthModal from './Components/Screens/AuthModal';
import MyOrder from './Components/Screens/MyOrder';
// import Dashboard from './Components/Screens/Dashboard';
import TermsAndCondition from './Components/Screens/TermsAndCondition';
import CRSPolicy from './Components/Screens/CRSPolicy';
import PrivacyPolicy from './Components/Screens/PrivacyPolicy';
import ProductDetails from './Components/Screens/ProductDetails';
import Bullions from './Components/Screens/Bullions';
import Jewellerys from './Components/Screens/Jewellerys';
import { PersonalDetails } from './Components/Screens/PersonalDetails';
import { AddressBook } from './Components/Screens/Address-book/AddressBook';
import { ShoppingBag } from './Components/Screens/ShoppingBag';
import { Wishlist } from './Components/Screens/Wishlist/Wishlist';

export const frontAppRoutes = [
  {
    path: '/home/',
    name: 'Home',
    element: <Home />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/contact-us',
    name: 'Contact Us',
    element: <ContactUs />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/terms-and-conditions',
    name: 'Terms And Condition',
    element: <TermsAndCondition />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/CSR-Policy',
    name: 'CRS Policy',
    element: <CRSPolicy />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/privacy-policy',
    name: 'PrivacyPolicy',
    element: <PrivacyPolicy />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/aboutus',
    name: 'About Us',
    element: <AboutUs />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/auth',
    name: 'Auth',
    element: <AuthModal />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/news-&-blog',
    name: 'News And Blogs',
    element: <NewsAndBlogs />,
    exact: true,
    strict: false,
  },
  // {
  //   path: '/home/dashboard',
  //   name: 'Home',
  //   element: <Bullions />,
  //   exact: true,
  //   strict: false,
  // },
  {
    path: '/home/bullions',
    name: 'Bullions',
    element: <Bullions />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/jewellerys',
    name: 'Jewellerys',
    element: <Jewellerys />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/find-a-store',
    name: 'Find A Store',
    element: <FindAStore />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/address-book',
    name: 'Address Book',
    element: <AddressBook />,
    exact: true,
    strict: false,
  },
  {
    path: '/home/wishlist',
    name: 'Wish List',
    element: <Wishlist />,
    exact: true,
    strict: false,
  },
   {
    path: '/home/shopping-bag',
    name: 'Shopping Bag',
    element: <ShoppingBag />,
    exact: true,
    strict: false,
  },
];

export const dashboardRoutes = [
  {
    path: '/dashboard/product-details',
    name: 'Product Details',
    element: <ProductDetails />,
    exact: true,
    strict: false,
  },
  {
    path: '/dashboard/personal-details',
    name: 'Personal Details',
    element: <PersonalDetails />,
    exact: true,
    strict: false,
  },
  {
    path: '/dashboard/myorder',
    name: 'My Order',
    element: <MyOrder />,
    exact: true,
    strict: false,
  },
]
