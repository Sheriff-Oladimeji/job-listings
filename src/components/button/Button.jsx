/* eslint-disable react/prop-types */
import "./Button.css"

const Button = ({value, changeValue}) => {
  return (
      <button onClick={changeValue}>{value}</button>
  )
}

export default Button