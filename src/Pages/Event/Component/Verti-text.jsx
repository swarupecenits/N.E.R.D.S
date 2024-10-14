function Text({className}) {
    return (
      <div className={`${className} absolute top-[4.7rem] left-[-3.6rem] flex justify-center items-center z-50`} >
        <div
          className="bg-purple-600 font-ethenocentric text-white p-1 rounded-bl-lg rounded-br-lg transform -rotate-90 flex justify-center items-center"
        >
          Click Here
        </div>
      </div>
    );
  }
  
  export default Text;
  