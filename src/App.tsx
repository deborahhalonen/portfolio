import React, { forwardRef, RefObject, createRef } from 'react'
import Background from './Background'
import p5 from 'p5'
import './App.scss'
import chart from './images/chart.png'
import kallan from './images/kallan.png'

const scrollToRef = (ref: RefObject<any>) => window.scrollTo(0, ref.current.offsetTop)   

const App = () => {

  const aboutMeRef = createRef<HTMLDivElement>()
  const scrollToExperience: () => void = () => scrollToRef(aboutMeRef)

  return (
    <div id="app">
      <Hero onChevronClicked={scrollToExperience}/>
      <AboutMe ref={aboutMeRef} />
      <Footer />
      <Experience />
    </div>
  )
}

const Hero = ({ onChevronClicked }: { onChevronClicked: () => void }) => {

  return (
    <section className="hero is-fullheight">
      <div className="hero-body columns">
        <Background/>
        <div className="hero-bg-grid"/>
        <div className="hero-bg-gradient"/>
        <Intro onChevronClicked={onChevronClicked}/>
        <Chevron clickListener={onChevronClicked} />
      </div>
    </section>
  )
}

const Intro = ({ onChevronClicked }: { onChevronClicked: () => void }) => {
  return (
    <div className="columns">
      <div className="column is-1 is-tablet"></div>
      <div className="column is-4 mt-8 mb-auto">
        <h1 className="title is-3 is-size-4-touch mb-2 fadein-1">Deborah Halonen</h1>
        <h2 className="title is-4 is-size-4-touch fadein-2">Architect</h2>
        <p className="mb-2 fadein-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="mb-4 fadein-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

const Chevron = ({ clickListener }: { clickListener: () => void }) => {
  return (
    <div className="is-hidden-touch chevron-down fadein-5">
      <button onClick={clickListener}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#080808" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
        </svg>
      </button>
    </div>
  )
}

const Footer = () => {
  return (
      <div className="container is-fluid mb-5">
        <div className="columns is-mobile is-centered">
        <button className="ml-5 mr-5">
          <p className="is-size-7">
            <a href="/files/CV.pdf">CV (TODO)</a>
          </p>
        </button>
        <button className="ml-5 mr-5">
          <p className="is-size-7">
            <a href="https://www.linkedin.com/in/deborah-halonen-877b1a256/">LinkedIn</a>
          </p>
        </button>
        <button className="ml-5 mr-5">
          <p className="is-size-7">
            <a href="mailto:deborah.halonen@gmail.com">Email</a>
          </p>
        </button>
      </div>
      </div>
  )
}

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <section className="section experience">
        <div className="container">
          <h2 className="title is-5">About me</h2>
          <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="mb-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </div>
  )
})

interface ProjectItemProps{
  imgSrc: string,
  imgAltText: string,
  title: string,
  descriptions: string[],
  link: { title: string, link: string }
}

const Experience = forwardRef<HTMLDivElement>((props, ref) => {

  const projectItems: ProjectItemProps[] = [
    {
      imgSrc : kallan,
      imgAltText : "Lorem ipsum",
      title : "Lorem ipsum",
      descriptions : [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ],
      link : { title : "Lorem ipsum", link : "https://www.example.com" }
    },
    {
      imgSrc : chart,
      imgAltText : "Lorem ipsum",
      title : "Lorem ipsum",
      descriptions : [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ],
      link : { title : "Lorem ipsum", link : "https://www.example.com" }
    },
    {
      imgSrc : kallan,
      imgAltText : "Lorem ipsum",
      title : "Lorem ipsum",
      descriptions : [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ],
      link : { title : "Lorem ipsum", link : "https://www.example.com" }
    },
    {
      imgSrc : chart,
      imgAltText : "Lorem ipsum",
      title : "Lorem ipsum",
      descriptions : [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ],
      link : { title : "Lorem ipsum", link : "https://www.example.com" }
    }
  ]

  return (
    <section className="section experience">
      <div className="container">
        <h2 className="title is-5">My work</h2>

        {
          projectItems.map((item, i) => {
            return (
                <ProjectItem {...item} key={"p" + i}/>
            )
          })
        }

      </div>
    </section>
  )
})

const ProjectItem = (props: ProjectItemProps) => {

  return (
    <div className="columns mt-2 mb-6 is-6 is-variable">
      <div className="projectitem column is-7-tablet mt-1">
        <a href={props.imgSrc} target="_blank" rel="noopener noreferrer">
          <img src={props.imgSrc} className="portfolio-image" alt={props.imgAltText} />
        </a>
      </div>
      <div className="projectitem column is-5-tablet ">
        <h3 className="subtitle is-6 mb-2">{props.title}</h3>

        {
          props.descriptions.map((desc, i) => {
            return (
              <p className="is-size-7" key={i}>{desc}</p>
            )
          })
        }

        <button className="mt-2">
          <p><a href={props.link.link}>{props.link.title}</a></p>
        </button>
    </div>
  </div>
  )
}

export default App
