import { useEffect } from "react";
import { useState } from "react";
import "./gradient.css";
import "./team.css";
import TeamCard from "../../components/team_card";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "./teamData.json";
import Footer from "../../components/Footer/footer";

const Team = () => {
  const [rotation, setRotation] = useState(-37.96);
  const [isLaptopView, setIsLaptopView] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1); // Slowly increase the rotation angle
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    setTeamData(data);
  }, []);
  const checkScreenSize = () => {
    setIsLaptopView(window.matchMedia("(min-width: 1024px)").matches);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const fourthYearMembers = teamData.filter(
    (member) => member.team === "4th Year",
  );
  const thirdYearMembers = teamData.filter(
    (member) => member.team === "3rd Year",
  );
  const secondYearMembers = teamData.filter(
    (member) => member.team === "2nd Year",
  );
  const developers = teamData.filter(
    (member) => member.developer_team === "Yes",
  );

  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-black main-section relative">
          <div className="content-section ">
            <h1 className="mt-[-2.5rem] font-ethenocentric font-xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading meet-heading absolute">
              MEET
            </h1>
            <h1 className="font-ethenocentric mt-[-4.8rem] font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent main-heading team-heading absolute">
              OUR TEAM
            </h1>
            <p className="font-spaced mt-[-5.5rem] text-white font-normal heading-subsection absolute">
              Our team is the backbone of our club. We have got some of the
              coolest minds of this college
            </p>
          </div>
          <div className="main-image">
            <img
              src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/txdg7c0ofspqdw5qajni"
              alt="robot-image"
              className="mix-blend-whiten absolute main-image-img"
            />
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div
            className="bg-[conic-gradient(from_134.62deg_at_50%_50%,_#111111_0deg,_#13040A_62.55deg,_#100429_189.91deg,_#f30066_205.08deg,_#111111_310.73deg,_#530ced_360deg)] h-[700px] w-[700px] rounded-full opacity-30 blur-3xl animate-gradient z-0 gradient"
            style={{
              width: "665px",
              height: "766px",
              top: "151px",
              left: "1033.16px",
              // transform: 'rotate(-37.96deg)',
              opacity: "31%",
              backdropFilter: "blur(195px)",
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.05s linear",
            }}
          ></div>
        </div>
      </div>
      <div className="text-center meet4th">
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour"
          style={{

            fontWeight: "400",
            lineHeight: "76.8px",
          }}
        >
          MEET OUR
        </h1>
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member"
          style={{

            fontWeight: "400",
            marginTop: "-1rem",
            lineHeight: "57.6px",
          }}
        >
          FOURTH YEAR MEMBER
        </h1>
      </div>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        spaceBetween={30} // Adjust space between slides for better visibility
        slidesPerView={1} // Default to 1 slide for very small screens
        breakpoints={{
          640: {
            slidesPerView: 1, // Show 1 slide at a time for mobile devices
            spaceBetween: 20, // Adjust space between slides for smaller screens
          },
          768: {
            slidesPerView: 2, // Show 2 slides for tablets (768px and above)
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // Show 3 slides for larger screens (1024px and above)
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination]}
        style={{ height: "auto", padding: "20px" }} // Allow height to adjust dynamically
      >
        {fourthYearMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              {" "}
              {/* Add a wrapper for styling */}
              <TeamCard member={member} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="grid place-items-center"
        style={{
          marginTop: "84px",
          marginBottom: "30px",
        }}
      >
        <hr className="firstline" />
        <hr className="secondline" />
        <hr className="thirdline" />
      </div>
      <div
        className="text-center"
        style={{
          marginTop: "250px",
        }}
      >
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour"
          style={{
            marginTop: "-14rem",
            fontWeight: "400",
            lineHeight: "76.8px",
          }}
        >
          MEET OUR
        </h1>
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member"
          style={{
            fontWeight: "400",
            marginTop: "-1rem",
            lineHeight: "57.6px",
          }}
        >
          THIRD YEAR MEMBER
        </h1>
      </div>
      {isLaptopView ? (
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
          {thirdYearMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      ) : (
        <Swiper
          navigation
          pagination
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
        >
          {thirdYearMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div
        className="grid place-items-center"
        style={{
          marginTop: "84px",
          marginBottom: "30px",
        }}
      >
        <hr className="firstline" />
        <hr className="secondline" />
        <hr className="thirdline" />
      </div>
      <div
        className="text-center"
        style={{
          marginTop: "250px",
        }}
      >
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour"
          style={{
            fontWeight: "400",
            marginTop: "-14rem",
            lineHeight: "76.8px",
          }}
        >
          MEET OUR
        </h1>
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member"
          style={{

            fontWeight: "400",
            marginTop: "-1rem",
            lineHeight: "57.6px",
          }}
        >
          SECOND YEAR MEMBER
        </h1>
      </div>
      <div className="flex justify-center">
        {isLaptopView ? (
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
            {secondYearMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        ) : (
          <Swiper
            navigation
            pagination
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
          >
            {secondYearMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div
        className="grid place-items-center"
        style={{
          marginTop: "84px",
          marginBottom: "30px",
        }}
      >
        <hr className="firstline" />
        <hr className="secondline" />
        <hr className="thirdline" />
      </div>
      <div
        className="text-center"
        style={{
          marginTop: "250px",
        }}
      >
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour"
          style={{

            fontWeight: "400",
            marginTop: "-14rem",
            lineHeight: "76.8px",
          }}
        >
          MEET OUR
        </h1>
        <h1
          className="font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member"
          style={{

            fontWeight: "400",
            lineHeight: "57.6px",
            marginTop: "-1rem",
          }}
        >
          DEVELOPERS
        </h1>
      </div>
      {isLaptopView ? (
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
          {developers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      ) : (
        <Swiper
          navigation
          pagination
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
        >
          {developers.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div
        className="grid place-items-center"
        style={{
          marginTop: "84px",
          marginBottom: "30px",
        }}
      >
        <hr className="firstline" />
        <hr className="secondline" />
        <hr className="thirdline" />
      </div>
    </>
  );
};

export default Team;
