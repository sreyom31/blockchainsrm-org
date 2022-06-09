import React from 'react';
import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import { Mail, Phone } from 'react-feather';

const Footer = () => {
  const links = [{ href: '', element: AiOutlineGithub }];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:px-16 md:py-8 mt-24 bg-black bg-opacity-50 backdrop-blur-md">
        <section id="about">
          <h1 className="mb-8">
            Block<span className="text-secondary">chain</span> <br /> SRM
          </h1>
          <p className="max-w-sm">
            Student Driven Community here to provide quality to web3 space.
          </p>
          <div className="flex my-8 gap-4">
            {links.map((link, id) => {
              const Element = link.element;
              return (
                <a key={id} rel="noreferrer" target="_blank" href={link.href}>
                  <Element size={48} />
                </a>
              );
            })}
          </div>
        </section>
        <section id="quick-links">
          <h2 className="text-secondary mb-8">Quick Links</h2>
          <ul className="flex flex-col gap-3">
            <Link href="/">
              <p className="cursor-pointer">Home</p>
            </Link>
            <Link href="/team">
              <p className="cursor-pointer">Our Team</p>
            </Link>
            {/* <Link href="/">
              <p className="cursor-pointer">Resources</p>
            </Link> */}
            <Link href="/contact">
              <p className="cursor-pointer">Contact Us</p>
            </Link>
          </ul>
        </section>
        <section id="doubt">
          <h2 className="text-secondary mb-8">Have a doubt?</h2>
          <p className="mb-8">
            Drop us an email at <br />{' '}
            <Link href={'mailto:team@blockchainsrm.org'}>
              <div className="flex gap-3 items-center mt-2">
                <Mail />
                team@blockchainsrm.org
              </div>
            </Link>
          </p>
          <p className="mb-4">Phone Number</p>
          <Link href="tel:+916263121519">
            <div className="flex gap-3 items-center mt-2">
              <Phone />
              +91&nbsp;&nbsp;6263121519
            </div>
          </Link>
          <br />
          <Link href="tel:+917735988951">
            <div className="flex gap-3 items-center mt-2">
              <Phone />
              +91&nbsp;&nbsp;7735988951
            </div>
          </Link>
        </section>
        <div className="md:col-span-3 border-2 w-full border-white my-8"></div>
        <span className="col-start-1">
          Privacy Terms of Use Cookie preferences
        </span>
        <span className="md:col-start-3 md:text-right">
          Copyright © 2022. BlockchainSRM
        </span>
      </div>
    </>
  );
};

export default Footer;
