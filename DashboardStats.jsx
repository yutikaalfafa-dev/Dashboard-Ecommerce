import React from "react";

export default function DashboardStats({ products }) {
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + Number(p.stock), 0);
  const availableCount = products.filter((p) => Number(p.stock) > 5).length;
  const lowStockCount = products.filter(
    (p) => Number(p.stock) > 0 && Number(p.stock) <= 5,
  ).length;

  return (
    <section className="mb-4">
      <h4 className="fw-bold mb-3 text-dark">Ringkasan Statistik Toko</h4>
      <div className="row g-3">
        <div className="col-md-3 col-sm-6">
          <div className="card stat-card bg-white p-3 border-start border-4 border-primary">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1 small uppercase fw-bold">
                  Total Produk
                </p>
                <h3 className="fw-bold mb-0 text-dark">{totalProducts}</h3>
              </div>
              <div className="bg-primary bg-opacity-10 p-3 rounded text-primary">
                <i className="fa-solid fa-boxes-stacked fa-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card stat-card bg-white p-3 border-start border-4 border-success">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1 small uppercase fw-bold">
                  Total Stok Produk
                </p>
                <h3 className="fw-bold mb-0 text-dark">{totalStock}</h3>
              </div>
              <div className="bg-success bg-opacity-10 p-3 rounded text-success">
                <i className="fa-solid fa-cubes fa-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card stat-card bg-white p-3 border-start border-4 border-info">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1 small uppercase fw-bold">
                  Produk Tersedia
                </p>
                <h3 className="fw-bold mb-0 text-dark">{availableCount}</h3>
              </div>
              <div className="bg-info bg-opacity-10 p-3 rounded text-info">
                <i className="fa-solid fa-circle-check fa-xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card stat-card bg-white p-3 border-start border-4 border-warning">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1 small uppercase fw-bold">
                  Stok Menipis
                </p>
                <h3 className="fw-bold mb-0 text-dark">{lowStockCount}</h3>
              </div>
              <div className="bg-warning bg-opacity-10 p-3 rounded text-warning">
                <i className="fa-solid fa-triangle-exclamation fa-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
