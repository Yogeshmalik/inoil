import React from "react";
import { Fragment } from "react";
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

// Replace this with your Indian Oil logo image path
const indianOilLogo =
  "https://toppng.com/uploads/preview/indian-oil-vector-logo-11574259607xqymnsndtg.png";

const Header = () => {
  return (
    <>
      <div className="flex bg-[#03174f]">
        <img
          src={indianOilLogo}
          alt="Indian Oil Logo"
          className="h-16 w-16 rounded-full bg-[#03174f]"
        />
        <span className=" h-full text-white font-bold text-xl my-auto px-8">
          IndianOil
        </span>
      </div>
      <div className="bg-gradient-to-r from-[#03174f] to-[#f37022] py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="space-x-4">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-white flex flex-col items-center">
                  <HomeIcon className="h-6 w-6" />
                  Dashboard
                </a>
              </li>
              <DropdownNavItem
                title="Process"
                icon={<DocumentTextIcon className="h-6 w-6" />}
              >
                {/* Dropdown content for Process */}
                {/* Add your content here */}
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
    </>
  );
};

// DropdownNavItem component for individual dropdown items
const DropdownNavItem = ({ title, icon, children }) => {
  return (
    <Popover as="li" className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`${
              open ? "text-white" : "text-white"
            } flex flex-col items-center focus:outline-none`}
          >
            {icon}
            {title}
          </Popover.Button>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              static
              className="absolute z-10 mt-2 transform -translate-x-1/2 left-1/2"
            >
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
