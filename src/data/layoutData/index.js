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
        link: "/about",
      },
      {
        subtitle: "Our Team",
        link: "/about/#team",
      },
      {
        subtitle: "Testimonials",
        link: "/about/#testimonials",
      },
      {
        subtitle: "Volunteering",
        link: "/about/#volunteering",
      },
      {
        subtitle: "Career",
        link: "/about/#career",
      },
      {
        subtitle: "Contact Us",
        link: "/contact",
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
        link: "/projects/#casestudy",
      },
      {
        subtitle: "Process",
        link: "/projects/#Process",
      },
      {
        subtitle: "Showreel",
        link: "/projects/#showreel",
      },
      {
        subtitle: "Training",
        link: "/projects/#training",
      },
    ],
  },
  jadeMedia: {
    title: jadelogo2,
    children: [
      {
        subtitle: "Business",
        link: "/services/#Business",
      },
      {
        subtitle: "Branding",
        link: "/services/#Design",
      },
      {
        subtitle: "Design",
        link: "/services/#Design",
      },
      {
        subtitle: "Marketing",
        link: "/services/#Marketing",
      },
      {
        subtitle: "Motion",
        link: "/services/#Motion",
      },
      {
        subtitle: "Web & App Dev",
        link: "/services/#Web",
      },
      {
        subtitle: "Painting",
        link: "/services/#Art",
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
        link: "/services/#Business",
      },
      {
        subtitle: "Branding",
        link: "/services/#Design",
      },
      {
        subtitle: "Graphic Design",
        link: "/services/#Design",
      },
      {
        subtitle: "Digital Marketing",
        link: "/services/#Marketing",
      },
      {
        subtitle: "Motion Design",
        link: "/services/#Motion",
      },
      {
        subtitle: "Art/Photography",
        link: "/services/#Art",
      },
      {
        subtitle: "Web and App dev.",
        link: "/services/#Web",
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
    name: "About",
    links: [
      {
        subtitle: "What we do",
        link: "/about",
      },
      {
        subtitle: "Testimonials",
        link: "/about/#testimonials",
      },
      {
        subtitle: "Volunteering",
        link: "/about/#volunteering",
      },
      {
        subtitle: "Career",
        link: "/about/#career",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    links: undefined,
  },
];
