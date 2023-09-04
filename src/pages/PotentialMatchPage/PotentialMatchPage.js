import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import "./PotentialMatchPage.scss";
import potentialImage from "../../assets/images/potential.png";
import friendRequest from "../../assets/images/friend-request.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function PotetnialMatchPage() {
  const [potentialMatches, setPotentialMatches] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/potential-match/get")
      .then((response) => {
        setPotentialMatches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(potentialMatches);

  /* this new array will not contain duplicates
   self is the array being iterated
   find index- check if the current match has a unique id with array
*/
  const uniqueMatches = potentialMatches.filter((match, index, self) => {
    return index === self.findIndex((m) => m.id === match.id);
  });

  return (
    <div className="potentialMatch">
      <div className="potentialMatch__header">
        <Link to="/dashboard" className="potentialMatch__headerLink">
          <h1>MingleU</h1>
        </Link>
      </div>

      <section className="potentialMatch__wrapper">
        <div className="potentialMatch__subheaderWrapper">
          <ArrowBack className="potentialMatch__arrowImage" />
          <h2 className="potentialMatch__subheader">Potential Matches</h2>
        </div>

        <div className="potentialMatch__swiper">
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
            <SwiperSlide>
              <div className="potentialMatch__imageWrapper">
                <img
                  src={potentialImage}
                  className="potentialMatch__image"
                  alt="potential image"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="potentialMatch__imageWrapper">
                <img
                  src={friendRequest}
                  className="potentialMatch__image"
                  alt="friend request"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <h3 className="potentialMatch__listTitle">Saved Matches</h3>

        <ul className="potentialMatch__unordered">
          {uniqueMatches.map((match) => {
            return (
              <li className="potentialMatch__item" key={match.id}>
                <Link
                  to={`/student/${match.id}`}
                  className="potentialMatch__link"
                >
                  {match.first_name} {match.last_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
export default PotetnialMatchPage;
