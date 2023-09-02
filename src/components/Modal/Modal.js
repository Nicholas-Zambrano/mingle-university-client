import "./Modal.scss";

function Modal({
  isOpen,
  closeModal,
  content,
  onProceed,
  student,
  savePotentialMatch,
}) {
  if (!isOpen) {
    return null;
  }

  const handleProceed = () => {
    onProceed(student);
    // savePotentialMatch(student);
    closeModal();
  };
  return (
    <div className="modal">
      <div className="modal__container">
        <p>Save {student.first_name} to your list</p>

        <div className="modal__content">{content}</div>
        <div className="modal__actions">
          <button className="modal__button" onClick={closeModal}>
            {" "}
            Cancel
          </button>
          <button className="modal__button" onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
