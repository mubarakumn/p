import ProjectCard from "./small-components/ProjectCard";
import img1 from "../assets/ide-1.png"
import img2 from "../assets/ide-2.png"
import img3 from "../assets/ide-3.png"

function Projects(){
    return(
        <>
        <div className="section-3" id="projects">
            <div className="projects-head">
                <h2>My Projects</h2>
                <p>This Are Some of my past Projects</p>
            </div>
            <div className="projects-content">
                <ProjectCard img={img3} name="project name" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam possimus rerum sapiente architecto reprehenderit voluptate deserunt laudantium eos dignissimos placeat."/>
                <ProjectCard img={img3} name="project name" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam possimus rerum sapiente architecto reprehenderit voluptate deserunt laudantium eos dignissimos placeat."/>
                <ProjectCard img={img3} name="project name" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam possimus rerum sapiente architecto reprehenderit voluptate deserunt laudantium eos dignissimos placeat."/>
            </div>
        </div>
        </>

    )
}
export default Projects;
