import { ButtonHTMLAttributes, FC } from "react"

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button
      className="inline-flex justify-center items-center bg-white border border-gray-200 rounded p-1"
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
