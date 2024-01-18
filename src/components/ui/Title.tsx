import { FC } from "react"
import { IChildren } from "types"

const Title: FC<IChildren> = ({ children }) => {
  return <h5 className="text-base font-medium">{children}</h5>
}

export default Title
