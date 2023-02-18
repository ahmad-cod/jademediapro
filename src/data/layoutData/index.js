import { jadelogo2 } from "@/images";

/**
 * @type {{[key in FooterHeadings]: FooterLink}}
 */
export const footerLinks = {
  company: {
    title: "Company",
    children: [
      {
        subtitle: "Overview",
        link: "#",
      },
      {
        subtitle: "Our Team",
        link: "#",
      },
      {
        subtitle: "Testimonials",
        link: "#",
      },
      {
        subtitle: "Volunteering",
        link: "#",
      },
      {
        subtitle: "Career",
        link: "#",
      },
      {
        subtitle: "Contact Us",
        link: "#",
      },
    ],
  },
  resources: {
    title: "Resources",
    children: [
      {
        subtitle: "Freebie",
        link: "#",
      },
      {
        subtitle: "Store",
        link: "#",
      },
      {
        subtitle: "Tool",
        link: "#",
      },
      {
        subtitle: "Report a Bug",
        link: "#",
      },
    ],
  },
  hub: {
    title: "Hub",
    children: [
      {
        subtitle: "Blog",
        link: "/blog",
      },

      {
        subtitle: "Collaboration",
        link: "#",
      },
      {
        subtitle: "Community",
        link: "#",
      },
      {
        subtitle: "Event",
        link: "/event",
      },
      {
        subtitle: "Interview",
        link: "/interview",
      },
      {
        subtitle: "Job/Internship",
        link: "/job",
      },
    ],
  },
  projects: {
    title: "Projects",
    children: [
      {
        subtitle: "Case Study",
        link: "/projects",
      },
      {
        subtitle: "Process",
        link: "/process",
      },
      {
        subtitle: "Showreel",
        link: "#",
      },
      {
        subtitle: "Training",
        link: "#",
      },
    ],
  },
  jadeMedia: {
    title: jadelogo2,
    children: [
      {
        subtitle: "Business",
        link: "#",
      },
      {
        subtitle: "Branding",
        link: "#",
      },
      {
        subtitle: "Design",
        link: "#",
      },
      {
        subtitle: "Marketing",
        link: "#",
      },
      {
        subtitle: "Motion",
        link: "#",
      },
      {
        subtitle: "Web & App Dev",
        link: "#",
      },
      {
        subtitle: "Painting",
        link: "#",
      },
    ],
  },
};

/**
 *  An item in a 'tab' menu of a header link.
 * @typedef {{
 *  name: string;
 *  href?: string;
 *  links?: Sublink[];
 * }} HeaderDropDownList
 */

/**@type {HeaderDropDownList[]} */
export const mainHeaderLinks = [
  {
    name: "Services",
    links: [
      {
        subtitle: "Business Strategy",
        link: "/services",
      },
      {
        subtitle: "Branding",
        link: "/services",
      },
      {
        subtitle: "Graphic Design",
        link: "/services",
      },
      {
        subtitle: "Digital Marketing",
        link: "/services",
      },
      {
        subtitle: "Motion Design",
        link: "/services",
      },
      {
        subtitle: "Art/Photography",
        link: "/services",
      },
      {
        subtitle: "Web and App dev.",
        link: "/services",
      },
    ],
  },
  {
    name: "Projects",
    links: footerLinks.projects.children,
  },
  {
    name: "Hub",
    links: footerLinks.hub.children,
  },
  {
    name: "Resources",
    links: footerLinks.resources.children,
  },
  {
    name: "Contact",
    href: "/contacts",
    links: undefined,
  },
];
