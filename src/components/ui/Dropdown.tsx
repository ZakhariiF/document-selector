import { FC, useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "hooks/useOnClickOutside"
import { ChevronDownIcon } from "components/icons"
import { Search } from "components/ui"

interface IDropdown {
  filterKey: string
  filterName: string
  options: string[]
  selectedOptions: string[]
  onSelect: (key: string, option: string) => void
}

const Dropdown: FC<IDropdown> = ({
  filterKey,
  filterName,
  options,
  selectedOptions,
  onSelect
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentOptions, setCurrentOptions] = useState<string[]>([])

  useEffect(() => {
    setCurrentOptions(options)
  }, [options])

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleCloseMenu = () => setIsOpen(false)

  useOnClickOutside(dropdownRef, handleCloseMenu)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleSearch = (query: string) => {
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    )

    setCurrentOptions(filteredOptions)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        id="dropdownButton"
        data-dropdown-toggle="dropdownMenu"
        className="flex justify-between items-center gap-2.5 text-sm border border-gray-300 rounded-lg w-full py-2 px-2.5"
        onClick={toggleMenu}
      >
        {filterName}

        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div
          id="dropdownMenu"
          className="absolute top-full left-0 z-10 flex flex-col gap-1 bg-white w-full border border-gray-200 rounded-md shadow-md mt-2 p-4"
        >
          <Search onSearch={handleSearch} />

          <ul aria-labelledby="dropdownButton" className="flex flex-col gap-1">
            {currentOptions?.map((option, i) => {
              const isSelectedOption = selectedOptions.includes(option)

              return (
                <li
                  key={i}
                  className="text-sm font-medium py-2 px-1.5 cursor-pointer"
                  style={{
                    opacity: isSelectedOption ? 0.5 : 1,
                    pointerEvents: isSelectedOption ? "none" : "auto"
                  }}
                  onClick={() => onSelect(filterKey, option)}
                >
                  {option}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
