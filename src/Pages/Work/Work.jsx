import './Work.css'
import "../Home/home.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';
function Work() {


    return (
        <div className="content">
            <div className="headWork">
                <h2>My Work</h2>
                <p>My latest web design projects and see how we can</p>
                <p>help bring your ideas to life.</p>
            </div>
            <div className="imageCard">
                <div className="EachCardImage">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="oneImage"
                    >
                        <img
                            src="../../../public/Images/ChatGPT Image Sep 30, 2026, 07_39_02 PM.png"
                            alt=""
                        />
                        <div className="IntroImage">
                            <h2>Space</h2>
                            <p>Web Design</p>
                        </div>

                        <ArrowOutwardIcon className="iconCenter" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="oneImage"
                    >
                        <img src="../../../public/Images/nova.png" alt="" />
                        <div className="IntroImage">
                            <h2>Nova</h2>
                            <p>Web Design</p>
                        </div>

                        <ArrowOutwardIcon className="iconCenter" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="oneImage"
                    >
                        <img src="../../../public/Images/sonic.png" alt="" />
                        <div className="IntroImage">
                            <h2>Sonic</h2>
                            <p>Web Design</p>
                        </div>

                        <ArrowOutwardIcon className="iconCenter" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="oneImage"
                    >
                        <img src="../../../public/Images/space.png" alt="" />
                        <div className="IntroImage">
                            <h2>Solar</h2>
                            <p>Web Design</p>
                        </div>

                        <ArrowOutwardIcon className="iconCenter" />
                    </motion.div>
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default Work
