export const navData = [
  {
    name: "Agile & Lean principles",
    children: [],
    isCollapsible: false,
  },
  {
    name: "Blog",
    children: [],
    slug: "/blog",
    isCollapsible: false,
  },

  {
    name: "Success Stories",
    children: [],
    slug: "/success-stories",
    isCollapsible: false,
  },
  {
    name: "Services",
    slug: "/services",
    isCollapsible: false,
  },
  {
    name: "Resources",
    slug: "/resources",
    children: [
      { name: "Academic Articles", slug: "/resources/academic-articles" },
      { name: "Downloadable Guides", slug: "/resources/downloadable-guides" },
      {
        name: "Webinars and Workshops",
        slug: "/resources/webinars-and-workshops",
      },
    ],
    isCollapsible: true,
  },
  {
    name: "About",
    children: [
      { name: "Mission and Values", slug: "/about/mission-and-values" },
      { name: "Meet our Team", slug: "/about/meet-our-team" },
      {
        name: "Partnerships & Affiliations",
        slug: "/about/partnerships-and-affiliations",
      },
    ],
    slug: "/about",
    isCollapsible: true,
  },
];
