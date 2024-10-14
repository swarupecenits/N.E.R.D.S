import modaldata from "../JSON/modaldata.json";

const Modal = ({ id, toggleModal }) => {
  const obj = { ...modaldata };

  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-cover">
        {/* Glassmorphism box containing all the content */}
        <div
          className="relative z-10 flex flex-col justify-center items-center w-[90%] max-w-[700px] bg-gradient-to-r from-transparent-indigo-200 via-purple-500 to-pink-500 to-transparent border-2 border-purple-500 backdrop-blur-xl rounded-lg p-6 md:p-8"
         
        >
          {/* Heading */}
          <h1 className="text-center mb-4 font-ethenocentric text-2xl md:text-4xl text-blue-600">
            {obj[id].head}
          </h1>

          {/* Image inside glassmorphism box */}
          <div
            className="overflow-hidden flex w-[100%] mx-auto mb-6"
            style={{
              aspectRatio: '730 / 460',
            }}
          >
            <img
              src={obj[id].url}
              alt="Sample Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          {/* Description text */}
          <p className="text-slate-200 max-w-[95%] mx-auto text-left text-sm md:max-w-[75%] mb-4">
            {obj[id].text}
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            {/* Register Button */}
            <a href={obj[id].register} target="_blank" rel="noopener noreferrer">
              <button
                className="relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
              >
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                ></span>
                <span
                  className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 text-md font-medium text-white backdrop-blur-3xl gap-2"
                >
                  Register
                </span>
              </button>
            </a>

            {/* Back Button */}
            <button
              onClick={toggleModal}
              className="relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
              ></span>
              <span
                className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2"
              >
                Back
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
