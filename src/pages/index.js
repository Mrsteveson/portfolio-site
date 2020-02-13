import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import riy from '../assets/images/projects/RIY.jpg'
import cave from '../assets/images/projects/Cave.jpg'
import treasure from '../assets/images/projects/treasure.jpg'
import journal from '../assets/images/projects/journal.jpg'
import lookbook from '../assets/images/projects/Lookbook.jpg'
import techx from '../assets/images/projects/TechX.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import html from '../assets/images/badges/HTML5.png'
import css from '../assets/images/badges/css.png'
import django from '../assets/images/badges/django.png'
import git from '../assets/images/badges/git.png'
import heroku from '../assets/images/badges/heroku.png'
import js from '../assets/images/badges/js.png'
import netlify from '../assets/images/badges/netlify.png'
import nodejs from '../assets/images/badges/nodejs.png'
import pg from '../assets/images/badges/pg.png'
import python from '../assets/images/badges/python.png'
import react from '../assets/images/badges/react.png'
import sql from '../assets/images/badges/sql.png'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: riy, caption: 'Review It Yourself', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: cave, caption: 'Cave Escape', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: treasure, caption: 'Treasure Hunt', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: techx, caption: 'Tech Xchange', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: journal, caption: 'LambdaFit', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: lookbook, caption: 'The Lookbook', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Portfolio Website - Patrick Steveson"
        const siteDescription = "Personal portfolio website"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>What I'm about</h2>
                        </header>
                        <p>Hello, I'm Patrick Steveson, a Full-Stack Developer, located in Northern Illinois. 
                            I have always been enthusiastic about technology and its limitless capabilities. 
                            I enjoy problem solving, improving my skills and have a passion for helping people.
                            I am very excited about the future of technology and what it will bring.</p>
                    </section>

                    <section id="two">
                        <header>
                            <h2>Skills</h2>
                        </header>
                        <p>I have experience with both front-end and back-end development as well as algorithms and data structures in python.</p>
                        <div className="badge-cont">
                            <div className="badges">
                                <img className="badge" src={html} alt="HTML"/>
                                <p className="badge-text">HTML5</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={css} alt="CSS"/>
                                <p className="badge-text">CSS</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={js} alt="Javascript"/>
                                <p className="badge-text">Javascript</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={react} alt="React"/>
                                <p className="badge-text">React</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={nodejs} alt="Node.js"/>
                                <p className="badge-text">Node.js</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={sql} alt="SQLite"/>
                                <p className="badge-text">SQLite</p>
                            </div>
                            
                            <div className="badges">
                                <img className="badge" src={pg} alt="PostgreSQL"/>
                                <p className="badge-text">PostgreSQL</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={python} alt="python"/>
                                <p className="badge-text">Python</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={django} alt="django"/>
                                <p className="badge-text">Django</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={git} alt="git"/>
                                <p className="badge-text">Git</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={netlify} alt="netlify"/>
                                <p className="badge-text">Netlify</p>
                            </div>

                            <div className="badges">
                                <img className="badge" src={heroku} alt="heroku"/>
                                <p className="badge-text">Heroku</p>
                            </div>
                        </div>
                    </section>

                    <section id="three">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/Mrsteveson" className="button">Other Work</a></li>
                        </ul>
                    </section>

                    <section id="four">
                        <h2>Get In Touch</h2>
                        <p>Looking for an energetic happy-go-lucky individual for your team? Then I am the developer for you, I look forward to hearing from you.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="https://formspree.io/apj2277@gmail.com">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Northern Illinois, 60045<br />
                                        United States
                                    </li>
                                    
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:patrick.steveson727@gmail.com">patrick.steveson727@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex