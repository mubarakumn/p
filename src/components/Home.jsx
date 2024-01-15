import Display from "./small-components/Display";
import img1 from "../assets/ide-1.png"

function Home(){
    return(
        <div className="section-1" id="home">
            <img className="home-img" src={img1} alt="coding-fact-img" />
            <div className="home-content">
                <Display heading={"Here I'm Mubarak"} p={"I'm a Frontend developer"}/>
            </div>
        </div>
    )
}
export default Home;