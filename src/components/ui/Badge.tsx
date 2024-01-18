import { FC } from "react"
import { CrossIcon } from "components/icons"

interface IBadge {
  text: string
  onClick: () => void
}

const Badge: FC<IBadge> = ({ text, onClick }) => {
  return (
    <span className="inline-flex items-center gap-1 py-0.5 px-3 rounded-md bg-blue-100 text-blue-500 text-sm font-medium">
      {text}

      <button
        type="button"
        className="inline-flex items-center cursor-pointer"
        onClick={onClick}
      >
        <CrossIcon width={14} height={14} fill="#3b82f6" />

        <span className="sr-only">Remove Badge</span>
      </button>
    </span>
  )
}

export default Badge
