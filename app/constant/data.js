import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { FaImage, FaImages } from "react-icons/fa";

//nav Data
export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Portfolio", path: "/work", icon: <HiRectangleGroup /> },
  {
    name: "Testimonials",
    path: "testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
];

export const aboutData = [
  {
    title: "Expertises",
    info: [
      {
        title: "Indoor and Outdoor Portraits",
      },
      {
        title: "Weddings",
      },
      {
        title: "Commercial",
      },

      {
        title: "Cinematography",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Photographer - Dash Media",
        year: "2017-2024",
      },
      {
        title: "Photographer - xyz Exhibition",
        year: "2020",
      },
      {
        title: "Photographer - xyz Exhibition",
        year: "2020",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Bachelor's in Screen Production - Mudroch University ",
        year: "2017",
      },
      {
        title: "Bachelor's in Screen Production - Mudroch University ",
        year: "2020",
      },
    ],
  },
];

export const worksData = [
  {
    icon: <FaImages />,
    title: "Indoor ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
  },
  {
    icon: <FaImages />,
    title: "Outdoor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
  },
  {
    icon: <FaImages />,
    title: "Wedding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
  },
  {
    icon: <FaImages />,
    title: "Commercial",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
  },
  {
    icon: <FaImages />,
    title: "Cinematography",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
  },
  {
    icon: <FaImages />,
    title: "Documentary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
  },
];
