export function StepsPage({stepNumber}){

    const stepTitles = [{
        number:1,
        title: "Step 1",
        info: "your info"
    },{
        number:2,
        title: "Step 2",
        info: "Select plan"
    },{
        number:3,
        title: "Step 3",
        info: "Add-ons"
    },{
        number:4,
        title: "Step 4",
        info: "Summary"
    }]

    return(
        <div className="steps">
        <img src="/images/bg-sidebar-desktop.svg" alt="asd" />
        <div className="steps__container">

            {stepTitles.map((data) =>
            
          
          <div className="steps__content" key={data.number}>
            <span className={stepNumber === data.number ? "steps__number--selected" : "steps__number"}>{data.number}</span>

            <div className="steps__text--container">
              <p className="steps__title"> {data.title}</p>

              <p className="steps__desc"> {data.info}</p>
            </div>
          </div>
            )}
 
        </div>
      </div>
    )
}