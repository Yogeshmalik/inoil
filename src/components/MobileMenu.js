import React from "react";
import DropdownNavItem from "./DropdownNavItem"; 
import DropdownMenuItem from "./DropdownMenuItem"; 
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
import YourIconComponent from "../pages/YourIconComponent";

const MobileMenu = () => {
  return (
    <nav className="space-x-4">
      <ul className="flex flex-col items-center sm:space-x-4 md:space-x-10">
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
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Reports"
          icon={<ClipboardCheckIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Reports */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Sysadmin"
          icon={<CogIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Sysadmin */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Manuals"
          icon={<BookOpenIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Manuals */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Security"
          icon={<ShieldCheckIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Security */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Issue Tracking"
          icon={<ExclamationCircleIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Issue Tracking */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Survey"
          icon={<PuzzleIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Survey */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Configuration"
          icon={<FolderIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Configuration */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="PTA Process"
          icon={<UserCircleIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for PTA Process */}
          {/* ... */}
        </DropdownNavItem>
        <DropdownNavItem
          title="Change Password"
          icon={<LockClosedIcon className="h-6 w-6" />}
        >
          {/* Dropdown content for Change Password */}
          {/* ... */}
        </DropdownNavItem>
      </ul>
    </nav>
  );
};

export default MobileMenu;
