import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "./home" },
  { label: "Feature", href: "#" },
  { label: "Blog", href: "./blog" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact us", href: "./contactus" }
];

export const testimonials = [
  {
    question: "how many email included in our service ?",
    Answer: "there is more than millions Domains and 1 billion email and info also We search millions of websites every day to collect fresh professional contact information .",
  },
  {
    question: "what is this service for : Introduction?",
    Answer: "there is more than millions Domains and 1 billion email and info also We search millions of websites every day to collect fresh professional contact information .",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Collect email",
    description:
      "Collect email leads from anywhere online, from company websites to Google search results to LinkedIn.",
  },
  {
    icon: <Fingerprint />,
    text: "Email Finder",
    description:
      "Type a name, get a verified email address. Our high match rate helps you get the most from your lists.",
  },
  {
    icon: <ShieldHalf />,
    text: "Domain Search",
    description:
      "Find the best person to contact from a company name or website.",
  },
  {
    icon: <BatteryCharging />,
    text: "API Ready",
    description:
      "Just change the endpoint and see your own data loaded within seconds.",
  },
  {
    icon: <PlugZap />,
    text: "Excellent Support",
    description:
      "An easy-to-follow doc with lots of references and code examples.",
  },
  {
    icon: <GlobeLock />,
    text: "Well Documented",
    description:
      "An easy-to-follow doc with lots of references and code examples.",
  },
];

export const checklistItems = [
  {
    title: "Lists for specific VIP",
    description:
      "and Common industries or niches",
  },
  {
    title: "Trading and Exchange",
    description:
      "And Cryptocurrency Users And Companies",
  },
  {
    title: "Customized email",
    description:
      "marketing campaigns for small businesses",
  },
  {
    title: "e-commerce businesses",
    description:
      "looking to grow their customer base",
  },

  {
    title: "And many more",

  },
];

export const pricingOptions = [
  {
    title: "40 Credit",
    price: "$25",
    features: [
      "Unlimited Search",
      "Unlimited Domain Search",
      "Web Analytics",
      "Unlimited Leak Search",
    ],
  },
  {
    title: "180 Credit",
    price: "$100",
    features: [
      "Unlimited Search",
      "Unlimited Domain Search",
      "Web Analytics",
      "Unlimited Leak Search",
    ],
  },
  {
    title: "650 Credit",
    price: "$200",
    features: [
      "Unlimited Search",
      "Unlimited Domain Search",
      "Web Analytics",
      "Unlimited Leak Search",
    ],
  },
  {
    title: "50000 Credit",
    price: "$3999",
    features: [
      "Unlimited Search",
      "Unlimited Domain Search",
      "Web Analytics",
      "Unlimited Leak Search",
    ],
  },

];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
