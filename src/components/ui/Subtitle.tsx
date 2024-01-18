import { FC } from "react"
import { IChildren } from "types"

const Subtitle: FC<IChildren> = ({ children }) => {
  return <h6 className="text-sm font-medium">{children}</h6>
}

export default Subtitle
