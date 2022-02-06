import React, { useState} from "react";
import {Link} from "react-router-dom";
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import {db} from "./firebase.config";
import { v4 as uuidv4 } from 'uuid'
import {toast} from "react-toastify";

const Contact = () => {

   const [formData, setFormData]= useState({
       name:'',
       email:'',
       subject:'',
       message:'',
       timestamp: '',
   })

     const {name, email, subject, message} = formData
    const onSubmit =  async (e) => {
       e.preventDefault()
       // console.log({...formData})
        try{
            let idUnique = `${formData.name
                .replace(/,?\s+/g, '-')
                .toLowerCase()}-${uuidv4()}`

           const formDataCopy = {...formData}
            formDataCopy.timestamp = serverTimestamp()
           const contactRef = doc(db, 'contacts', idUnique)
            await setDoc(contactRef, formDataCopy )
            toast.success("Contact saved Successfully")

        }
        catch (error) {
           console.log({error})
            toast.error("Unable to save contact")

        }


    }
  const onChange = (e) => {
       setFormData((prevState) => ({
           ...prevState,
           [e.target.id]: e.target.value,
       }))

    }

       return(
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Contact Us</h2>
                            <ol>
                                <li><Link className="change" to="Home.js">Home</Link></li>
                                <li>Contact</li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-6">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-box">
                                            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/48/000000/external-map-maps-locations-those-icons-lineal-those-icons-1.png" alt=""/>
                                            <h3>Our Address</h3>
                                            <p>19 Oguntona ogundeji street Lagos State</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <img src="https://img.icons8.com/ios/50/000000/mail.png" alt=""/>
                                            <h3>Email Us</h3>
                                            <p>abgario@yahoo.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-phone-call-advertising-kiranshastry-lineal-kiranshastry.png" alt=""/>
                                            <h3>Call Us</h3>
                                            <p>+234 9064 8192 90</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <form action=""  className="php-email-form" onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text"
                                                   value={name}
                                                   onChange={onChange}
                                                   name="name"
                                                   className="form-control"
                                                   id="name"
                                                   placeholder="Your Name"
                                                   required/>
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email"
                                                   value={email}
                                                   onChange={onChange}
                                                   className="form-control"
                                                   name="email"
                                                   id="email"
                                                   placeholder="Your Email" required/>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text"
                                               value={subject}
                                               onChange={onChange}
                                               className="form-control"
                                               name="subject"
                                               id="subject"
                                               placeholder="Subject" required/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control"
                                                  value={message}
                                                  onChange={onChange}
                                                  name="message"
                                                  rows="5"
                                                  id="message"
                                                  placeholder="Message"
                                                  required>
                                        </textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
            </main>
        );
}
export default Contact;
