import {  useState } from "react";
import{ useNavigate } from "react-router-dom"
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
export function UseForm(){

    const{formValues,setFormValues} = useContext(GlobalContext)

    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)
  
    let navigate = useNavigate()

    function handleChange(e){
      console.log(e.target.value)
      console.log(formValues.name)
    
  
     
        setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
      })
    }
  
    
    console.log(formValues.name)
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
        localStorage.setItem("data", JSON.stringify(formValues))
        navigate("/step2")
  
      }
    }
    return(handleChange,handleSubmit,errorName,formValues
    )
}