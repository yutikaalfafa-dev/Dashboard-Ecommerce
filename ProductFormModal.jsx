import React, { useState, useEffect } from "react";

export default function ProductFormModal({
  isOpen,
  onClose,
  onSave,
  productToEdit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    discount: "",
    image: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    } else {
      setFormData({
        name: "",
        category: "",
        price: "",
        stock: "",
        discount: "",
        image: "",
      });
    }
    setErrorMsg("");
  }, [productToEdit, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      !formData.price ||
      !formData.stock
    ) {
      setErrorMsg("Harap isi semua field wajib (Nama, Kategori, Harga, Stok)!");
      return;
    }
    if (Number(formData.price) <= 0 || Number(formData.stock) < 0) {
      setErrorMsg("Harga harus bernilai positif dan stok tidak boleh minus!");
      return;
    }

    onSave(formData);
    onClose();
  };

  return (
    <div
      className="modal show fade d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              <i
                className={`fa-solid ${productToEdit ? "fa-pen-to-square" : "fa-circle-plus"} me-2`}
              ></i>
              {productToEdit ? "Edit Produk" : "Tambah Produk Baru"}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {errorMsg && (
                <div className="alert alert-danger py-2 small">{errorMsg}</div>
              )}

              <div className="mb-3">
                <label className="form-label fw-semibold">Nama Produk *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Contoh: Kemeja Flanel"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Kategori *</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Contoh: Pakaian / Elektronik"
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Harga (Rp) *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="150000"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Stok *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="25"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Diskon (%)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    placeholder="10"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">URL Gambar</label>
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
