import tiny_modal_bg from "../Assets/modal/tiny_modal_bg.svg"
import pic from "../Assets/modal/modalpic1.svg"
import modaldata from  "../JSON/modaldata.json"
import pc_card_border from "../Assets/pc_card_border.svg"

const modal = ({id, toggleModal})=> {
    const obj = {...modaldata}

    return (

        <>
            <div className="flex gap-5 justify-between" >
                <h1 className=" font-ethenocentric text-2xl ">{obj[id].head}</h1>
                {/* <img className="max-w-[40%]"  src={obj[id].url} alt="" /> */}

                <div
                            className="overflow-hidden w-56 "
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
            <p className="font-ethenocentric text-sm text-right p-10 pr-5">{obj[id].text}</p>
            <button 
                onClick={toggleModal} 
                className= "ml-[22%] bg-blue-500 text-white px-6 py-2 rounded-lg text-center"
            >
                Toggle Menu
            </button>
        </>
    )
}

export default modal