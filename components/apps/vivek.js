import React, { Component } from 'react';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Hassan Kazemi Tehrani" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hassan' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hassan' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hassan' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="hassan's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Hassan Kazemi Tehrani Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Hi! my name is <span className="font-bold">Hassan Kazemi Tehrani</span> ,</div>
                <div>However, my friends and familiy call me <span className="font-bold">Shayan</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Software/DevOps Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Graduate Student(Master of Applied Science)</span> currently pursuing Computer Engineering and I am researching on Computer Vision in IoT. I've completed my BSc at <u className=' cursor-pointer '> <a href="https://en.wikipedia.org/wiki/Amirkabir_University_of_Technology" target={"_blank"}>AmirKabir University of Technology</a> </u>. Right now I'm looking for full-time/part-time Software/DevOps Engineer roles! ( Hit me up <a className='text-underline' href='mailto:shayanthrn@gmail.com'><u>@shayanthrn@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building">  I have a lot of work experience in Software Engineering and DevOps. I have worked for <u className=' cursor-pointer '><a href='https://pishgamvira.com/' target={"_blank"}>Vira Co.</a></u> as a Senior Software Engineer and Server Manager. In that position, I have developed a reservation system for doctors appointment in NodeJS(JavaScript). I was responsible for Design, development, deployment and maintenance of the project. As project failed due to some buissiness issues the source code is publicly available at <u className=' cursor-pointer '><a href='https://github.com/shayanthrn/reservation-vira-backend' target='blank'>my github repo</a></u>.</li>
                <li className=" mt-3 list-building"> After a while, I found a better job oppurtunity at <span className=" font-medium"><u className=' cursor-pointer '><a href='https://idmelon.com/' target={"_blank"}>IDmelon Inc. Vancouver, Canada</a></u></span> as a Software Engineer. I was responsible for design, development, deployment and maintenance of IDmelon SSO server. As a team, we developed SAML2 and OIDC protocols and designed a SSO server for Phishing-resistant Passwordless FIDO2 Authentication. My main responsibilities were design Software Architecture and development of server using Django(Python).</li>
                <li className=" mt-3 list-time"> When I am not coding or studying, I like to spend my time watching anime, playing League of Legends or spending time with my friends. </li>
                <li className=" mt-3 list-star"> And I also have interest and I am expert in Deep Learning & Computer Vision!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Master of Applied Science - Concordia University - Montreal, Canada
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - present</div>
                    <div className=" text-sm md:text-base">Computer Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; TBD</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Bachelor of Engineering - Amirkabir University of Technology - Tehran, Iran (Rank 1 of Iran)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2017 - 2021</div>
                    <div className=" text-sm md:text-base">Computer Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 3.9/4, Top 3% of University</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Back-End Development and DevOps!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Communication Languages</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Tools & Others</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
            <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="http://img.shields.io/badge/-English-3776AB?style=flat&logo=etsy&logoColor=ffffff" alt="hassan English" />
                        <img className="m-1" src="https://img.shields.io/badge/-Persian-%23F7DF1C?style=flat&logo=pixiv&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="hassan Persian" />
                        <img src="https://img.shields.io/badge/-French(A1)-FFCA28?style=flat&logo=fluxus&logoColor=ffffff" alt="hassan French" className="m-1" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="hassan python" />
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="hassan javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/-TypeScript-%23F7DF1C?style=flat&logo=TypeScript&logoColor=000000&labelColor=red&color=red" alt="hassan TypeScript" />
                        <img src="https://img.shields.io/badge/-Kotlin-FFCA28?style=flat&logo=Kotlin&logoColor=ffffff" alt="hassan Kotlin" className="m-1" />
                        <img src="https://img.shields.io/badge/-Java-%23F05032?style=flat&logo=intellijidea&logoColor=%23ffffff" alt="hassan Java" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" alt="hassan c" />
                        
                        <img className="m-1" src="https://img.shields.io/badge/css-blue?style=flat&logo=css3&logoColor=white" alt="hassan css" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="hassan HTML" /></a>
                        <img src="https://img.shields.io/badge/-SQL-yellow?style=flat&logo=mysql&logoColor=%23ffffff" alt="hassan SQL" className="m-1" />
                        
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img src="https://img.shields.io/badge/-Django-red?style=flat&logo=django&logoColor=ffffff" alt="hassan django" className="m-1" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="hassan node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/expressJs-593D88?style=flat&logo=express&logoColor=white" alt="hassan express.js" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="hassan react" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="hassan jquery" className="m-1" />
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="hassan next" />
                        <img className="m-1" src="https://img.shields.io/badge/Numpy-593D88?style=flat&logo=numpy&logoColor=white" alt="hassan numpy" />
                        <img src="https://img.shields.io/badge/-PyTorch-red?style=flat&logo=pytorch&logoColor=ffffff" alt="hassan pytorch" className="m-1" />
                        <img src="https://img.shields.io/badge/-Librosa-339933?style=flat&logo=librarything&logoColor=ffffff" alt="hassan Librosa" className="m-1" />
                        <img src="https://img.shields.io/badge/-Matplotlib-FFCA28?style=flat&logo=&logoColor=ffffff" alt="hassan matplotlib" className="m-1" />
                        <img className=" m-1" src="https://img.shields.io/badge/pandas-black?style=flat&logo=pandas&logoColor=ffffff" alt="hassan pandas" />
                        <img src="https://img.shields.io/badge/-SciPy-339933?style=flat&logo=SciPy&logoColor=ffffff" alt="hassan SciPy" className="m-1" />
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="hassan git" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/-MongoDB-%23F7DF1C?style=flat&logo=mongodb&logoColor=000000&labelColor=green&color=green" alt="hassan MongoDB" />
                        <img className="m-1" src="https://img.shields.io/badge/PostgreSQL-00599C?style=flat&logo=postgreSQL%2B%2B&logoColor=white" alt="hassan PostgreSQL" />
                        <img className="m-1" src="http://img.shields.io/badge/-SQlite-3776AB?style=flat&logo=sqlite&logoColor=ffffff" alt="hassan SQlite" />
                        <img src="https://img.shields.io/badge/-Google App Engine/Google Cloud-%23CC6699?style=flat&logo=googlecloud&logoColor=ffffff" alt="hassan GAE" className="m-1" />
                        <img src="https://img.shields.io/badge/-Docker-%23F05032?style=flat&logo=docker&logoColor=%23ffffff" alt="hassan Docker" className="m-1" />
                        <img className="m-1" src="http://img.shields.io/badge/-Kubernetes-3776AB?style=flat&logo=kubernetes&logoColor=ffffff" alt="hassan Kubernetes" />
                        <img className=" m-1" src="https://img.shields.io/badge/AWS-black?style=flat&logo=amazonaws&logoColor=ffffff" alt="hassan AWS" />
                        <img className="m-1" src="https://img.shields.io/badge/Scrum-0175C2?style=flat&logo=scrumalliance&logoColor=white" alt="hassan Scrum" />
                        <img src="https://img.shields.io/badge/-DevOps-%23CC6699?style=flat&logo=azuredevops&logoColor=ffffff" alt="hassan DevOps" className="m-1" />
                        <img className="m-1" src="http://img.shields.io/badge/-SSO-3776AB?style=flat&logo=simkl&logoColor=ffffff" alt="hassan SSO" />
                        <img className="m-1" src="http://img.shields.io/badge/-Software Architecture-3776AB?style=flat&logo=&logoColor=ffffff" alt="hassan SA" />
                        <img className="m-1" src="https://img.shields.io/badge/Microservices-593D88?style=flat&logo=&logoColor=white" alt="hassan Microservices" />
                        <img className="m-1" src="http://img.shields.io/badge/-Jira-3776AB?style=flat&logo=jirasoftware&logoColor=ffffff" alt="hassan Jira" />
                        <img className="m-1" src="https://img.shields.io/badge/REST-0175C2?style=flat&logo=&logoColor=white" alt="hassan REST" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="hassan linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "UbuntuOS Portfolio",
            date: "",
            link: "https://github.com/shayanthrn/shayanthrn.github.io",
            description: [
                "This is my personal portfolio website of theme Ubuntu 20.04, made using Next.js & tailwind CSS. The source code belongs to https://github.com/vivek9patel/vivek9patel.github.io, but I made some customizations and personalizations to meet my requirments.",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },
        {
            name: "IDmelon",
            date: "",
            link: "#",
            description: [
                "Phishing-resistant Passwordless FIDO2 Authentication system. Move one step ahead of common SSO. Using IDmelon Simple Sign-On is not limited to IAMs and SSOs. Any web service which supports federated identity protocols like SAML, OpenID, or OATH2.0 can be set up and users can enjoy Simple Single Sign-On (SSO) to access these platforms, including Slack, Salesforce, Oracle, SAP, Workday, Cerner and many more. \n This project is not publicly available.",
            ],
            domains: ["Django", "Django-ninja", "React", "Software Architecture", "CI/CD", "Jira", "Scrum", "bitbucket","MVC Design", "Microservices", "REST", "PostgreSQL", "Google App Engin", "Docker", "Google Cloud", "Multiple application's APIs", "Encryption Algorithms","SAML2","OIDC", "FIDO2","HTML", "CSS","MongoDB"]
        },
        {
            name: "Dr. Tajviz",
            date: "",
            link: "https://github.com/shayanthrn/reservation-vira-backend",
            description: [
                "Web Apllication for booking doctor's appointment",
            ],
            domains: ["NodeJS", "ExpressJS", "Shaparak API", "SMS API", "Zarinpal payment API", "EJS", "Javascript", "HTML", "CSS","MongoDB"]
        },
        {
            name: "Webfolio",
            date: "",
            link: "https://github.com/shayanthrn/webfolio",
            description: [
                "An Intelligent Portfolio Website Creation System with Data-Driven Recommendation",
            ],
            domains: ["javascript", "Django", "LinkedIn API", "ChatGPT API", "HTML5", "CSS"]
        },
        {
            name: "Food Intake Monitoring",
            date: "",
            link: "https://github.com/shayanthrn/FoodIntakeMonitoring",
            description: [
                "Food Intake Monitoring android application which uses Computer Vision Techniques to detect the amount of nutrients from a single image of food. This project is part of my MASc thesis",
            ],
            domains: ["Django", "PyTorch", "Numpy", "Kotlin", "Computer Vision"]
        },
        {
            name: "FooFle",
            date: "",
            link: "https://github.com/shayanthrn/FooFle",
            description: [
                "Database design and Web Application for Email Service using mariaDB and Nodejs.",
            ],
            domains: ["Nodejs", "SQL", "mariaDB"]
        },
        {
            name: "Any-to-Many Voice conversion application",
            date: "",
            link: "https://github.com/shayanthrn/thesis",
            description: [
                "Any-to-Many Voice conversion application using StarGANv2 as its machine learning model. This is my BS thesis.",
            ],
            domains: ["Django", "PyTorch", "SQlite", "Numpy", "Audio Processing"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=shayanthrn&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/cv.pdf" title="Hassan Kazemi Tehrani resume" frameBorder="0"></iframe>
    )
}