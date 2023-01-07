import React from 'react';

type RecipeModalProps = {
  show: boolean;
  onClose: () => void;
};

const RecipeModal: React.FC<RecipeModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal fixed left-0 top-0 right-0 bottom-0 bg-[#7f7f7f] opacity-50 flex items-center justify-center">
      <div className="modal-content w-500 bg-[#fff]">
        <div className="modal-header p-10">
          <h4 className="modal-title m-0">Modal title</h4>
        </div>
        <div className="modal-body p-10 border-t-1 border-b-1 border-[#eee]">
          This is modal content
        </div>
        <div className="modal-footer p-10">
          <button onClick={onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
