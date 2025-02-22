import "./contact.css"
import { DataContext } from "../../data"
import { useState, useEffect,useContext } from "react";

function Contact(){
    // const [firstname,setfirstname]=useState("")
    // const [lastname,setlastname]=useState("")
    // const [email,setemail]=useState("")
    // const [number,setnumber]=useState("")
    // const [message,setmessage]=useState("")
    // const [subject,setsubject]=useState("")
    const[alarm,setAlarm]=useState("")
    const { addContact } = useContext(DataContext)
    const[tekshir,settekshir]=useState(false)
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Number: "",
        QuestionType: "",
        Message:""
      });
      const changeHandler = (e) => {
        const { name, value } = e.target;
        // setfirstname(e.target.value)
        // setemail(e.target.value)
        // setlastname(e.target.value)
        // setmessage(e.target.value)
        // setnumber(e.target.value)
        // setsubject(e.target.value)
        setFormData((prev) => ({
          ...prev,
          [name]: value,
         
        }));
      }
     const handleSubmit=(e)=>{
        e.preventDefault()
        
    if (!formData.FirstName || !formData.LastName ||!formData.Email||!formData.Message||!formData.Number ||!formData.QuestionType) {
      setAlarm("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    console.log("Yangi buyurtma:", formData);
    addContact(formData)
    settekshir(true);
    setAlarm("Murojat qabul qilindi!");
//     const newOrder = { ...formData,FirstName:firstname,
//         LastName:lastname,
//         Email:email,
//         Number:number,
//         QuestionType:subject,
//         Message:message, };
//     console.log("yangi buyurtma", newOrder);
//     addData(newOrder);
    
//   };
     }
  useEffect(() => {
    if (tekshir) {
      const timer = setTimeout(() => {
        setAlarm("");
        settekshir(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [tekshir]);

     
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
            <form onSubmit={handleSubmit}>
    <label for="first-name">First Name</label>
    <input type="text" name="FirstName" value={formData.FirstName} onChange={changeHandler} id="first-name" placeholder="Enter your first name"/>
    
    <label for="last-name">Last Name</label>
    <input type="text" name="LastName" value={formData.LastName}onChange={changeHandler} id="last-name" placeholder="Doe" />

    <label for="email">Email</label>
    <input type="email" name="Email"  value={formData.Email} onChange={changeHandler} id="email" placeholder="Enter your email"/>

    <label for="phone">Phone Number</label>
    <input type="tel" name="Number" value={formData.Number} onChange={changeHandler} id="phone" placeholder="+1 012 3456 789"/>

    <label>Select Subject?</label>
    <div class="radio-group">
        <input type="radio" name="QuestionType" value="buyurtma yetib kelishda " checked={formData.QuestionType === "buyurtma yetib kelishda"} onChange={changeHandler} id="general1" />
        <label for="general1">buyurtma yetib kelishda </label>

        <input type="radio" name="QuestionType" value="zakaz qilishda" checked={formData.QuestionType === "zakaz qilishda"} onChange={changeHandler} id="general2"/>
        <label for="general2">zakaz qilishda</label>

        <input type="radio" name="QuestionType" value="hodimda"  checked={formData.QuestionType === "hodimda"} onChange={changeHandler} id="general3"/>
        <label for="general3">hodimda</label>

        <input type="radio" name="QuestionType" value="tizimda"  checked={formData.QuestionType === "tizimda"} onChange={changeHandler} id="general4"/>
        <label for="general4">tizimda</label>
    </div>

    <label for="message">Message</label>
    <textarea id="message" name="Message" value={formData.Message} onChange={changeHandler} placeholder="Write your message.."></textarea>

    <button type="submit">Send Message</button>
</form>
                
{alarm && <p className="alarm">{alarm}</p>}
            </div>
        </div>
    )
}
export default Contact