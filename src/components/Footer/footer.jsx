import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";


function Footer() {
  return (
    <>
    <div className='relative flex items-center justify-center'>
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
    backdropFilter: 'blur(14px)', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    boxShadow: '0 4px px rgba(0, 0, 0, 0.1)',
    WebkitBackdropFilter: 'blur(14px)'

  }}
>
  <div id='logo'>
    <img 
      src="https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/npansp6k2ntw7qeoqoms" 
      className="w-32 h-32 ml-12 mt-14 z-50 absolute top-0 left-0" 
    />
  </div>

  <div id='wanna' className='ml-32 mt-14 flex flex-col'>
    <p 
      className=' font-ethenocentric' 
      style={{ fontSize: '16.2px', width: '260px', height: '29px', fontWeight: '300',color:'#FFFFFF' }}
    >
      Wanna know more?
    </p>

    <input 
      type="email" 
      placeholder="Email us here" 
      style={{ 

        backgroundColor: '#3E3E3E', 
        marginTop: '36px', 
        fontSize: '14.12px', 
        width: '352px', 
        padding: '8px', 
        color: 'white',
        border: 'none',         
        outline: 'none',       
        clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15px)' 

      }}
    />

    <p className='text-base text-white font-serif mt-3'>
      Or contact us <a className='text-blue-500 underline' href='#'>here</a>
    </p>
  </div>

  <div style={{ width: '360px', height: '140px' }} className='mt-14'>
    <p 
      className='text-white font-ethenocentric' 
      style={{ fontSize: '16.2px', width: '120px', height: '29px', fontWeight: 'bold' }}
    >
      Visit Us
    </p>
    <p 
      className='text-white mt-8' 
      style={{ fontSize: '14px', width: '270px', height: '29px', fontWeight: 'bold', fontFamily: 'serif' }}
    >
      NIT Silchar, Silchar, Assam, India- 788010
    </p>
    <p 
      className='text-white mt-0' 
      style={{ fontSize: '14px', width: '270px', height: '29px', fontWeight: 'bold', fontFamily: 'serif' }}
    >
      Email- nerds@gmail.com
    </p>
    <p 
      className='text-white mt-0' 
      style={{ fontSize: '14px', width: '270px', height: '29px', fontWeight: 'bold', fontFamily: 'serif' }}
    >
      +91 9090909090
    </p>
  </div>

  <div style={{ width: '16px', height: '140px', marginRight: '110px' }} className='mt-14 flex flex-col'>

    <div><a target="_blank" href='https://www.facebook.com/roboticsclub.nits?mibextid=ZbWKwL'><FaFacebook color='white' size="30px" /></a></div>
    <div className='mt-6'><a target="_blank" href='https://www.instagram.com/nerds.nitsilchar?igsh=MTM0MjFpZjF6M3Zucg=='><PiInstagramLogoFill color='white' size="30px" /></a></div>
    <div className='mt-6'><a target="_blank" href='https://www.linkedin.com/company/n-e-r-d-s-nits/'><FaLinkedin color='white' size="30px" /></a></div>

  </div>

</div>
        <div className=' w-full h-[25%] flex flex-row justify-center'>

            <div className='mt-20'><h1 style={{fontWeight:'bolder'}} className='text-white text'>All Rights Reserved @ N.E.R.D.S. NIT Silchar</h1>
            </div>

        </div>

  </div>
    
</div>
    </>
  );
}

export default Footer;
