import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormHeader } from "../components/FormHeader";
import { GlobalContext } from "../Hooks/GlobalContext";
import { useState } from "react";
import { StepsPage } from "../components/StepsPage";

export function Step2() {
  const {
    isChecked,
    setIsChecked,
    noSelected,
    setNoSelected,
    optionSelected,
    setOptionSelected,
    selectedPlan,
    setSelectedPlan,
  } = useContext(GlobalContext);

  const Data = [
    { option: "Arcade", PriceMonthly: 9, PriceYearly: 90 },
    { option: "Advanced", PriceMonthly: 12, PriceYearly: 120 },
    { option: "Pro", PriceMonthly: 15, PriceYearly: 150 },
  ];

  const [price, setPrice] = useState();

  function handleChange() {
    setIsChecked(!isChecked);
    updatePrice();
  }
  console.log(isChecked);
  console.log(price);

  //setting the updated price
  function updatePrice() {
    let newPrice = getPrices(optionSelected);

    setPrice(newPrice);
    setSelectedPlan({ name: optionSelected, price: newPrice });
  }

  useEffect(() => {
    updatePrice();
  }, [isChecked, optionSelected]);

  //function to check which option the user chose
  function getPrices(option) {
    const selectedOption = Data.find((item) => item.option === option);
    console.log(selectedOption);
    if (selectedOption) {
      return isChecked
        ? selectedOption.PriceYearly
        : selectedOption.PriceMonthly;
    }
  }

  function handleOptions(option) {
    setOptionSelected(option);
  }
  console.log(selectedPlan);
  console.log(optionSelected);

  //function to check if the user chose any of the options 
  function handleSubmit() {
    optionSelected ? setNoSelected(false) : setNoSelected(true);
  }
  return (
    <main className="form__container">
      <div className="form__content">
        <div className="form">
          <div className="form__options">
            <FormHeader
              title={"Select your plan"}
              info={"You have the option of monthly or yearly billing"}
            ></FormHeader>
            <div className="options__container">
              {Data.map((item) => (
                <div
                  key={item.option}
                  className={
                    optionSelected === item.option
                      ? "options__content options__content--clicked"
                      : "options__content"
                  }
                  onClick={() => handleOptions(item.option)}
                >
                  <img
                    className="options__logo"
                    src={`./images/icon-${item.option.toLowerCase()}.svg`}
                  />

                  <div className="options__text--container">
                    <p className="option__text">{item.option}</p>
                    <p className="option__price">
                      {isChecked
                        ? `$${item.PriceYearly}/yr`
                        : `$${item.PriceMonthly}/mo`}
                    </p>
                    {isChecked && (
                      <p className="checked__text">2 months free</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              {noSelected && optionSelected === null ? (
                <p className="text__error">Must select one plan</p>
              ) : (
                ""
              )}
            </div>
            <div className="option__switch">
              <p className="text__switch">Monthly</p>
              <input
                type="checkbox"
                className="switch__checkbox"
                onChange={handleChange}
                checked={isChecked}
              />
              <p className="text__switch">Yearly</p>
            </div>

            <div className="btn__container">
              <Link to="/" className="form__back">Go Back</Link>
              <Link
                className="form__btn"
                onClick={handleSubmit}
                to={optionSelected && "/step3"}
              >
                Next Step
              </Link>
            </div>
          </div>
        </div>
      </div>
      <StepsPage stepNumber={2}></StepsPage>
    </main>
  );
}
