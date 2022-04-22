import React from "react";
import { SidebarContainer, SidebarMenuLink } from "./styles";

import FileIcon from "../../Assets/icons/file.png";
import ClockIcon from "../../Assets/icons/clock.png";
import StarIcon from "../../Assets/icons/star.png";
import CalendarIcon from "../../Assets/icons/calendar.png";
import CheckIcon from "../../Assets/icons/check.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <SidebarMenuLink to="/">
          <img src={FileIcon} alt="file icon" />
          ALL
        </SidebarMenuLink>
        <SidebarMenuLink to="/today">
          <img src={ClockIcon} alt="clock icon" />
          Today
        </SidebarMenuLink>
        <SidebarMenuLink to="/important">
          <img src={StarIcon} alt="star icon" />
          Important
        </SidebarMenuLink>
        <SidebarMenuLink to="/upcoming">
          <img src={CalendarIcon} alt="calendar icon" />
          Upcoming
        </SidebarMenuLink>
        <SidebarMenuLink to="/completed">
          <img src={CheckIcon} alt="check icon" />
          Completed
        </SidebarMenuLink>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
