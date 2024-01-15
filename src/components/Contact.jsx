import Display from "./small-components/Display";

function Contact(){
    return(
        <>
        <div className="section-4" id="contact">
          <div className="contact-form">
            {/* <img src="src/assets/ide-2.png" alt="" /> */}
            <form action="">
                <fieldset>
                    <legend>Contact me</legend>
                    <label>Name</label>
                    <input type="text" />
                    <label>E-mail</label>
                    <input type="email" />
                    <label>Name</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </fieldset>
            </form>
          </div>
        </div>
        </>
    )
}
export default Contact;