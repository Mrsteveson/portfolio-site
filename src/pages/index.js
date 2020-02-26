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
    { id: '1', thumbnail: riy, caption: 'Review It Yourself', url: "https://review-it-yourself.com/", repo: "https://github.com/labs13-how-to", 
    description: 'Role: Full-Stack Developer, Tech Stack: Node.js, Express, React, Redux, PostgreSQL, Oauth. Review-It-Yourself is a full-stack web application dedicated to collecting user submitted DIY project, and allowing other users to view and review them to promote helpful and insightful ideas. '},

    { id: '2', thumbnail: cave, caption: 'Cave Escape', url: "https://maze-mud-client.herokuapp.com/", repo: "https://github.com/cs19-maze-mud", 
    description: 'Role: Full-Stack Developer, Tech Stack: Python, Django, React, Canvas. The Cave Escape is an interactive maze game built using a procedural generation algorithm that creates a random maze for users to explore as well as incorporates the pusher websocket allowing users to communicate to each other as they play. '},

    { id: '3', thumbnail: treasure, caption: 'Treasure Hunt', url: "https://github.com/CS22-TreasureMap/CS-Build-Week-2", repo: "https://github.com/CS22-TreasureMap/CS-Build-Week-2",
    description: 'Role: Developer, Tech Stack: Python. The Treasure Hunt is a fully automated program that will continuously explore the given map while gathering treasures and coins, utilizing a functional cpu module to operate the various commands. '},

    { id: '4', thumbnail: techx, caption: 'Tech Xchange', url: "https://rentmytech.netlify.com/", repo: "https://github.com/build-week-use-my-tech-stuff/front-end",
    description: 'Role: Front-End Developer, Tech Stack: React, Redux. Tech Xchange is a new spin on similar applications such as craigslist, specifically targetting tech related offerings. The goal is to connect students and other individuals to professionals seeking to lend their equipment out at a negotiable price providing these individuals access to equipment they otherwise would not have. '},

    { id: '5', thumbnail: journal, caption: 'LambdaFit', url: "https://github.com/weight-lifting-app/Backend", repo: "https://github.com/weight-lifting-app/Backend",
    description: 'Role: Back-End Developer, Tech Stack: Node.js, Express. LambdaFit is a personal journal application designed for all your workout needs. Record all of your workouts and your exercise details in one centralized location.'},

    { id: '6', thumbnail: lookbook, caption: 'The Lookbook', url: "https://build2artportfolio.github.io/The-Lookbook/", repo: "https://github.com/build2artportfolio/The-Lookbook",
    description: 'Role: UI-Developer, Tech Stack: Javascript. The Lookbook is an online art portfolio targetting photographers, providing a one-stop location for them to publish and display their work.  '}
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
                        <p>I'm a Full-Stack Developer, located in Northern Illinois. 
                            I have always been enthusiastic about technology and its limitless capabilities, 
                            always looking forward to discovering new and exciting frameworks and techniques to improve myself. 
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

                        <Gallery images={DEFAULT_IMAGES.map(({ id, thumbnail, caption, description, url, repo }) => ({
                            thumbnail,
                            caption,
                            description,
                            url,
                            repo
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/Mrsteveson" className="button">Other Work</a></li>
                        </ul>
                    </section>

                    <section id="four">
                        <h2>Get In Touch</h2>
                        <p>Looking for an energetic happy-go-lucky individual for your team? Then I am the developer for you, I look forward to hearing from you. Please contact me here, or if you'd prefer email me directly.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="https://formspree.io/mvoavqog">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form>
                                
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