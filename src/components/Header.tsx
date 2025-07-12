'use client';
import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' }
];

// This component renders a header with a logo, navigation links, and a mobile menu.
// It uses the Disclosure component from Headless UI for the mobile menu functionality.
export default function Header() {
  const location = useLocation();

  return (
    <Disclosure
      as="header"
      className="bg-blue-900 border-ba border-[#1A1A1D]a fixed w-full z-50 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto md:max-w-[80rem] 2xl:max-w-[95.9rem] px-4 xl:px-0 h-16 flex items-center justify-between">
            {/* Logo + Nav */}
            <div className="flex items-center space-x-10">
              <img src="/logo.ico" alt="Logo" className="h-10 w-12" />
              <div className="hidden md:flex space-x-6 text-sm font-medium text-[#B6B6B6]">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`hover:text-gray-500 transition ${
                      location.pathname === link.href ? 'text-[#EAEAEA]' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex gap-4 text-right text-xs text-[#B6B6B6] leading-tight">
              <span>Email: <a href="mailto:omarhussain755@gmail.com" className="hover:text-gray-500">omarhussain755@gmail.com</a></span>
              |
              <span>Phone: <a href="tel:+201021259379" className="hover:text-gray-500">+20 1021259379</a></span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Disclosure.Button aria-label='Menu' className="p-2 rounded-md text-[#B6B6B6] hover:text-gray-500 focus:outline-none">
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <Disclosure.Panel className="md:hidden bg-blue-900 border-t border-[#1A1A1D]">
              <div className="flex flex-col px-4 py-4 space-y-3 text-[#B6B6B6] text-sm font-medium">
                {navLinks.map(link => (
                  <Disclosure.Button
                    as={Link}
                    key={link.name}
                    to={link.href}
                    className={`hover:text-gray-500 transition ${
                      location.pathname === link.href ? 'text-[#EAEAEA]' : ''
                    }`}
                  >
                    {link.name}
                  </Disclosure.Button>
                ))}

                {/* Contact Info in mobile menu */}
                <div className="flex flex-col pt-4 border-t gap-2 border-[#1A1A1D] text-xs">
                  <div>Email: <a href="mailto:omarhussain755@gmail.com" className="hover:text-[#FF2E63]">omarhussain755@gmail.com</a></div>
                  <div>Phone: <a href="tel:+201021259379" className="hover:text-[#FF2E63]">+20 1021259379</a></div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
