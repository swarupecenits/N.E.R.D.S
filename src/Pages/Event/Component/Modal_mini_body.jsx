import tiny_modal_bg from "../Assets/modal/tiny_modal_bg.svg"
import pic from "../Assets/modal/modalpic1.svg"
import modaldata from  "../JSON/modaldata.json"
import pc_card_border from "../Assets/pc_card_border.svg"
import modalbg from "../Assets/modalbgmobile.svg"

const modal = ({id, toggleModal})=> {
    const obj = {...modaldata}

    return (

        <>
            <div className="head flex pt-7 justify-between pr-11">
            <h1 className="text-center pt-8 pl-8 font-ethenocentric text-4xl ">{obj[id].head}</h1>
            <div
                className="overflow-hidden flex max-w-36 relative"
                style={{
                    clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)',
                    aspectRatio: '730 / 460',
                }}
                >
                    
                    <img src={pc_card_border} alt=""  className="z-0 absolute" />     

                    <img
                        src={obj[id].url} // Use the passed image source prop
                        alt="Sample Image"
                        className=" h-full w-full object-cover z-[-1]" // Using Tailwind for positioning and sizing
                    />
            </div>  


            </div>

            <p className="pl-5 pt-5 text-slate-200 font-ethenocentric text-wrap max-w-[80%] text-xs">{obj[id].text}</p>

            <button 
                onClick={toggleModal} 
                className= "mb-4 ml-[32%] mt-6 bg-blue-500 text-white px-2 py-1 rounded-lg text-center"
            >
                Toggle Menu
            </button>
        </>
    )
}

export default modal