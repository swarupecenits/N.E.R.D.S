import tiny_modal_bg from "../Assets/modal/tiny_modal_bg.svg"

const modal = ()=> {
    return (
        <div className="relative">
            <img src={tiny_modal_bg} alt=""  className="absolute top-0 left-0"  />
            <img src={"https://res.cloudinary.com/dehyqj5i3/image/upload/v1728318976/WhatsApp_Image_2024-10-07_at_1.16.22_AM_djxr1m-removebg-preview_ci6rfb.png"} alt="" 
            className="absolute w-[80%] left-7 top-8 max-h-20"/>
            <h1 className="font-ethenocentric text-4xl text-wrap max-w-40 left-10 top-32 text-slate-300 absolute">RAT IN A MAZE</h1>
            <p className="absolute top-[16rem] left-[7rem] max-w-[70%] text-xl font-ethenocentric">The Text goes here</p>
        </div>
    )
}

export default modal