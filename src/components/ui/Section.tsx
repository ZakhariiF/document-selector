import { FC } from "react"
import { IChildren } from "types"

const Section: FC<IChildren> = ({ children }) => {
  return (
    <section className="flex flex-col gap-3 bg-white border border-gray-300 rounded-lg w-[500px] p-4">
      {children}
    </section>
  )
}

export default Section
