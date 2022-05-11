import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const tabs = [
    { name: 'Home', link: '/' },
    { name: 'Our Team', link: '/team' },
    { name: 'Contact Us', link: '/contact' },
  ];

  const listenScrollEvent = () => {
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
      className={`fixed top-0 z-50 w-full bg-black transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-opacity-30' : 'bg-opacity-25 md:bg-opacity-0'
      } `}
    >
      <div className="text-white px-6 py-3 w-full">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <Link href="/" passHref>
              <div className="flex items-center justify-center cursor-pointer">
                <Image
                  src="/images/logo.svg"
                  className="cursor-pointer"
                  alt="BlockchainSRM logo"
                  width={60}
                  height={60}
                />
                BLOCKCHAIN SRM
              </div>
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
            } md:flex md:justify-end flex-1 flex flex-col items-end text-right`}
          >
            <div
              className={`flex bg-opacity-20 flex-col md:flex-row md:items-center md:mx-5 mx-0`}
            >
              {tabs.map((tab, id) => (
                <>
                  <Link key={id} href={tab.link} passHref>
                    <p onClick={() => (setOpen(!open))} className="md:my-2 mx-3 my-2 px-4 py-1 transition duration-500 ease-in-out hover:border-secondary cursor-pointer border-b-2 border-transparent font-bold">
                      {tab.name}
                    </p>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
