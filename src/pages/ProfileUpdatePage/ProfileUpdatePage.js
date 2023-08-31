import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import Dashboard from "../DashboardPage/DashboardPage";
import "./ProfileUpdatePage.scss";

function ProfileUpdate() {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [photo, setPhoto] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [failedAuth, setFailedAuth] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setFailedAuth(true);
      return;
    }

    axios
      .get("http://localhost:8080/my-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("i am in a loop");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setFailedAuth(true);
      });

    // ciao();
  }, []);

  if (isLoading) {
    // setIsLoading(true)
    return (
      <main>
        <h2>Loading</h2>
      </main>
    );
  }
  const setImage = (file) => {
    // setPhoto(file);
    // creating a temporary url
    setImageUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // getting the token frmo local storage
    const token = localStorage.getItem("token");

    const formData = {
      university: event.target.university.value,
      course: event.target.course.value,
      hobbies: event.target.hobbies.value,
      photo: imageUrl,
    };
    console.log(formData);
    axios
      .post("http://localhost:8080/update-profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/dashboard"
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="profileUpdate">
      <div className="profileUpdate__title">
        <h1> My profile </h1>
      </div>

      <div className="profileUpdate__subheader">
        <p>Welcome, {data.first_name}</p>
      </div>
      <form className="profileUpdate__form" onSubmit={handleSubmit}>
        <div className="profileUpdate__universityGroup profileUpdate__formGroup">
          <label className="profileUpdate__label">Select university </label>
          <select
            name="university"
            id="universrity"
            onChange={(event) => {
              setUniversity(event.target.value);
            }}
            value={university}
          >
            <option> </option>
            <option value="University of Oxford">University of Oxford</option>
            <option value="University of Cambridge">
              University of Cambridge
            </option>
            <option value="Imperial College London">
              Imperial College London
            </option>
            <option value="University College London">
              University College London
            </option>
            <option value="London School of Economics and Political Science">
              London School of Economics and Political Science
            </option>
            <option value="University of Bristol">University of Bristol</option>

            <option value="University of Bath">University of Bath</option>
          </select>
        </div>

        <div className="profileUpdate__coursesGroup profileUpdate__formGroup">
          <label className="profileUpdate__label">Select courses </label>
          <select
            name="course"
            id="course"
            onChange={(event) => {
              setCourse(event.target.value);
            }}
            value={course}
          >
            <option> </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Biology">Biology </option>
            <option value="Mathematics">Mathematics </option>
            <option value="Psychology">Psychology </option>
            <option value="Economics">Economics</option>
          </select>
        </div>

        <div className="profileUpdate__hobbiesGroup profileUpdate__formGroup">
          <label className="profileUpdate__label">Select hobby </label>
          <select
            name="hobbies"
            id="hobbies"
            onChange={(event) => {
              setHobbies(event.target.value);
            }}
            value={hobbies}
          >
            <option> </option>
            <option selected="true" value="Reading">
              Reading
            </option>
            <option value="Gaming">Gaming</option>
            <option value="Cooking">Cooking </option>
            <option value="Hiking">Hiking </option>
            <option value="Photography">Photography </option>
            <option value="Painting">Painting</option>
            <option value="playing sports">playing sports</option>
          </select>
        </div>

        <div className="profileUpdate__pictureGroup profileUpdate__formGroup">
          <label className="profileUpdate__label">Upload photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </div>

        {/* <Link to= "/dashboard"> */}
          <button className="profileUpdate__button" type="submit">
            Lets Mingle
          </button>
        {/* </Link> */}
      </form>
    </section>
  );
}

export default ProfileUpdate;
