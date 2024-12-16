import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    } else {
      if (modal.open) modal.close();
    }

    return () => {
      if (modal.open) modal.close();
    };
  }, [open]);

  const handleDialogClose = () => {
    if (onClose) onClose(); // Só chama onClose se explicitamente necessário
  };

  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`}
      onCancel={handleDialogClose} // Apenas se ESC for pressionado
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
