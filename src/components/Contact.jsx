import img1 from "../assets/ide-1.png"
import img2 from "../assets/ide-2.png"
function Contact(){
    return(
        <>
        <div className="section-4" id="contact">
          <img className="img1" src={img1} alt="" />
            <form className="contact-form" action="post">
                <h2>Contact me</h2>
                <div className="input-inline">  
                 <div>
                  <label>Firstname <span>*</span></label>
                  <input type="text" required/>
                 </div>
                 <div>
                  <label>Surname  (Optional)</label>
                  <input type="text" />
                   </div>
                </div>
                  <label>Phone no
                  . (Optional)</label>
                <div > 
                  <input type="text" />
                </div>
                <label>E-mail <span>*</span></label>
                <div >
                  <input type="email" required />
                </div>
                <label htmlFor="textarea">Message <span>*</span></label>
                <div>
                   <textarea name="" id="" cols="30" rows="10" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            <img className="img2" src={img2} alt="" />
          </div>
        </>
    )
}
export default Contact;