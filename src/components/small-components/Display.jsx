import "./display.css"
function Display(props){
    return(
        <div className="display-panel">
            <h1>{props.heading}</h1>
            <p>{props.p}</p>
        </div>
    )
}
export default Display;