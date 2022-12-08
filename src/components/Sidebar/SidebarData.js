import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Location",
    path: "/location",
    icon: <BiIcons.BiCurrentLocation />,
    cName: "nav-text",
  },
];
