import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import logo from "../assets/logo.png";

// Navbar links and icons
const navbarLinks = [
  {
    title: 'Domain Search',
    icon: <SiShopware />,
    path: '/domain-search'
  },
  {
    title: 'Leak Search',
    icon: <SiShopware />,
    path: '/leak-search'
  },
  {
    title: 'Logs Search',
    icon: <SiShopware />,
    path: '/logs-search'
  },
  {
    title: 'Pricing',
    icon: <SiShopware />,
    path: '/pricing'
  },
  {
    title: 'Profile',
    icon: <SiShopware />,
    path: '/profile'
  },
  {
    title: 'Indexed',
    icon: <SiShopware />,
    path: '/indexed'
  }
];

const Sidebar = () => {
  // CSS classes
  const normalLink = 'flex items-center gap-3 pl-4 py-2 rounded-md text-gray-800 text-lg hover:bg-gray-100';

  return (
    <>
      {/* Navbar */}
      <div className="top-0 left-0 w-full bg-white text-gray-800 shadow-lg z-50">
        <div className="max-w-10xl mx-auto px-10">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl font-semibold">
              <img className="h-12 w-22 mr-2" src={logo} alt="Logo" />
            </Link>

            {/* Navbar Links */}
            <div className="flex items-center space-x-4">
              {navbarLinks.map((link) => (
                <NavLink
                  to={link.path}
                  key={link.title}
                  activeClassName="text-red-600"
                  className={normalLink}
                >

                  <span className="capitalize">{link.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
