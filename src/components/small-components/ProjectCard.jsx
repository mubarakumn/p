import "./projectCard.css"
function ProjectCard({img, name, desc}){
    return(
        <>
        <div className="projectCard">
            <img src={img} alt="Project" />
            <a href="#">{name}</a>
            <p>{desc}</p>
        </div>
        </>
    )
}
export default ProjectCard;