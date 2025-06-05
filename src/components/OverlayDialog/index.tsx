import {  type ReactNode } from "react";
import "./overlaydialog.css"; // Import CSS file

const OverlayDialog = ({
  children,
  onClose,
  isOpen=false,
}: {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default OverlayDialog;
