"use client";
// import React, { useState } from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Example() {
//   const [openNav, setOpenNav] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setOpenDropdown(!openDropdown);
//   };

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <div className="flex items-center gap-6">
//       <div className="relative">
//         <Typography variant="small" color="blue-gray" className="font-normal">
//           <a
//             href="#"
//             className="flex items-center focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             Course
//           </a>
//         </Typography>
//         {openDropdown && (
//           <div
//             className="py-1"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="options-menu"
//           >
//             <a
//               href="#python"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//               role="menuitem"
//             >
//               Python
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//               role="menuitem"
//             >
//               C
//             </a>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//               role="menuitem"
//             >
//               Docker
//             </a>
//           </div>
//         )}
//       </div>
//       <Typography variant="small" color="blue-gray" className="font-normal">
//         <a href="#" className="flex items-center focus:outline-none">
//           About
//         </a>
//       </Typography>
//       <Typography variant="small" color="blue-gray" className="font-normal">
//         <a href="#" className="flex items-center focus:outline-none">
//           Community
//         </a>
//       </Typography>
//     </div>
//   );

//   return (
//     <>
//       <Navbar className=" sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-[#4700C6]">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Link href="/">
//               <Image
//                 src="/images/logonav.svg"
//                 alt="logo"
//                 width={150}
//                 height={150}
//               />
//             </Link>
//             <div className="hidden lg:block">{navList}</div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link
//               href="/signin"
//               className="hidden lg:inline-block bg-[#] px-4 py-2 text-sm text-white rounded-md hover:bg-[#]"
//             >
//               Sign In
//             </Link>
//             <IconButton
//               variant="text"
//               className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//               ripple={false}
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </IconButton>
//           </div>
//         </div>
//         <MobileNav open={openNav}>
//           {navList}
//           <Link href="/signin">
//             <Button size="sm" fullWidth className="mb-2">
//               Sign In
//             </Button>
//           </Link>
//         </MobileNav>
//       </Navbar>
//     </>
//   );
// }
import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="flex items-center gap-6">
      <Typography variant="small" color="blue-gray" className="font-normal">
        <a href="#" className="flex items-center focus:outline-none">
          About
        </a>
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-normal">
        <a href="#" className="flex items-center focus:outline-none">
          Community
        </a>
      </Typography>
      <div className="relative">
        <Typography variant="small" color="blue-gray" className="font-normal">
          <a
            href="#"
            className="flex items-center focus:outline-none"
            onClick={toggleDropdown}
          >
            Course
          </a>
        </Typography>
        {openDropdown && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                href="/python"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Python
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                C
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Docker
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-[#4700C6]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/images/logonav.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="hidden lg:inline-block bg-[#] px-4 py-2 text-sm text-white rounded-md hover:bg-[#]"
            >
              Sign In
            </Link>
            <IconButton
              variant="text"
              className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Link href="/signin">
            <Button size="sm" fullWidth className="mb-2">
              Sign In
            </Button>
          </Link>
        </MobileNav>
      </Navbar>
    </>
  );
}
