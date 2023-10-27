import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  DocumentTextIcon,
  CogIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  ExclamationCircleIcon,
  ClipboardCheckIcon,
  PuzzleIcon,
  FolderIcon,
  UserCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/solid";
import YourIconComponent from "./YourIconComponent";
import { useMediaQuery } from "react-responsive";

// Replace this with your Indian Oil logo image path
const indianOilLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMA_WYHEgde3B_F2Ub2fgKj6zPZtFSU7mTCwAMV8srfe66spWz0qS_wNRv-nrJLOZs5g0&usqp=CAU";

const Header = ({ isOpen, icon }) => {
  // Use react-responsive to determine screen size
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the maxWidth as needed
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Use an object to store submenu open states
  const [subMenuOpen, setSubMenuOpen] = useState({});

  // Function to toggle a submenu open/close
  const toggleSubMenu = (submenuName) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [submenuName]: !prevState[submenuName],
    }));
  };

  return (
    <div
      className={`sticky top-0 w-full ${
        isMobile ? "px-0" : "px-0" // Add padding only on mobile
      }`}
    >
      {/* <div className="flex bg-[#03174f] justify-between w-full">
        <div className="flex my-auto align-middle items-center">
          <img
            src={indianOilLogo}
            alt="Indian Oil Logo"
            className="h-16 w-16 px-1 mx-2 rounded-full bg-[#03174f]"
          />
          <span className="h-full text-white font-bold text-4xl my-auto px-2">
            IndianOil
          </span>
        </div>
        <div className="flex items-end h-16">
          <img
            src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"
            className="h-16 w-16 rounded-full"
            alt="user picture"
          />
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-[#03174f] to-[#f37022] py-4 px-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {" "}
          <nav className="space-x-4">
            <ul className="flex items-center text-center justify-between sm:space-x-4">
              <li className="flex pb-7">
                <a
                  href="#"
                  className="text-white flex space-y-2 flex-col justify-between items-center"
                >
                  <HomeIcon className="h-6 w-6" />
                  <span>Dashboard</span>
                </a>
              </li>
              <DropdownNavItem
                title="Process"
                icon={<DocumentTextIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Process */}
                <DropdownMenuItem
                  title="Manual Vehicle Movement"
                  link="/manual-vehicle-movement"
                  icon={<YourIconComponent />}
                />
                <DropdownMenuItem
                  title="Vehicle Tag Change"
                  link="/vehicle-tag-change"
                  icon={<YourIconComponent />}
                />
                <DropdownMenuItem
                  title="Tag Status Change"
                  link="/tag-status-change"
                  icon={<YourIconComponent />}
                />
                <DropdownMenuItem
                  title="Tag Upload"
                  link="/tag-upload"
                  icon={<YourIconComponent />}
                />
                <DropdownMenuItem
                  title="Blacklist Vehicle"
                  link="/blacklist-vehicle"
                  icon={<YourIconComponent />}
                />
                {renderDropdown("User Management", [
                  { title: "Submenu Item 1", href: "/submenu-item-1" },
                  { title: "Submenu Item 2", href: "/submenu-item-2" },
                ])}
                {renderDropdown("YAS Scenario", [
                  { title: "Submenu Item 3", href: "/submenu-item-3" },
                  { title: "Submenu Item 4", href: "/submenu-item-4" },
                ])}
                {renderDropdown("Setting", [
                  { title: "Submenu Item 5", href: "/submenu-item-5" },
                  { title: "Submenu Item 6", href: "/submenu-item-6" },
                ])}

                <DropdownMenuItem
                  title="Edit Truck Type Master"
                  link="/edit-truck-type-master"
                  icon={<YourIconComponent />}
                />
                <DropdownMenuItem
                  title="Edit Truck Type"
                  link="/edit-truck-type"
                  icon={<YourIconComponent />}
                />
                <DropdownMenuItem
                  title="Restart Boom Barrier"
                  link="/restart-boom-barrier"
                  icon={<YourIconComponent />}
                />
              </DropdownNavItem>
              <DropdownNavItem
                title="Reports"
                icon={<ClipboardCheckIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Reports */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="Sysadmin"
                icon={<CogIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Sysadmin */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="Manuals"
                icon={<BookOpenIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Manuals */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="Security"
                icon={<ShieldCheckIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Security */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="Issue Tracking"
                icon={<ExclamationCircleIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Issue Tracking */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="Survey"
                icon={<PuzzleIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Survey */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="Configuration"
                icon={<FolderIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Configuration */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="PTA Process"
                icon={<UserCircleIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for PTA Process */}
                {/* Add your content here */}
              </DropdownNavItem>
              <DropdownNavItem
                title="Change Password"
                icon={<LockClosedIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Change Password */}
                {/* Add your content here */}
              </DropdownNavItem>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );

  // Function to render a dropdown item with submenus
  function renderDropdown(title, subItems) {
    const isSubMenuOpen = subMenuOpen[title];

    return (
      <div className="relative inline-block w-full text-left" key={title}>
        <div>
          <button
            onClick={() => toggleSubMenu(title)}
            type="button"
            className="inline-flex justify-between w-full px-4 py-2 text-md text-white bg-[#03174f] border border-white hover:bg-[#f37022] focus:outline-none focus:rin focus:ring-offset-2 focus:ring-indigo-500"
            id={`menu-button-${title}`}
            aria-expanded={isSubMenuOpen}
            aria-haspopup="true"
          >
            <div
              className={`bg-white flex text-black font-semibold text-md px-1 py-1/2 rounded-sm`}
            >
              +
            </div>
            <div className="flex justify-between w-full pl-2">
              {title}
              <YourIconComponent />
            </div>
          </button>
        </div>
        {isSubMenuOpen && (
          <div
            className="origin-top-right absolute -right-48 mt-2 top-0 w-48 rounded-md shadow-lg bg-[#03174f] ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={`menu-button-${title}`}
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {subItems.map((item) => (
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-white hover:bg-[#f37022]"
                  role="menuitem"
                  key={item}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
};

// DropdownNavItem component for individual dropdown items
const DropdownNavItem = ({
  title,
  icon,
  children,
  customClass = "",
  hasSubMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Popover as="li" className={`relative dropdown-item ${customClass}`}>
      {({ isOpen }) => (
        <>
          <Popover.Button
            onClick={toggleOpen}
            className={`${
              isOpen ? "text-white" : "text-white"
            } flex flex-col cursor-pointer space mx-auto items-center focus:outline-none`}
          >
            <div className="flex space-x-1 align-middle space-y-2 md:space-x-4 flex-col items-center">
              {icon}
              <span className="flex text-center mx-auto w-full">{title}</span>
            </div>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 mt-1 transition-transform transform rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 mt-2 transition-transform transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </Popover.Button>

          <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              static
              className="absolute left-0 mt-2 w-64 transform -translate-x-1/2 ml-12"
            >
              <div className="bg-[#03174f] text-white shadow-lg rounded-lg ring-1 ring-white ring-opacity-20 divide-y divide-gray-200">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

// DropdownMenuItem component for individual dropdown menu items
const DropdownMenuItem = ({ title, icon, link }) => {
  return (
    <a
      href={link}
      className="block px-4 py-2 cursor-pointer hover:bg-[#f37022] hover:text-white"
    >
      <div className="flex h- items-center">
        <span className="mr-2">{icon}</span>
        <span>{title}</span>
      </div>
    </a>
  );
};

export default Header;
