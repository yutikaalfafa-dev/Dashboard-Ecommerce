import React from "react";

export default function DeleteConfirmation({
  isOpen,
  onClose,
  onConfirm,
  product,
}) {
  if (!isOpen || !product) return null;

  return (
    <div
      className="modal show fade d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content text-center p-3">
          <div className="text-danger mb-2">
            <i className="fa-solid fa-triangle-exclamation fa-3x"></i>
          </div>
          <h5 className="fw-bold mb-2">Konfirmasi Hapus</h5>
          <p className="text-muted small mb-3">
            Apakah Anda yakin ingin menghapus produk{" "}
            <strong>{product.name}</strong>? Tindakan ini tidak dapat
            dibatalkan.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <button
              type="button"
              className="btn btn-secondary btn-sm px-3"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm px-3"
              onClick={onConfirm}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
