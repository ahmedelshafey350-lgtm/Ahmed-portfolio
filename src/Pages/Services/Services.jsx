import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './Services.css'
import { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer/Footer'
function Services() {
    const sectionref = useRef(null);
    const [count, setCount] = useState(0);
    const [count2, setcount2] = useState(0);
    const [count3, setcount3] = useState(0);
    useEffect(() => {
        let intervalId;
        let interval
        let interval2
        const observer = new IntersectionObserver((entries) => {
            if (entries[0]?.isIntersecting && !intervalId) {
                observer.unobserve(sectionref.current);
                intervalId = setInterval(() => {
                    setCount((prev) => {
                        if (prev >= 49) {
                            clearInterval(intervalId);
                            return 50;
                        }

                        return prev + 1;
                    });
                }, 50);
                interval = setInterval(() => {
                    setcount2((prev) => {
                        if (prev >= 99) {
                            clearInterval(interval);
                            return 100;
                        }

                        return prev + 1;
                    });
                }, 50);
                interval2 = setInterval(() => {
                    setcount3((prev) => {
                        if (prev >= 9) {
                            clearInterval(interval2);
                            return 10;
                        }

                        return prev + 1;
                    });
                }, 50);
            }
        },
            {
                threshold: 0.5,
            }

        );
        observer.observe(sectionref.current);
        return () => {
            observer.disconnect();
            clearInterval(intervalId);
        };
    }, [])

    return (
        <div className="content">
            <div className="introservices">
                <p>Web Design

                </p>
                <p>& Framer

                </p>
                <p>Premium Web Design, Development, and SEO services to help your business stand out.

                </p>
                <h2><a href="#services"><ArrowDownwardIcon className='icon' />My Services </a></h2>
            </div>
            <div className="imageServices">
                <img src="../../../public/Images/FZwDXEWoUflJOZC3kxgyKvwJw.avif" alt="" />
            </div>
            <div className="buttomImage">
                <div className="oneButtom">
                    <h3>Clients</h3>
                    <h1 ref={sectionref}>{count}+</h1>
                </div>
                <div className="oneButtom">
                    <h3>Projects</h3>
                    <h1>{count}+</h1>
                </div>
                <div className="oneButtom">
                    <h3>Happy Clients</h3>
                    <h1>{count2}%</h1>
                </div>
                <div className="oneButtom">
                    <h3>Followers</h3>
                    <h1>{count3}K</h1>
                </div>
            </div>
            <div className="srvicesCard">
                <div className='EachCard'>
                    <div className='innercard'>
                        <h2>Webdesign</h2>
                        <p>Transforming Your Ideas into Reality</p>
                        <img src="../../../public/Images/space.png" alt="" />
                        <div className='buttomcard'>
                            <div>
                                <h2>Concept</h2>
                                <p>
                                    I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
                            </div>
                            <div>
                                <h2>UX / Ui Design</h2>
                                <p>
                                    I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
                            </div>
                            <div>
                                <h2>Prototype</h2>
                                <p>
                                    With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='EachCard'>
                    <div className='innercard'>
                        <h2>Development</h2>
                        <p>Developing High-Performance Websites and Web Applications
                        </p>
                        <img src="../../../public/Images/ChatGPT Image Sep 30, 2026, 07_39_02 PM.png" alt="" />
                        <div className='buttomcard'>
                            <div>
                                <h2>Framer</h2>
                                <p>

                                    I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life</p>
                            </div>
                            <div>
                                <h2>CMS Integration

                                </h2>
                                <p>

                                    I can help you streamline your content management process by integrating a CMS into your website. Say goodbye to manual updates and hello to efficiency.</p>
                            </div>
                            <div>
                                <h2>WEb Design System

                                </h2>
                                <p>
                                    I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='EachCard'>
                    <div className='innercard'>
                        <h2>SEo & Content

                        </h2>
                        <p>Boosting Your Website's Organic Search Traffic
                        </p>
                        <img src="../../../public/Images/sonic.png" alt="" />
                        <div className='buttomcard'>
                            <div>
                                <h2>Research

                                </h2>
                                <p>

                                    I conduct thorough research to identify the best keywords and strategies to improve your website's search engine ranking..</p>
                            </div>
                            <div>
                                <h2>SEO Ranking

                                </h2>
                                <p>

                                    My SEO services are designed to improve your website's visibility on search engines, increasing your organic traffic and driving more leads and sales.</p>
                            </div>
                            <div>
                                <h2>SEO Support

                                </h2>
                                <p>

                                    With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO best practices, keeping you ahead of the competition.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        </div>
    )
}

export default Services
