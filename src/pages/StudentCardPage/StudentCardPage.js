import { useEffect, useState } from "react";
import axios from "axios";
import "./StudentCardPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import facebook from "../../assets/icons/icon-facebook.png";
import twitter from "../../assets/icons/icon-twitter.png";
import instagram from "../../assets/icons/icon-instagram.png";
import Modal from "../../components/Modal/Modal";
import StudentCard from "../../components/StudentCard/StudentCard";
import ArrowBack from "../../components/ArrowBack/ArrowBack";

// deconstructing the props of the university that the user goes to
function StudentCardPage() {
  const [student, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserUniversity, setCurrentUserUniversity] = useState("");
  //   console.log({university});

  // creating state for potential matches of hobbies:
  const [potentialMatch, setPotentialMatch] = useState([]);
  const [currentHobbies, setCurrentHobbies] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // when called- set show modal to true
  const openModal = () => {
    // setShowPopUp(true);
    setShowModal(true);
  };

  const closeModal = () => {
    // setShowPopUp(false);
    setShowModal(false);
    // console.log("close pop up");
  };
  console.log(potentialMatch);

  const savePotentialMatch = (student) => {
    // checking if that student is already saved in the list before saving them again
    const isStudentInList = potentialMatch.some((potentialStudent) => {
      return potentialStudent.id === student.id;
    });

    if (!isStudentInList) {
      axios
        // .post("http://localhost:8080/save-potential-match",student)
        .post("http://localhost:8080/potential-match/save", student)
        .then((response) => {
          setPotentialMatch((prevMatches) => [...prevMatches, student]);
          console.log(response.data);
          console.log(setPotentialMatch);
          console.log(`Saved potential match: ${student.first_name}`);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("student already in list");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    // get request to the current user
    axios
      .get("http://localhost:8080/my-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      //   setting their university to a state
      .then((response) => {
        // const currentUserUniversity = response.data.university;
        setCurrentUserUniversity(response.data.university);
        setCurrentHobbies(response.data.hobbies);
        // make another get reqest, to get all students that go to same uni
        axios
          .get(
            `http://localhost:8080/students?university=${response.data.university}`
          )
          .then((response) => {
            console.log(response.data);
            setStudents(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return;
  }

  // need to filter through the students that go to same univeristy:
  const studentsSameUniversity = student.filter((student) => {
    return student.university === currentUserUniversity;
  });
  console.log(studentsSameUniversity);

  return (
    <div className="studentCard">
      <div className="studentCard__header">
        <h1>MingleU</h1>
      </div>

      <div className="studentCard__subHeaderWrapper">
        <ArrowBack />
        <div className="studentCard__subHeader">
          <h2>Mingle Cards</h2>
        </div>
      </div>

      <div className="studentCard__swiperWrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {studentsSameUniversity.map((student) => (
            <SwiperSlide key={student.id}>
              <StudentCard
                student={student} // passing student obkect to studentCard component
                currentHobbies={currentHobbies}
                showModal={showModal} // whether modal for that student card should be displayed
                openModal={openModal}
                closeModal={closeModal}
                savePotentialMatch={savePotentialMatch}
              />

              {/* when proceed button is clicked - 
              it passes student data to the savePotentialMatch function  */}
              <Modal
                isOpen={showModal} // controlling whether modal is open
                closeModal={closeModal}
                student={student} // passing student prop to modal, in order for it to access data about the student
                onProceed={(student) => {
                  savePotentialMatch(student);
                }}
              >
                <h2>Potential matches</h2>
              </Modal>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <footer className="studentCard__footer">
        <p>Connect with fellow students!</p>
        <p>Better than Tinder!!</p>

        <div className="studentCard__iconWrapper">
          <img className="studentCard__icon" src={facebook} />
          <img className="studentCard__icon" src={twitter} />
          <img className="studentCard__icon" src={instagram} />
        </div>
      </footer>
    </div>
  );
}
export default StudentCardPage;
