/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Commander',
    path: '/order',
    icon: <FaIcons.FaPizzaSlice />,
    cName: 'nav-text',
  },
  {
    title: 'Nous contacter',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: "S'inscrire",
    path: '/sign-up',
    icon: <SiIcons.SiGnuprivacyguard />,
    cName: 'nav-text',
  },
  {
    title: 'Se connecter',
    path: '/sign-in',
    icon: <FaIcons.FaSignInAlt />,
    cName: 'nav-text',
  },
];
