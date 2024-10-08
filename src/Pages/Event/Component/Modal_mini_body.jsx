import tiny_modal_bg from "../Assets/modal/tiny_modal_bg.svg"
import pic from "../Assets/modal/modalpic1.svg"
import modaldata from  "../JSON/modaldata.json"

const modal = ({id})=> {
    const obj = {...modaldata}

    return (

        <>
            <div className="flex gap-5 justify-between" >
                <h1 className=" font-ethenocentric text-2xl ">{obj[id].head}</h1>
                <img className="max-w-[40%]"  src={obj[id].url} alt="" />
            </div>
            <p className="font-ethenocentric text-sm text-right p-10 pr-5">{obj[id].text}</p>
        </>
    )
}

export default modal