import './Error.css'

const Error = () =>{
    return (
        <>
        <div className='maindiv'>
            <section>
                <p className='errormsg'>404-error</p>
                <p className='error'>PAGE NOT FOUND </p>
                <p className='search'>Your search has ventured beyond the known universe.</p>
                <a href="/">
                <div id="testbutton"></div></a>

            </section>
            <section className='image-container'>
                <img src="https://res.cloudinary.com/dmhbmurzw/image/upload/v1728482589/Group_vavgc2.png" alt="roboimg" className='astro'/>
            </section>
        </div>
        </>
    )
}
export default Error;