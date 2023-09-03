import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StudentCard from "../../components/StudentCard/StudentCard";

function SingleStudentCardPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  // const getStudent = (id) => {
  //    axios
  //     .get(`http://localhost:8080/student/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${id}`)
      // .get(`http://localhost:8080/potetntial-match/get`)
      .then((response) => {
        console.log(response);

        setStudent(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // useEffect(() => {
  //   const student = getStudent(id);
  //   setStudent(student);
  // }, []);
  console.log("Student ID:", id);

  console.log("hello");
  console.log(student);
  // console.log(setStudent);
  return (
    <div>
      <h1>Single student</h1>
      {student ? (
        <div className="studentCard__info">
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleStudentCardPage;
