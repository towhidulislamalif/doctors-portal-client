import React from 'react';

function ModalConfirmation({ title, message, modalClose, action, data }) {
  return (
    <div>
      <input type="checkbox" id="modal-confirmation" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={modalClose}
              className="cursor-pointer px-3 py-2 font-semibold rounded-md bg-red-600 text-gray-50"
            >
              Cancel
            </button>
            <label
              onClick={() => action(data)}
              htmlFor="modal-confirmation"
              className="cursor-pointer px-3 py-2 font-semibold rounded-md bg-green-600 text-gray-50"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmation;
