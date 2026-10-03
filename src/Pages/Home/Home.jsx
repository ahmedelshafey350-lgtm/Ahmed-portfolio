import "./home.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <div className="hero-container">
                <img
                    className="hero-image  "
                    src="../../../public/Images/BackgrpundImage.avif"
                    alt=""
                />
            </div>
            <div className="IntoPersonal">
                <div className="Text">
                    <div>
                        <h2>Frontend With React JS</h2>
                        <p>
                            Premium Web Design, Development, and SEO services to help your
                            business stand out.
                        </p>
                    </div>
                </div>
                <div className="Services">
                    <p>
                        {" "}
                        <KeyboardDoubleArrowDownIcon className="icon" />
                        my services
                    </p>
                </div>
            </div>
            <motion.div
                className="Card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="EachCard">
                    <div>
                        <span>01</span>
                        <h2>Web design</h2>
                        <p>
                            Visually stunning web designs that captivate your audience by
                            blending your brand voice and customer needs.
                        </p>
                    </div>
                    <div>
                        <p>
                            <ArrowOutwardIcon className="icon" /> About Web Design
                        </p>
                    </div>
                </div>
                <div className="EachCard">
                    <div>
                        <span>02</span>
                        <h2>Development</h2>
                        <p>
                            Get custom web development solutions that are tailored to your
                            specifications, designed to deliver a flawless user experience..
                        </p>
                    </div>
                    <div>
                        <p>
                            <ArrowOutwardIcon className="icon" />
                            About Development
                        </p>
                    </div>
                </div>
                <div className="EachCard">
                    <div>
                        <span>03</span>
                        <h2>Content & Seo</h2>
                        <p>
                            Proven SEO strategies that enhance your online performance,
                            bringing you to the forefront of organic search results.
                        </p>
                    </div>
                    <div>
                        <p>
                            <ArrowOutwardIcon className="icon" />
                            About SEO
                        </p>
                    </div>
                </div>
            </motion.div>
            <div className="imageCard">
                <div className="HeadImage">
                    <h2>Selected Work</h2>
                    <p>
                        <Link to={"/Work"}>   <ArrowOutwardIcon className="icon" />
                            See all</Link>
                    </p>
                </div>
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
            <div className="process">
                <div className="HeadProcess">
                    <h3>The Process</h3>
                    <h1>Your Website in 5 steps</h1>
                    <p>
                        Our process ensures that we create a website tailored to your
                        business needs.
                    </p>
                </div>
                <div className="FiveSteps " >
                    <div className="CardProcessLeft">
                        <div className="OneCard"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.5 }} className="OneCard">
                            <button>2 Weeks</button>
                            <h3>WE need a plan</h3>
                            <h1>Concept & STrategy</h1>
                            <p>
                                Together, we develop a strategy that successfully combines your
                                goals with the needs of your target audience. Based on this
                                concept, I create the first wireframes and an interactive
                                prototype. This provides us with a very good impression of the
                                website and the user interface.
                            </p>
                            <ul>
                                <li>UX Design</li>
                                <li>Wireframes</li>
                                <li>Interactive Prototype</li>
                            </ul>
                        </motion.div>
                        <div className="OneCard"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.5 }} className="OneCard">
                            <button>2 Weeks</button>
                            <h3>More Magic</h3>
                            <h1>Development</h1>
                            <p>
                                In this step, we breathe life into your new high-end design. You
                                will receive a custom-built website using a modular web design
                                system and CMS integration. Animations will add the necessary
                                flair to your site and set you apart from the boring
                                competition.
                            </p>
                            <ul>
                                <li>Custom framer website</li>
                                <li>Modular web design systems</li>
                                <li>CMS integration</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div className="hrcenter">
                        <span><ArrowDownwardIcon /></span>
                        <span>01</span>
                        <span>02</span>
                        <span>03</span>
                        <span>04</span>
                        <span>05</span>
                    </div>

                    <div className="CardProcessRight">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.5 }} className="OneCard">
                            <button>2 Hours</button>
                            <h3>Do we Match?</h3>
                            <h1>Discovery Call</h1>
                            <p>
                                Before we start, we determine if and how I can help you. What
                                are your requirements for your new website? Why do you need a
                                new website? What goals do you have, and what problems can we
                                solve with a new website?
                            </p>
                            <ul>
                                <li>We get to know each other better</li>
                                <li>Determine how I can best assist you</li>
                                <li>Understand the goals you have for your website</li>
                            </ul>
                        </motion.div>
                        <div className="OneCard"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.5 }} className="OneCard">
                            <button>2 Weeks</button>
                            <h3>Some Magic</h3>
                            <h1>web Design</h1>
                            <p>
                                Now comes the magic. Based on the previously developed concept,
                                I create a high-end screen design perfectly tailored to your
                                brand. A web design that sets you apart from your competition,
                                fits your target audience ideally, and provides an excellent
                                user experience.
                            </p>
                            <ul>
                                <li>High-end web design tailored to your brand</li>
                                <li>Interactive prototype of the design</li>
                            </ul>
                        </motion.div>
                        <div className="OneCard"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.5 }} className="OneCard">
                            <button>2 Hours</button>
                            <h3>Ready to go</h3>
                            <h1>WEbsite onboarding</h1>
                            <p>
                                In a personal Framer workshop, I will show you how to make
                                changes to your new website quickly and easily. Additionally,
                                you will receive personalized Framer video tutorials that you
                                can access at any time. Edit your Framer website without a
                                complicated backend or the need for an additional programmer.
                                It's as simple as that.
                            </p>
                            <ul>
                                <li>Personal workshop</li>
                                <li>Personalized video tutorials</li>
                                <li>Edit text and images directly on your website</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="hero-container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 30 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}>lshafey</motion.div>
                <div >
                    <img
                        className="hero-image"
                        src="../../../public/Images/BackgrpundImage.avif"
                        alt=""
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: -20 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}  >Ahmed E</motion.div>
            </div>
            <div className="About">
                <div className="web">
                    <p>A website that leaves
                    </p>
                    <p>a lasting impression!</p>
                </div>
                <div className="Parg">
                    <p>
                        Hi, I'm Ahmed Elshafey - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!
                    </p>
                </div>
            </div>
           
            <Footer/>
        </div>
    );
}

export default Home;
