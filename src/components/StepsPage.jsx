import StepsDesktop from "/images/bg-sidebar-desktop.svg";
import StepsMobile from "/images/bg-sidebar-mobile.svg";

// eslint-disable-next-line react/prop-types
export function StepsPage({ stepNumber }) {
  const stepTitles = [
    {
      number: 1,
      title: "Step 1",
      info: "your info",
    },
    {
      number: 2,
      title: "Step 2",
      info: "Select plan",
    },
    {
      number: 3,
      title: "Step 3",
      info: "Add-ons",
    },
    {
      number: 4,
      title: "Step 4",
      info: "Summary",
    },
  ];

  return (
    <div>
      <div className="steps">
        <picture>
          <source media="(max-width:780px)" srcSet={StepsMobile} />
          <source media="(min-width:780px)" srcSet={StepsDesktop} />
          <img src={StepsDesktop} alt="sidebar steps" />
        </picture>

        <div className="steps__container">
          {stepTitles.map((data) => (
            <div className="steps__content" key={data.number}>
              <span
                className={
                  stepNumber === data.number
                    ? "steps__number--selected"
                    : "steps__number"
                }
              >
                {data.number}
              </span>

              <div className="steps__text--container">
                <p className="steps__title"> {data.title}</p>

                <p className="steps__desc"> {data.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
