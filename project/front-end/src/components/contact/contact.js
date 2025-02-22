import "./contact.css"
function Contact(){
    return(
        <div className="contact-section">
            <div className="contact-image">
                <div className="contact-information">
                    <img src="/baliqcontact.webp" alt="contact logo"/>
                <h1>Contact Information</h1>
                <p>Say something start a live chat!</p>
              
                {/* <div className="information">
                   
                </div> */}
                </div>
                
            </div>
            <div className="conatct-form">
            <form>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" placeholder="Enter your first name"/>
    
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" placeholder="Doe" />

    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email"/>

    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" placeholder="+1 012 3456 789"/>

    <label>Select Subject?</label>
    <div class="radio-group">
        <input type="radio" name="subject" id="general1" />
        <label for="general1">General Inquiry</label>

        <input type="radio" name="subject" id="general2"/>
        <label for="general2">General Inquiry</label>

        <input type="radio" name="subject" id="general3"/>
        <label for="general3">General Inquiry</label>

        <input type="radio" name="subject" id="general4"/>
        <label for="general4">General Inquiry</label>
    </div>

    <label for="message">Message</label>
    <textarea id="message" placeholder="Write your message.."></textarea>

    <button type="submit">Send Message</button>
</form>
                

            </div>
        </div>
    )
}
export default Contact