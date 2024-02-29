/* eslint-disable react/prop-types */
export function FormHeader({title, info}){
    return(
        <div>
            <h1 className="form__title">{title}</h1>
          <p className="form__desc">
            {info}
          </p>
        </div>
    )
}