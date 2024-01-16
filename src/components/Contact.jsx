import Display from "./small-components/Display";

function Contact(){
    return(
        <>
        <div className="section-4" id="contact">
          <img src="src/assets/ide-1.png" alt="" />
            <form className="contact-form" action="">
                <h2>Contact me</h2>
                  <label>Firstname <span>*</span></label>
                <div className="input-field">  
                  <input type="text" />
                </div>
                   <label>Surname</label>
                <div className="input-field">  
                  <input type="text" />
                </div>
                  <label>Phone no. (Optional)</label>
                <div className="input-field"> 
                  <input type="text" />
                </div>
                <label>E-mail <span>*</span></label>
                <div className="input-field">
                  <input type="email" />
                </div>
                <label htmlFor="textarea">message</label>
                <div className="input-field">
                   <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
          </div>
        </>
    )
}
export default Contact;