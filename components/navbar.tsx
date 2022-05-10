import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = (e: Event) => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-black transition-all duration-300 ${
        isScrolled ? 'bg-opacity-30' : 'bg-opacity-25 md:bg-opacity-0'
      } `}
    >
      <div className="text-white px-6 py-3 w-full">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <Link href="/" passHref>
              <Image
                src="/images/logo.svg"
                className="cursor-pointer"
                alt="BlockchainSRM logo"
                width={60}
                height={60}
              />
            </Link>

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
            } md:flex md:justify-end flex-1 flex flex-col items-end`}
          >
            <div className="flex bg-opacity-20 flex-col md:flex-row md:items-center mx-5">
              <Link href="/" passHref>
                <p className="md:my-2 mx-3 my-2 px-4 py-1 transition duration-500 ease-in-out hover:border-secondary cursor-pointer border-b-2 border-transparent font-bold">
                  Home
                </p>
              </Link>
              <Link href="/team" passHref>
                <p className="md:my-2 mx-3 my-2 px-4 py-1 transition duration-500 ease-in-out hover:border-secondary cursor-pointer border-b-2 border-transparent font-bold">
                  Our Team
                </p>
              </Link>
              <Link href="/contact" passHref>
                <p className="md:my-2 ml-3 my-2 pl-4 py-1 transition duration-500 ease-in-out hover:border-secondary cursor-pointer border-b-2 border-transparent font-bold">
                  Contact Us
                </p>
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
