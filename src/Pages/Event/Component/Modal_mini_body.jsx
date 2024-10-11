import tiny_modal_bg from "../Assets/modal/tiny_modal_bg.svg";
import pic from "../Assets/modal/modalpic1.svg";
import modaldata from  "../JSON/modaldata.json";
import pc_card_border from "../Assets/pc_card_border.svg";
import modalbg from "../Assets/modalbgmobile.svg";

const Modal = ({ id, toggleModal }) => {
  const obj = { ...modaldata };

  return (
    <>
      <div className="relative h-full flex items-center justify-center">
        <img
          src={modalbg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col justify-center items-center p-4 md:p-6 pt-20">
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

          <p className="mt-3 text-slate-200 max-w-[85%] mx-auto text-center text-sm md:max-w-[75%]">
            {obj[id].text}
          </p>

          <div className="flex justify-center mt-4">
            <button
              onClick={toggleModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Toggle Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
