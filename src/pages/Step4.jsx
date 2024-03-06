import { Link } from "react-router-dom";
import { FormHeader } from "../components/FormHeader";
import { GlobalContext } from "../Hooks/GlobalContext";
import { useContext,useState} from "react";
import { useEffect } from "react";
import { StepsPage } from "../components/StepsPage";

export function Step4() {

  const {pickedAdd,selectedPlan, isChecked} = useContext(GlobalContext)

  const [total, setTotal] = useState()
  console.log(pickedAdd)

  console.log(selectedPlan)
  useEffect(() => {
    totalPrice()
  }, [pickedAdd,selectedPlan,isChecked])
  
  function totalPrice(){
  let totalPrice = 0;

  // Add the price of the selected plan
  totalPrice += parseInt(selectedPlan.price);

  // Add the price of each picked add-on
  pickedAdd.forEach(addon => {
    totalPrice += isChecked ? parseInt(addon.priceYearly) : parseInt(addon.priceMonthly);
  });

  // Update the total state
  setTotal(totalPrice);

  }
  
  return (
    <main className="form__container">
      <div className="form__content">
        <div className="form">

     

        <form className="finishing__form">
        <FormHeader title={"Finishing up"} info={"Double-check everything looks OK before confirming."}>

</FormHeader>

          <div className="finishing__container">
            
              <div className="finishing__content">
                <div className="finishing__changes">
                  <div className="finishing__desc">
                    <p className="finishing__text">{selectedPlan.name} (Monthly)</p>
                    <Link to="/step2">
                    <p className="finishing__textChange">Change</p>
                   </Link> 
                  
                  </div>

                  <p className="finishing__price--bold">${selectedPlan.price}{selectedPlan.price < 90 ? "/mo" : "/yr"}</p>
                </div>
              </div>

              {pickedAdd.map((data,index) =>
               
         
              <div className="finishing__content" key={index}>
                <p className="finishing__feature">{data.name}</p>
                <p className="finishing__price">${isChecked ? data.priceYearly +"/yr" : data.priceMonthly + "/mo"}</p>
              </div>
                    )}
            </div>
          
          <div className="total__container">
            <p className="total__text">Total (per month)</p>
            <p className="total__price">${isChecked ? total + "/yr" : + total + "/mo"}</p>
          </div>
          
        <div className="btn__container">
            <Link to="/step3">Go Back</Link>
            <Link className="form__btn4" >Next Step</Link>
        
          </div>
        </form>
        </div>
      </div>
      <StepsPage stepNumber={3}>

</StepsPage>
    </main>
  );
}
