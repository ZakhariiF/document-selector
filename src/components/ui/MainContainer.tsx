import { FC } from "react"
import { IChildren } from "types"

const MainContainer: FC<IChildren> = ({ children }) => {
  return (
    <main className="flex justify-center items-center mx-auto p-4">
      {children}
    </main>
  )
}

export default MainContainer
