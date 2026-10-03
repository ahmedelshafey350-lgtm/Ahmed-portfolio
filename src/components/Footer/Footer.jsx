

import './footer.css'
import '../../Pages/Home/home.css'
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
function Footer() {



    return (
        <div className="content">
            <div className="animation">
                <div className="animation-track" >
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                    <span>lets talk</span>
                    <span>+++</span>
                </div>
            </div>
            <div className="topfooter">
                <h3>Project in mind?

                </h3>
                <p>Let’s make your

                </p>
                <p>Website shine

                </p>
                <p>Premium web design, development, and SEO services to help your business stand out.

                </p>
                <button>Get In Touch<ArrowOutwardIcon className='icon' /></button>
            </div>
            <div className="linkFooter">
                <div className="onelink">
                    <h3>AH.</h3>
                    <div>
                        <ul>
                            <li><InstagramIcon className='icon'/>Instagram</li>
                            <li><TwitterIcon className='icon' />Twitter</li>
                            <li><FacebookOutlinedIcon className='icon' />Facebook</li>
                            <li><LinkedInIcon className='icon'  />Linked in</li>
                        </ul>
                    </div>
                    <p>© Made by Ahmed Elshafey</p>
                </div>
                <div className="onelink">
                    <h3>Pages</h3>
                    <div>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/Services"}>Services</Link></li>
                            <li><Link to={"/About"}>About</Link></li>
                            <li>Pricing</li>
                            <li><Link to={"/Contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <button>Get More Templete <ArrowOutwardIcon className='icon' /></button>
                </div>
                <div className="onelink">
                    <h3>Cms</h3>
                    <div>
                        <ul>
                            <li>Work</li>
                            <li>Work Single</li>
                            <li>Blog</li>
                            <li>Blog Single</li>
                        </ul>
                    </div>
                </div>
                <div className="onelink">
                    <h3>Utility Pages</h3>
                    <div>
                        <ul>
                            <li>Styleguide</li>
                            <li>404 Error Page</li>
                            <li>Licensing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
