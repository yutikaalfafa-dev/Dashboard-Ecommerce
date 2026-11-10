import React from "react";

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <header className="top-navbar">
      <div className="d-flex align-items-center w-50">
        <div className="input-group">
          <span className="input-group-text bg-light border-end-0">
            <i className="fa-solid fa-magnifying-glass text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0 bg-light"
            placeholder="Cari produk cepat..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="text-end">
          <h6 className="mb-0 fw-bold">Yutika Alfafa</h6>
          <small className="text-muted">Administrator</small>
        </div>
        <div
          className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
          style={{ width: "40px", height: "40px" }}
        >
          YA
        </div>
      </div>
    </header>
  );
}
