import { useEffect, useState } from "react";
import axios from "axios";
import "./StudentCardPage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import facebook from "../../assets/icons/icon-facebook.png";
import twitter from "../../assets/icons/icon-twitter.png";
import instagram from "../../assets/icons/icon-instagram.png";

// deconstructing the props of the university that the user goes to
function StudentCardPage() {
  const [student, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserUniversity, setCurrentUserUniversity] = useState("");
  //   console.log({university});
  const [isFlipped, setIsFlipped] = useState(null);

  // creating state for potential matches of hobbies:
  const [potentialMatch, setPotentialMatch] = useState([]);
  const [currentHobbies, setCurrentHobbies] = useState(null);

  const displayPotentialMatch = () => {
    <h1>Could be a match</h1>;
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
      <div className="studentCard__subHeader">
        <h2>Mingle Cards</h2>
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
              {/* <div className="studentCard__info"> */}
              <div className={`studentCard__info `}>
                <img
                  className="studentCard__image"
                  src={student.url}
                  alt={student.id}
                />

                <div className="studentCard__details">
                  <h2 className="studentCard__name">{student.first_name}</h2>
                  <p className="studentCard__hobbies">{`Hobbies: ${student.hobbies}`}</p>
                  <p className="studentCard__course">{`Studying: ${student.course}`}</p>
                </div>

                {/* now comparing hobbies 
                this button displays when theres a match in the hobbies
                */}
                {student.hobbies === currentHobbies && (
                  <button
                    onClick={() =>
                      setPotentialMatch([...potentialMatch, student])
                    }
                  >
                    Add potential Match
                  </button>
                )}
              </div>
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

      {/* {potentialMatch.length > 0 && (
      
      )} */}
    </div>
  );
}
export default StudentCardPage;
