import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ProfileUpdate() {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [photo, setPhoto] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section>
      {/* <h1>Profile</h1> */}

      <form className="profileForm" onSubmit={handleSubmit}>
        <div className="profileForm__universityGroup">
          <label>Select university </label>
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

        <div className="profileForm__coursesGroup">
          <label>Select courses </label>
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

        <div className="profileForm__hobbiesGroup">
          <label>Select hobby </label>
          <select
            name="hobbies"
            id="hobbies"
            onChange={(event) => {
              setHobbies(event.target.value);
            }}
            value={hobbies}
          >
            <option> </option>
            <option value="Reading">Reading</option>
            <option value="Gaming">Gaming</option>
            <option value="Cooking">Cooking </option>
            <option value="Hiking">Hiking </option>
            <option value="Photography">Photography </option>
            <option value="Painting">Painting</option>
            <option value="playing sports">playing sports</option>
          </select>
        </div>

        <div className="profileForm__pictureGroup">
          <label>Upload photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </div>

        <button className="profileForm__button" type="submit">
          Lets Mingle
        </button>
      </form>
    </section>
  );
}

export default ProfileUpdate;
