import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormHeader } from "../components/FormHeader";
import { GlobalContext } from "../Hooks/GlobalContext";

export function Step3() {
  const { pickedAdd, setPickedAdd, errorText, setErrorText, isChecked } =
    useContext(GlobalContext);

    // function handleChange(itemSelected) {
    //   console.log(pickedAdd);
    //   if (pickedAdd.find(e => e.name === itemSelected.name)) {
    //     console.log(pickedAdd);
    //     setPickedAdd(pickedAdd.filter(value => value.name !== itemSelected.name));
    //     console.log(pickedAdd);
    //   } else {
    //     setPickedAdd([...pickedAdd, itemSelected]);
    //   }
    // }

    function handleChange(itemSelected) {
      console.log(itemSelected);
      console.log(pickedAdd);
      const isSelected = pickedAdd.some((item) => item.name === itemSelected.name);
      if (isSelected) {
        console.log(pickedAdd);
        setPickedAdd(pickedAdd.filter((value) => value.name !== itemSelected.name));
        console.log(pickedAdd);
      } else {
        setPickedAdd([...pickedAdd, itemSelected]);
        console.log(pickedAdd);
      }
    }
  let options = [
    {
      name: "Online Service",
      priceMonthly: 1,
      priceYearly: 10
    },
    {
      name: "Larger storage",
      priceMonthly: 2,
      priceYearly:20
    },
    {
      name: "Customizable",
      priceMonthly: 2,
      priceYearly:20
    },
  ];

  return (
    <main className="form__container">
      <div className="form__content">
        <div className="form">
          <FormHeader
            title="Picks add-ons"
            info={" Adds-ons help enhace your gaming experience"}
          ></FormHeader>
        </div>
        <div className="pickAdd__container">
          {options.map((option, index) => (
            <div className="pickAdd__content" key={index}>
              <input
                className="pickCheckbox"
                type="checkbox"
                checked={pickedAdd.some(item => item.name == option.name)}
                onChange={() => handleChange(option)}
              />
              <div className="pickText__container">
                <div className="pickText__text">
                  <p className="pickText__title">{option.name}</p>
                  <p className="pickText__desc">Access to multiplayer games</p>
                </div>
                <div>
                  <p className="pickText__price">{`+$${isChecked ? option.priceYearly +"/yr" : option.priceMonthly + "/mo"}`}</p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="pickAdd__content">
            <input
              className="pickCheckbox"
              type="checkbox"
              checked={pickedAdd.includes("LargerStorage")}
              onChange={() => handleChange("LargerStorage")}
            />
            <div className="pickText__container">
              <div className="pickText__text">
                <p className="pickText__title">Larger storage</p>
                <p className="pickText__desc">Extra 1TB of cloud save</p>
              </div>
              <p className="pickText__price">+$2/mo</p>
            </div>
          </div>

          <div className="pickAdd__content">
            <input
              className="pickCheckbox"
              type="checkbox"
              checked={pickedAdd.includes("Customizable")}
              onChange={() => handleChange("Customizable")}
            />
            <div className="pickText__container">
              <div className="pickText__text">
                <p className="pickText__title">Customizable Profile</p>
                <p className="pickText__desc">Custom theme on your profile</p>
              </div>
              <div>
                <p className="pickText__price">+$2/mo</p>
              </div>
            </div>
          </div> */}
          {errorText == true && pickedAdd.length == 0 && (
            <span className="text__error">Must select an option</span>
          )}

          <div className="btn__container">
            <Link to="/step2">Go Back</Link>
            <Link
              className="form__btn"
              onClick={() =>
                pickedAdd.length == 0 ? setErrorText(true) : setErrorText(false)
              }
              to={pickedAdd.length !== 0 ? "/step4" : "/step3"}
            >
              Next Step
            </Link>
          </div>
        </div>
      </div>
      <div className="steps">
        <img src="/images/bg-sidebar-desktop.svg" alt="asd" />
        <div className="steps__container">
          <div className="steps__content">
            <span className="steps__number">1</span>

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
            <span className="steps__number--selected">3</span>

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
