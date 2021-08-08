import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
/*Side Bar Links*/


export const SidebarLinks = [
  { /* 1 Overview Link*/
    title: "Overview",
    path: "/overview",
    icons: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [ /*Overview Sub Menu Link*/
      {
        title: "Users",
        path: "/overview/users",
        icons: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icons: <IoIcons.IoIosPaper />,
      },
    ],
  },

  { /* 2 Product Link*/
    title: "Products",
    path: "/products",
    icons: <FaIcons.FaCartPlus />,
  },

  { /*3 Team Link*/
    title: "Team",
    path: "/team",
    icons: <IoIcons.IoMdPeople />,
  },

  {/*4 Report Link*/
    title: "Reports",
    path: "/reports",
    icons: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [ /*Report Sub Menu Link*/
      {
        title: "Report 1",
        path: "/reports/report1",
        icons: <IoIcons.IoIosPaper />,
      },
      {
        title: "Report 2",
        path: "/reports/report2",
        icons: <IoIcons.IoIosPaper />,
      },
      {
        title: "Report 3",
        path: "/reports/report3",
        icons: <IoIcons.IoIosPaper />,
      },
    ],
  },

  { /*5 Message Link*/
    title: "Message",
    path: "/message",
    icons: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [ /*Message Sub Menu Link*/
      {
        title: "Message 1",
        path: "/messages/message1",
        icons: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message 2",
        path: "/messages/message2",
        icons: <IoIcons.IoIosPaper />,
      },
    ],
  },
  { /*6 Team Link*/
    title: "Support",
    path: "/messages/support",
    icons: <IoIcons.IoMdHelpCircle />,
  }
];
