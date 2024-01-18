import { ChangeEvent, FC, FormEvent, useState } from "react"
import { GlassIcon } from "components/icons"

interface ISearch {
  onSearch: (searchQuery: string) => void
}

const Search: FC<ISearch> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setSearchQuery(value)
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSearch}>
      <label
        htmlFor="search"
        className="text-sm font-medium text-gray-900 mb-2 sr-only"
      >
        Search
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <GlassIcon width={20} height={20} />
        </div>

        <input
          type="text"
          id="search"
          placeholder="Search"
          autoComplete="off"
          className="block w-full text-sm text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg py-2 pe-4 ps-[46px] outline-0"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </form>
  )
}

export default Search
