import React from "react";

export default function ProductTable({
  products,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  onOpenAddModal,
  onOpenEditModal,
  onOpenDeleteModal,
}) {
  const getStatusBadge = (stock) => {
    const s = Number(stock);
    if (s === 0) return <span className="badge bg-danger">Habis</span>;
    if (s <= 5)
      return <span className="badge bg-warning text-dark">Stok Menipis</span>;
    return <span className="badge bg-success">Tersedia</span>;
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    let matchesStatus = true;
    const s = Number(product.stock);
    if (selectedStatus === "tersedia") matchesStatus = s > 5;
    else if (selectedStatus === "menipis") matchesStatus = s > 0 && s <= 5;
    else if (selectedStatus === "habis") matchesStatus = s === 0;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <section className="bg-white rounded-3 shadow-sm p-4 mb-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1">Manajemen Daftar Produk</h4>
          <p className="text-muted small mb-0">
            Kelola inventaris, harga, dan ketersediaan barang toko online.
          </p>
        </div>
        <button
          className="btn btn-primary d-flex align-items-center gap-2"
          onClick={onOpenAddModal}
        >
          <i className="fa-solid fa-plus"></i> Tambah Produk
        </button>
      </div>

      <div className="row g-2 mb-3">
        <div className="col-md-5">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Cari berdasarkan nama produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Semua Kategori</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Semua Status</option>
            <option value="tersedia">Tersedia</option>
            <option value="menipis">Stok Menipis</option>
            <option value="habis">Habis</option>
          </select>
        </div>
        <div className="col-md-1 d-grid">
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("");
              setSelectedStatus("");
            }}
            title="Reset Filter"
          >
            <i className="fa-solid fa-rotate-left"></i>
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Diskon</th>
              <th>Status</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr key={product.id}>
                  <td className="fw-semibold">{index + 1}</td>
                  <td>
                    <img
                      src={product.image || "https://via.placeholder.com/50"}
                      alt={product.name}
                      className="rounded object-fit-cover"
                      style={{ width: "45px", height: "45px" }}
                    />
                  </td>
                  <td className="fw-semibold text-dark">{product.name}</td>
                  <td>
                    <span className="badge bg-light text-dark border">
                      {product.category}
                    </span>
                  </td>
                  <td>Rp {Number(product.price).toLocaleString("id-ID")}</td>
                  <td className="fw-bold">{product.stock}</td>
                  <td>{product.discount}%</td>
                  <td>{getStatusBadge(product.stock)}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => onOpenEditModal(product)}
                      title="Edit Produk"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onOpenDeleteModal(product)}
                      title="Hapus Produk"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4 text-muted">
                  <i className="fa-solid fa-box-open fa-2x mb-2 d-block"></i>
                  Tidak ada produk yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
