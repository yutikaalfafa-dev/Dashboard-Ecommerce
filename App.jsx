import React, { useState, useEffect } from "react";
import $ from "jquery";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardStats from "./components/DashboardStats";
import ProductTable from "./components/ProductTable";
import ProductFormModal from "./components/ProductFormModal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import { initialProducts } from "./data/products";
import "./style.css";

export default function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    $(".main-content").hide().fadeIn(600);
  }, []);

  const handleSaveProduct = (formData) => {
    if (productToEdit) {
      setProducts(
        products.map((p) =>
          p.id === productToEdit.id ? { ...formData, id: p.id } : p,
        ),
      );
    } else {
      const newProduct = {
        ...formData,
        id: Date.now(),
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      };
      setProducts([newProduct, ...products]);
    }
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      setProducts(products.filter((p) => p.id !== productToDelete.id));
      setIsDeleteModalOpen(false);
      setProductToDelete(null);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <div className="main-content flex-grow-1">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <main className="p-4 flex-grow-1">
          {activeMenu === "dashboard" && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="fw-bold text-dark mb-0">Dashboard Overview</h3>
                  <p className="text-muted small">
                    Selamat datang kembali, Admin! Berikut ringkasan performa
                    toko Anda.
                  </p>
                </div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveMenu("products")}
                >
                  <i className="fa-solid fa-box-open me-1"></i> Kelola Produk
                </button>
              </div>
              <DashboardStats products={products} />
              <div className="bg-white rounded-3 shadow-sm p-4 text-center text-muted py-5">
                <i className="fa-solid fa-chart-line fa-3x mb-3 text-primary"></i>
                <h5>Grafik dan Analisis Toko Online</h5>
                <p className="small mb-0">
                  Sistem analitik penjualan ShopEase berjalan secara real-time
                  berdasarkan inventaris produk aktif.
                </p>
              </div>
            </>
          )}

          {activeMenu === "products" && (
            <ProductTable
              products={products}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              onOpenAddModal={() => {
                setProductToEdit(null);
                setIsFormModalOpen(true);
              }}
              onOpenEditModal={(product) => {
                setProductToEdit(product);
                setIsFormModalOpen(true);
              }}
              onOpenDeleteModal={(product) => {
                setProductToDelete(product);
                setIsDeleteModalOpen(true);
              }}
            />
          )}

          {activeMenu === "settings" && (
            <div className="bg-white rounded-3 shadow-sm p-4">
              <h4 className="fw-bold mb-3">Pengaturan Toko</h4>
              <p className="text-muted">
                Konfigurasi sistem profil admin dan preferensi toko online.
              </p>
              <hr />
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama Toko</label>
                <input
                  type="text"
                  className="form-control w-50"
                  defaultValue="ShopEase Store Yogyakarta"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email Administrator
                </label>
                <input
                  type="email"
                  className="form-control w-50"
                  defaultValue="yutika.alfafa@students.unisayogya.ac.id"
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => alert("Pengaturan berhasil disimpan!")}
              >
                Simpan Perubahan
              </button>
            </div>
          )}
        </main>

        <footer className="bg-white text-center py-3 border-top mt-auto text-muted small">
          <span>
            ShopEase – Dashboard Manajemen Produk © 2026 Universitas 'Aisyiyah
            Yogyakarta
          </span>
        </footer>
      </div>

      <ProductFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSave={handleSaveProduct}
        productToEdit={productToEdit}
      />

      <DeleteConfirmation
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        product={productToDelete}
      />
    </div>
  );
}
