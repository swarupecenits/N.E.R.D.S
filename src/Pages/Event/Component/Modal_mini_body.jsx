
import modaldata from  "../JSON/modaldata.json";
import pc_card_border from "../Assets/pc_card_border.svg";
import modalbg from "../Assets/modalbgmobile.svg";

const Modal = ({ id, toggleModal }) => {
  const obj = { ...modaldata };

  return (
    <>
      <div className="relative  flex items-center justify-center bg-cover"
        style={{
            backgroundImage:`url(${modalbg})`
        }}>
        {/* <img
          src={modalbg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        /> */}
        <div className="relative z-10 flex flex-col justify-center items-center p-6 md:p-6 pt-10">
          <h1 className="text-center mb-4 font-ethenocentric text-3xl md:text-4xl text-blue-600">
            {obj[id].head}
          </h1>
          <div
            className="overflow-hidden flex w-[70%] lg:w-[60%] mx-auto relative"
            style={{
              clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
              aspectRatio: '730 / 460',
            }}
          >
            <img src={pc_card_border} alt="" className="absolute w-full h-full z-0" />
            <img
              src={obj[id].url}
              alt="Sample Image"
              className="h-full w-full object-cover z-[-1]"
            />
          </div>

          <p className="mt-3 text-slate-200 max-w-[95%] mx-auto text-center text-sm md:max-w-[75%]">
            {obj[id].text}
          </p>

          <div className="flex justify-center mt-4">
            <a href={obj[id].register} target="_blank" rel="noopener noreferrer">
            <button
                    className= { `mt-[rem] mr-2 -ml-5 relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none `}
                  >
                    <span
                      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                    >
                    </span>
                    <span
                      className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 text-md font-medium text-white backdrop-blur-3xl gap-2 undefined"
                    >
                      Register
                    </span>
            </button>
            </a>

            <button
                    className= { `mt-[rem] relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none `}
                  >
                    <span
                      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                    >
                    </span>
                    <span
                      className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2 undefined"
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
