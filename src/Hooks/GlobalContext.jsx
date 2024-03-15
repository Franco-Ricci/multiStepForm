import { useState } from "react"
import { createContext } from "react"

export const GlobalContext = createContext()
// eslint-disable-next-line react/prop-types
export function DataContext({ children }){


    const [formValues, setFormValues] = useState({name: "", email: "", phone:""})
    const [isChecked, setIsChecked] = useState(false);

      const [noSelected, setNoSelected] = useState(false);
    
      const [optionSelected, setOptionSelected] = useState(null);
      const [selectedPlan, setSelectedPlan] = useState([]);

      const [pickedAdd, setPickedAdd] = useState([])
      const [errorText, setErrorText] = useState(false)
    

    return(
        <GlobalContext.Provider value={{formValues,setFormValues, isChecked, setIsChecked, noSelected, setNoSelected, optionSelected,setOptionSelected,selectedPlan,setSelectedPlan, pickedAdd, setPickedAdd, errorText, setErrorText}}>
            {children}
        </GlobalContext.Provider>
    )
}