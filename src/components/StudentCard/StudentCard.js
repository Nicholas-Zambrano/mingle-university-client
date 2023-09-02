import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./StudentCard.scss";

function StudentCard({
  student,
  currentHobbies,
  showModal,
  openModal,
  closeModal,
  savePotentialMatch,
}) {
    const handleSavePotentialMatch = () => {
        // savePotentialMatch(student);
        openModal()
        // closeModal();
      };
    

  return (
    <div className="studentCard__info ">
      {student.hobbies === currentHobbies && (
        <button className="studentCard__button" onClick={handleSavePotentialMatch}>
          Potential Match Maybe
        </button>
      )}
      <img className="studentCard__image" src={student.url} alt={student.id} />

      {/* for each student card- we are displaying the name,hobbies and course */}
      <div className="studentCard__details">
        <h2 className="studentCard__name">{student.first_name}</h2>
        <p className="studentCard__hobbies">{`Hobbies: ${student.hobbies}`}</p>
        <p className="studentCard__course">{`Studying: ${student.course}`}</p>
      </div>

      {/* if that student card has the same hobbies as the user, then a button is shown
- once clicked it calls the 'openModal' function and it pops up
*/}

      {/* here the modal us displayed or hideden based onthe props */}
      <Modal isOpen={showModal} closeModal={closeModal} student={student}>
        <h2>Potential matches</h2>
      </Modal>
    </div>
  );
}

export default StudentCard;
