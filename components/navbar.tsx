import { useState } from 'react';
import { Menu } from 'react-feather';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="text-white px-6 py-3 w-full">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" passHref>
                <img
                  className="w-20"
                  src="/images/logo.svg"
                  alt="BlockchainSRM logo"
                />
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                onClick={() => setOpen(!open)}
              >
                <Menu size={26} />
              </button>
            </div>
          </div>

          <div
            className={`${
              open ? 'block' : 'hidden'
            } md:flex md:justify-start flex-1 flex flex-col items-start`}
          >
            <div className="flex bg-opacity-20 flex-col md:flex-row md:items-center mx-5">
              <Link href="/" passHref>
                <p className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-secondary cursor-pointer border-b-2 border-transparent font-bold">
                  Home
                </p>
              </Link>
              <Link href="/team" passHref>
                <p className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-secondary cursor-pointer border-b-2 border-transparent font-bold">
                  Our Team
                </p>
              </Link>
              <Link href="/contact" passHref>
                <p className="md:my-2 mx-2 my-2 px-2 py-1 transition duration-500 ease-in-out hover:border-secondary cursor-pointer border-b-2 border-transparent font-bold">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
