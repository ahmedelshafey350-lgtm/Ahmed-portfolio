import './contact.css'
import '../Contact/contact.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { ExampleForm } from '../../components/TalkForm/Talk'
import Footer from '../../components/Footer/Footer';
function Contact() {

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
                    <ExampleForm />
                    <div className='LinkAbout '>
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

export default Contact
