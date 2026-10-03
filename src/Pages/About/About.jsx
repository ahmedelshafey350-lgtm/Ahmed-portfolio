import './about.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Footer from '../../components/Footer/Footer';
function About() {

    return (
        <>
            <div className='About2'>
                <div className="hero-container4">
                    <img
                        className="hero-image4  "
                        src="../../../public/Images/BackgrpundImage.avif"
                        alt=""
                    />
                </div>
                <div className='HalfSectionTwo'>
                    <div className="name">
                        <h2>Ahmed</h2>
                        <h2>Elshafey</h2>
                        <p>Delivering Premium Web Design and Development Services to Boost Your Online Presence.</p>
                    </div>
                    <div className="cardAbout">
                        <div className="contentAbout">
                            <h2>Ahmed Elshafey</h2>
                            <p>Your Partner in Bringing Your Web Design Vision to Life</p>
                            <p>As a freelance web designer and developer, I bring a unique combination of creativity and technical expertise to every project. With a keen eye for design and a passion for delivering user-friendly web experiences, I work closely with clients to understand their needs and bring their vision to life.</p>
                            <p>My approach is rooted in collaboration and communication, and I take pride in my ability to explain technical concepts in simple terms. Whether I'm developing a new website from scratch or optimizing an existing site for search engines, I always strive for excellence in both form and function. With a dedication to quality and a commitment to staying on top of the latest trends and technologies, I am confident in my ability to deliver exceptional results that exceed my clients' expectations.</p>
                            <div className='ImagePersonal'>
                                <img className='HeroImage' src="../../../public/Images/PhotoPersonal.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='LinkAbout'>
                        <div className="onelink">
                            <div><InstagramIcon className='icon' />Instagram <ArrowRightAltOutlinedIcon className='Arrowicon' /></div>
                        </div>
                        <div className="onelink"><div><FacebookOutlinedIcon className='icon' />Facebook<ArrowRightAltOutlinedIcon className='Arrowicon' /></div></div>
                        <div className="onelink"><div><LinkedInIcon className='icon' />Linked In<ArrowRightAltOutlinedIcon className='Arrowicon' /></div></div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default About
