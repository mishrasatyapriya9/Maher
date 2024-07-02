import { useEffect } from "react";
import "./Carusel.css";
// import img1 from "../../assets/caruselimages/img1.jpg";
// import img2 from "../../assets/caruselimages/img2.jpg";
// import img3 from "../../assets/caruselimages/img3.jpg";
// import img4 from "../../assets/caruselimages/img4.jpg";
import h1 from "../../assets/HotelPics/r4.jpg";
import h2 from "../../assets/HotelPics/r2.jpg";
import h3 from "../../assets/HotelPics/taj.jpeg"; ///
import h4 from "../../assets/HotelPics/pexels-amar-saleem-15661-70441.jpg";
import h5 from "../../assets/HotelPics/havana-7844664_1920.jpg";
const Homecarusel = ({ scrollToComponent }) => {
  useEffect(() => {
    //step 1: get DOM
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    // let timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 4000;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);
  return (
    <div className="caruselhead">
      <div>
        <header style={{ textAlign: "center" }} className="header">
          {/* <nav className="navbarin">
            <a href>Home</a>
            <a href>Contacts</a>
            <a href>Info</a>
          </nav> */}
          <p
            className="pp"
            style={{
              marginLeft: "2%",
              fontSize: "30px",
              color: "white",
              fontFamily: "cinzel",
              marginTop: "30px",
              paddingTop: "20px",
            }}
          >
            Book Anytime, Anyhwere In India
          </p>
        </header>
        {/* carousel */}
        <div className="carousel">
          {/* list item */}
          <div className="list">
            <div className="item">
              <img src={h1} alt="content" />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  The Leela Palaces, Hotels & Resorts
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Spa Treatments, Gourmet Dining
                </div>
                <div className="des">
                  {/* lorem 50 */}
                  Immerse yourself in India's royal heritage. Embrace the
                  grandeur of The Leela Palaces, where impeccable service and
                  exquisite surroundings evoke the magic of India's rich
                  history.
                </div>
                <div className="buttons">
                  <button onClick={() => scrollToComponent("cardSliding")}>
                    SEE MORE
                  </button>
                  <button onClick={() => scrollToComponent("pricing")}>
                    JOIN CLUB FUSION
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h2} alt="content" />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  The Oberoi Group
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Lake Views, Royal Experience
                </div>
                <div className="des">
                  Unwind in serene sanctuaries. Indulge in unparalleled luxury
                  and personalized service at Oberoi Hotels & Resorts, where
                  every detail is designed for your ultimate comfort and
                  relaxation.
                </div>
                <div className="buttons">
                  <button onClick={() => scrollToComponent("cardSliding")}>
                    SEE MORE
                  </button>
                  <button onClick={() => scrollToComponent("pricing")}>
                    JOIN CLUB FUSION
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h3} alt="content" />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  Taj Hotels Resorts and Palaces
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Heritage Luxury, Iconic Views
                </div>
                <div className="des">
                  Discover India's vibrant energy. Experience the contemporary
                  luxury and lively atmosphere of Taj Hotels Resorts and
                  Palaces, perfectly positioned to explore the heart of India's
                  most exciting destinations.
                </div>
                <div className="buttons">
                  <button onClick={() => scrollToComponent("cardSliding")}>
                    SEE MORE
                  </button>
                  <button onClick={() => scrollToComponent("pricing")}>
                    JOIN CLUB FUSION
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h4} alt="content" />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  Marriott International
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Cultural Heritage
                </div>
                <div className="des">
                  Unwind in modern comfort. Experience the global hospitality
                  excellence of Marriott International, offering a seamless
                  blend of contemporary design, exceptional amenities, and
                  renowned service in India's most exciting locations.
                </div>
                <div className="buttons">
                  <button onClick={() => scrollToComponent("cardSliding")}>
                    SEE MORE
                  </button>
                  <button onClick={() => scrollToComponent("pricing")}>
                    JOIN CLUB FUSION
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={h5} alt="content" />
              <div className="content">
                <div className="author"></div>
                <div className="title" style={{ fontFamily: "Inter" }}>
                  The Lalit Group
                </div>
                <div className="topic" style={{ fontFamily: "Inter" }}>
                  Wellness Spa, Gourmet Cuisine
                </div>
                <div className="des">
                  Experience unparalleled luxury with a view. Immerse yourself
                  in the grandeur of The Lalit Group, known for its stunning
                  locations, opulent interiors, and impeccable service, offering
                  a truly unforgettable stay.
                </div>
                <div className="buttons">
                  <button onClick={() => scrollToComponent("cardSliding")}>
                    SEE MORE
                  </button>
                  <button onClick={() => scrollToComponent("pricing")}>
                    JOIN CLUB FUSION
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* list thumnail */}
          <div className="thumbnail">
            <div className="item">
              <img src={h2} alt="content" />
              <div className="content">
                <div className="title">Radisson Blu Plaza</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h3} alt="ss" />
              <div className="content">
                <div className="title">The Oberoi Udaivilas</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h4} alt="content" />
              <div className="content">
                <div className="title">Taj Mahal Palace</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h5} alt="content" />
              <div className="content">
                <div className="title">JW Marriott Jaipur Resort & Spa</div>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img src={h1} alt="content" />
              <div className="content">
                <div className="title">ITC Grand Chola</div>
                <div className="description"></div>
              </div>
            </div>
          </div>
          {/* next prev */}
          <div className="arrows">
            <button id="prev"></button>
            <button id="next"></button>
          </div>
          {/* time running */}
          <div className="time" />
        </div>
      </div>
    </div>
  );
};

export default Homecarusel;
