import { ChangeEvent, FC } from "react"

interface IToggle {
  text: string
  onToggleOn: () => void
  onToggleOff: () => void
}

const Toggle: FC<IToggle> = ({ text, onToggleOn, onToggleOff }) => {
  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target

    if (checked) {
      onToggleOn()
    } else {
      onToggleOff()
    }
  }

  return (
    <label className="relative inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={handleToggle}
      />

      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500" />

      <span>{text}</span>
    </label>
  )
}

export default Toggle
