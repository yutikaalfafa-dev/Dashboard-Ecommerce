import React from "react";

export default function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <aside className="sidebar d-flex flex-column">
      <div className="sidebar-brand d-flex align-items-center">
        <i className="fa-solid fa-store me-2 text-primary"></i>
        <span>ShopEase</span>
      </div>
      <ul className="sidebar-nav flex-grow-1">
        <li className={activeMenu === "dashboard" ? "active" : ""}>
          <a href="#dashboard" onClick={() => setActiveMenu("dashboard")}>
            <i className="fa-solid fa-chart-pie"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className={activeMenu === "products" ? "active" : ""}>
          <a href="#products" onClick={() => setActiveMenu("products")}>
            <i className="fa-solid fa-box-open"></i>
            <span>Manajemen Produk</span>
          </a>
        </li>
        <li className={activeMenu === "settings" ? "active" : ""}>
          <a href="#settings" onClick={() => setActiveMenu("settings")}>
            <i className="fa-solid fa-gear"></i>
            <span>Pengaturan</span>
          </a>
        </li>
      </ul>
      <div className="p-3 text-muted small text-center border-top border-secondary">
        <span>© 2026 ShopEase UNISA</span>
      </div>
    </aside>
  );
}
