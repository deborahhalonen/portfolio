import React from 'react'
import Background from './Background'
import p5 from 'p5'
import './App.scss'
import grainwave1 from './images/Grainwave_foto_1_.jpg'
import grainwave2 from './images/Grainwave_foto_2.jpg'
import grainwave3 from './images/Grainwave_foto_3.jpg'

const GrainwaveApp = () => {

  return (
    <div id="app">
      <Hero />
      <Project />
    </div>
  )
}

const Hero = () => {
  return (
    <div className="hero is-fullheight section">
      <div className="level">
        <div className="level-left has-text-centered-touch">
          <p className="is-size-6 has-text-weight-semibold">Deborah Halonen</p>
        </div>
        <div className="level-right has-text-centered-touch">
          <p className="is-size-6 has-text-weight-semibold">architect, designer and builder</p>
        </div>
      </div>

      <div>
        <h1 className="title is-2 has-text-centered is-family-secondary has-text-weight-light">
          Grain<wbr/><span className="is-italic">wave</span>
        </h1>
      </div>

      <div className="columns mt-6">
        <div className="column is-4">
          <p className="is-size-7 has-text-left has-text-centered-touch has-text-weight-semibold">
            cnc technology <br /> random parameters
          </p>
        </div>
        <div className="column is-4 has-text-centered">
          <p className="is-size-7 has-text-weight-semibold">Stockholm <br /> Sweden</p>
        </div>
        <div className="column is-4 has-text-right has-text-centered-touch">
          <p className="is-size-7 has-text-weight-semibold">
            Master of Architecture - MArch <br /> KTH
          </p>
        </div>
      </div>
    </div>
  );
};


interface ProjectItemProps{
  imgSrc: string,
  imgAltText: string,
  title: string,
  descriptions: string[],
}

const Project = () => {

  const projectItems: ProjectItemProps[] = [
    {
      imgSrc : grainwave1,
      imgAltText : "Grainwave chair",
      title : "Overview",
      descriptions : [
        "Grainwave is the result of an exploration into how parametric design and digital fabrication can challenge our perception of wood as a material. By creating random parameters in Grasshopper, an organic seat form was generated, which was then milled from solid maple using CNC technology.",
        "The stool’s legs were designed and milled to seamlessly merge with the seat, reinforcing the soft, cohesive expression of the piece."  
      ]
    },
    {
      imgSrc : grainwave2,
      imgAltText : "Grainwave chair",
      title : "Material",
      descriptions : [
        "The aim has been to push the boundaries of wood’s visual and tactile qualities, creating a form that evokes associations with something fluid or textile rather than a rigid material. When light strikes the surface, a play of shadows emerges and shifts over time, giving the stool a living presence within the space."
      ]
    },
    {
      imgSrc : grainwave3,
      imgAltText : "Grainwave chair",
      title : "Vision",
      descriptions : [
        "Grainwave unites the natural warmth of the material with a digital design language, demonstrating how technology can be used to create objects that are both tactilely and visually rich."
      ]
    }
  ]

  return (
    <section className="section experience">
      <div className="container">

        {
          projectItems.map((item, i) => {
            return (
                <ProjectItem {...item} key={"p" + i}/>
            )
          })
        }

        <div className="columns is-centered">
          <div className="column is-narrow">
            <button className="mt-2">
              <p className="is-size-7"><a href={"https://deborahhalonen.github.io/portfolio/files/Grainwave_ritning.pdf"}>{"Grainwave blueprints"}</a></p>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

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
    </div>
  </div>
  )
}

export default GrainwaveApp
