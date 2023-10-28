import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ currentPath }) => {
  // Define a function to extract the breadcrumb trail based on the pathname
  const getBreadcrumbTrail = (pathname) => {
    const breadcrumbs = pathname.split("/").filter((crumb) => crumb);

    // Map each breadcrumb to its corresponding text
    return breadcrumbs.map((breadcrumb, index, array) => {
      // Define the text for each breadcrumb
      let text;
      switch (breadcrumb) {
        // case "process":
        //   text = "Process";
        //   break;
        // case "yas-scenario":
        //   text = "YAS Scenario";
        //   break;
        // case "vehicle-number-change":
        //   text = "YAS Scenario > Vehicle Number Change";
        //   break;
        default:
          // Capitalize the first letter of each word and replace "-" with spaces
          text = breadcrumb
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
      }

      // Define the path for each breadcrumb by joining the parts of the path
      const path = "/" + array.slice(0, index + 1).join("/");

      return { text, path };
    });
  };

  const breadcrumbTrail = getBreadcrumbTrail(currentPath);

  return (
    <div className="flex justify-between mt-16 px-2 md:px-4 z-0 absolute w-full">
      <div className="mx-auto bg-white w-full lg:mx-0 sm:text-cente lg:text-left flex items-center pt-">
        <div className="flex align-middle px-1 md:px-0 text-center items-center my-auto h-full bg-[#f37022]">
          <a href="/">
            <HomeIcon className="w-8 h-11 p-1.5 " aria-hidden="true" />
          </a>
        </div>
        {currentPath === "/" || currentPath.toLowerCase() === "home" ? (
          <span className="text-gray-700 px-2 md:font-extrabold text-lg font-bold lg:text-3xl">
            Welcome
          </span>
        ) : (
          <ChevronRightIcon
            className="w-6 h-6 ml-1 text-gray-400"
            aria-hidden="true"
          />
        )}
        <div className="lg:pb-">
          <div
            className="inline-flex items-center text-sm md:text-md p-1 pr-2 xs:text-base text-gray-400 
          rounded-full bg-gray-50/60 sm:text-base lg:text-sm"
          >
            {/* <div className="flex items-center">
              <span className="px-2 bg-white font-medium py-2 leading-5 tracking-wide text-lg rounded-full">
                <a href="#">{currentPath}</a>
              </span>
              <ChevronRightIcon className="w-6 h-6 md:ml-1" aria-hidden="true" />
            </div> */}
            {breadcrumbTrail.map((breadcrumb, index) => (
              <div className="flex items-center" key={breadcrumb.path}>
                <span className="md:ml-4 ml-1 font-medium leading-5 tracking-wide text-sm md:text-md lg:text-lg">
                  <a href={breadcrumb.path}>{breadcrumb.text}</a>
                </span>
                {index < breadcrumbTrail.length - 1 && (
                  <ChevronRightIcon
                    className="w-6 h-6 ml-1 md:ml-3"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
