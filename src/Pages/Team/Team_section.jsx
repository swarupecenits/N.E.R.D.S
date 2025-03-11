import { useEffect, useState } from "react";
import "./team.css";
import TeamCard from "../../components/Team_card/team_card";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "./teamData.json";
import datas from "./developerdata.json";

const Team = () => {
  const [isLaptopView, setIsLaptopView] = useState(window.innerWidth >= 1024);
  const [teamData, setTeamData] = useState([]);
  const [developerData, setDeveloperData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2023"); // Default selected year

  useEffect(() => {
    setTeamData(data);
    setDeveloperData(datas);
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

  // Filter team members based on the selected year
  const filteredTeamData = teamData.filter((member) => member.year === selectedYear);

  // Filter members by team (4th Year, 3rd Year, 2nd Year)
  const fourthYearMembers = filteredTeamData.filter((member) => member.team === "4th Year");
  const thirdYearMembers = filteredTeamData.filter((member) => member.team === "3rd Year");
  const secondYearMembers = filteredTeamData.filter((member) => member.team === "2nd Year");

  // Developers remain unchanged (no filtering by year)
  const developers = developerData.filter((member) => member.developer_team === "Yes");

  return (
    <>
      {/* Dropdown to select the year */}
      <div className="text-center mt-8">
        <label htmlFor="year-select" className="text-white mr-4">Select Year:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      {/* Fourth Year Members */}
      <div className="text-center meet4th">
        <h1 className="font-ethenocentric text-5xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour">
          MEET OUR
        </h1>
        <h1 className="font-ethenocentric text-4xl mt-3 bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member">
          FOURTH YEAR MEMBERS ({selectedYear})
        </h1>
      </div>
      <Swiper
        navigation
        pagination={false}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Navigation, Pagination]}
      >
        {fourthYearMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <TeamCard className="kardy" member={member} />
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

      {/* Third Year Members */}
      <div className="text-center" style={{ marginTop: "250px" }}>
        <h1 className="font-ethenocentric text-5xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour">
          MEET OUR
        </h1>
        <h1 className="font-ethenocentric text-4xl mt-3 bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member">
          THIRD YEAR MEMBERS ({selectedYear})
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
          pagination={false}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
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

      {/* Second Year Members */}
      <div className="text-center" style={{ marginTop: "250px" }}>
        <h1 className="font-ethenocentric text-5xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour">
          MEET OUR
        </h1>
        <h1 className="font-ethenocentric text-4xl mt-3 bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member">
          SECOND YEAR MEMBERS ({selectedYear})
        </h1>
      </div>

      {isLaptopView ? (
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
          {secondYearMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      ) : (
        <Swiper
          navigation
          pagination={false}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
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

      {/* Developers (Unchanged) */}
      <div className="text-center" style={{ marginTop: "250px" }}>
        <h1 className="font-ethenocentric text-4xl bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent meetour">
          MEET OUR
        </h1>
        <h1 className="font-ethenocentric text-4xl mt-3 bg-gradient-to-b from-[#ffffff] to-[#068bf7] bg-clip-text text-transparent member">
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
          pagination={false}
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
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
    </>
  );
};

export default Team;