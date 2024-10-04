import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";


function Footer() {
  return (
    <>
    <div className='mt-20 relative flex items-center justify-center'>
      <div
        style={{

          backgroundImage: 'url("https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/tuchgn9xdbqwiesi3ywk")', 
          width: '100vw',
          height: '371.09px',
          position: 'absolute',
          top: '0',
          left: '0px',
          gap: '0px',
          opacity: '1',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
     
        }}
      > 
<div 
  className='w-full h-[68%] opacity-1 flex flex-row relative justify-between' 
  style={{
    backdropFilter: 'blur(40px)', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    boxShadow: '0 4px px rgba(0, 0, 0, 0.1)',
    WebkitBackdropFilter: 'blur(18px)'

  }}
>
  <div id='logo'>
  <a href="/" target="_blank">
    <img 
      src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/npansp6k2ntw7qeoqoms" 
      className="w-28 h-28 ml-12 mt-14 z-50 cursor-pointer absolute top-0 left-0" 
      
    />
 </a>
  </div>

  <div id='wanna' className='ml-32 mt-14 flex flex-col'>
    <p 
      className=' font-ethenocentric' 
      style={{ fontSize: '16.2px', width: 'auto', height: '29px', fontWeight: '300',color:'#FFFFFF' }}
    >
      Wanna know more?
    </p>

    <input 
      type="email" 
      placeholder="Email us here" 
      style={{ 

        backgroundColor: '#3E3E3E', 
        marginTop: '20px', 
        fontSize: '14.12px', 
        width: '20rem', 
        padding: '8px',
        border:'2px',
        borderColor:'grey', 
        color: 'white',        
        outline: 'none',  
        fontFamily:'spaced',     
        clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15px)' 

      }}
    />

    <p className='text-base text-white font-spaced mt-3'>
      Or contact us <a className='text-blue-500 underline' href='/contact'>here</a>
    </p>
  </div>

  <div style={{ width: 'auto', height: '140px' }} className='mt-14'>
    <p 
      className='text-white font-ethenocentric' 
      style={{ fontSize: '16.2px', width: '120px', height: '29px', fontWeight: 'bold' }}
    >
      Visit Us
    </p>
    <p 
      className='text-white mt-5 font-spaced' 
      style={{ fontSize: '14px', width: 'auto', height: '29px', fontWeight: 'bold'}}
    >
      <a href="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA" target="_blank">NIT Silchar, Silchar, Assam, India- 788010</a>

      
    </p>
    <p 
      className='text-white mt-0 font-spaced' 
      style={{ fontSize: '14px', width: 'auto', height: '29px', fontWeight: 'bold'}}
    >
      <a href="mailto:nerds.nitsilchar@gmail.com?subject=Hello%20N.E.R.D.S TEAM">Email- nerds.nitsilchar@gmail.com</a>

    </p>
    <p 
      className='text-white mt-0 font-spaced' 
      style={{ fontSize: '14px', width: 'auto', height: '29px', fontWeight: 'bold'}}
    >
      +91-60031 XXXXX
    </p>
  </div>

  <div style={{ width: '16px', height: '140px', marginRight: '110px' }} className='mt-14 flex flex-col'>

    <div><a target="_blank" href='https://www.facebook.com/roboticsclub.nits?mibextid=ZbWKwL'><FaFacebook color='white' size="30px" /></a></div>
    <div className='mt-6'><a target="_blank" href='https://www.instagram.com/nerds.nitsilchar?igsh=MTM0MjFpZjF6M3Zucg=='><PiInstagramLogoFill color='white' size="30px" /></a></div>
    <div className='mt-6'><a target="_blank" href='https://www.linkedin.com/company/n-e-r-d-s-nits/'><FaLinkedin color='white' size="30px" /></a></div>

  </div>

</div>
        <div className=' w-full h-[25%] flex flex-row justify-center'>

        <div className="mt-20 font-spaced text-center">
  <h1 style={{ fontWeight: 'bold', fontSize: '1rem' }} className="text-white">
    © 2024 N.E.R.D.S. NIT Silchar. All Rights Reserved.
  </h1>
</div>


        </div>

  </div>
    
</div>
    </>
  );
}

export default Footer;
