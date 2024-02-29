import { useState, useContext } from "react";
import{ useNavigate } from "react-router-dom"
import { FormHeader } from "./FormHeader";
import { GlobalContext } from "../Hooks/GlobalContext";

export function Step1() {

  let navigate = useNavigate()
  const {formValues, setFormValues} = useContext(GlobalContext)
  

  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)

  // useEffect(() => {
    
  //   let data = JSON.parse( localStorage.getItem("data", JSON))
   
  //   if(data){
  //     setFormValues(data)
  //   }

  // }, [])
  
  function handleChange(e){
    console.log(e.target.value)
    console.log(formValues.name)
  

   
      setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }


  function handleSubmit(e){
    e.preventDefault()
    const emailRegex = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(formValues.email))  setErrorEmail(false)
    else setErrorEmail(true);

    const nameRegex = /^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/
    if(nameRegex.test(formValues.name))  setErrorName(false)
    else setErrorName(true);

    if(formValues.phone == "" || formValues.phone.length < 5) setErrorPhone(true);
    else setErrorPhone(false);
    
    if(errorEmail == false && errorPhone == false && errorName == false){
      console.log("registro completo")

      navigate("/step2")

    }
  }
  return (
    <main className="form__container">
      <div className="form__content">
        <div className="form">
          
        <FormHeader
        title={"Personal Info"} info={" Please provide your name, email address, and phone number."}>

        </FormHeader>
         
          <form className="form__step" onSubmit={handleSubmit}>
            <label className="form__name" htmlFor="name">
              Name
            </label>

            <input
              className={errorName == false ? "input" : "input input__error"}
              id="name"
              type="text"
              name="name"
              value={formValues.name}
              placeholder="e.g. Stephen King"
              onChange={handleChange}
              required
            />
            {errorName && <p className="text__error">Invalid name please add a valid name</p>}
            <label className="form__email" htmlFor="email">
              Email Address
            </label>
            <input
              className={errorEmail == false ? "input" : "input input__error"}
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              placeholder="e.g. stephenking@lorem.com"
              onChange={handleChange}
              required
            />
              {errorEmail && (
              <p className="text__error">Invalid Email</p>
            )}

            <label className="form__phone" htmlFor="phone">
              Phone Number
            </label>
            <input
              className={errorPhone == false ? "input" : " input input__error"}
              id="phone"
              name="phone"
              type="number"
              value={formValues.phone}
              placeholder="e.g. +1 234 567 890"
              onChange={handleChange}
              required
            />
              {errorPhone && (
              <p className="text__error">phone number not valid</p>
            )}

            <div className="btn__container--step1">

         
            <button className="form__btn">Next Step</button>
            </div>
          </form>
        </div>
      </div>
      <div className="steps">
        <img src="/images/bg-sidebar-desktop.svg" alt="asd" />
        <div className="steps__container">
          <div className="steps__content">
            <span className="steps__number--selected">1</span>

            <div className="steps__text--container">
              <p className="steps__title"> Step 1</p>

              <p className="steps__desc"> Your info</p>
            </div>
          </div>
          <div className="steps__content">
            <span className="steps__number">2</span>

            <div className="steps__text--container">
              <p className="steps__title"> Step 2</p>

              <p className="steps__desc"> Select plan</p>
            </div>
          </div>
          <div className="steps__content">
            <span className="steps__number">3</span>

            <div className="steps__text--container">
              <p className="steps__title"> Step 3</p>

              <p className="steps__desc"> Add-ons</p>
            </div>
          </div>
          <div className="steps__content">
            <span className="steps__number">4</span>

            <div className="steps__text--container">
              <p className="steps__title"> Step 4</p>

              <p className="steps__desc">Summary</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
