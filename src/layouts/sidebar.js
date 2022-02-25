import React from "react";

const sidebarRoutes = [
  {
    title: "Dashboard",
    href: "/",
    icon: <i class="icon-rocket menu-icon"></i>,
  },
  {
    title: "Reports",
    href: "/",
    icon: <i class="icon-pie-chart menu-icon"></i>,
  },
  {
    title: "Events",
    href: "/",
    icon: <i class="icon-layers menu-icon"></i>,
  },
  {
    title: "Admins",
    href: "/",
    icon: <i class="icon-user menu-icon"></i>,
  },
  {
    title: "Invoices",
    href: "/",
    icon: <i class="icon-pencil menu-icon"></i>,
  },
];
function Sidebar() {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image">
              <img src="images/faces/face10.jpg" alt="images" />
              <span class="online-status online"></span>
            </div>
            <div class="profile-name">
              <p class="name">Marina Michel</p>
              <p class="designation">Super Admin</p>
            </div>
          </div>
        </li>
        {sidebarRoutes.map((item) => (
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              {item.icon}
              <span class="menu-title">{item.title}</span>
              {/* <span class="badge badge-success">New</span> */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
