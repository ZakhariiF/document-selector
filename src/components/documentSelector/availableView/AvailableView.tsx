import { FC, useEffect, useMemo, useState } from "react"
import { extractFilterOptions } from "utils/extractFilterOptions"
import { getSelectedOptions } from "utils/getSelectedOptions"
import { calcNestedDocs } from "utils/calcNestedDocs"
import {
  Accordion,
  Badge,
  Dropdown,
  Search,
  Section,
  Subtitle,
  Title,
  Toggle
} from "components/ui"
import { IDocument, INestedDocument, IFilterItem } from "types"

interface IAvailableView {
  docs: IDocument[]
  onSelect: (document: INestedDocument) => void
  onSelectAll: (documents: IDocument[]) => void
  onUnselectAll: () => void
  onSearch: (term: string) => void
}

const AvailableView: FC<IAvailableView> = ({
  docs,
  onSelect,
  onSearch,
  onSelectAll,
  onUnselectAll
}) => {
  const [filters, setFilters] = useState<IFilterItem[]>([])

  useEffect(() => {
    const filterOptions = extractFilterOptions(docs)

    const filterList = [
      {
        filterKey: "jobTemplate",
        filterName: "Job Templates",
        options: filterOptions.jobTemplate,
        selectedOptions: []
      },
      {
        filterKey: "location",
        filterName: "Location",
        options: filterOptions.location,
        selectedOptions: []
      },
      {
        filterKey: "subsidiary",
        filterName: "Subsidiary",
        options: filterOptions.subsidiary,
        selectedOptions: []
      },
      {
        filterKey: "seniority",
        filterName: "Seniority",
        options: filterOptions.seniority,
        selectedOptions: []
      }
    ]

    setFilters(filterList)
  }, [docs])

  const handleFilterSelect = (key: string, option: string) => {
    setFilters((prevState) =>
      prevState.map((filter) => {
        if (filter.filterKey === key) {
          return {
            ...filter,
            selectedOptions: [...filter.selectedOptions, option]
          }
        }

        return filter
      })
    )
  }

  const handleFilterRemove = (option: string) => {
    setFilters((prevState) =>
      prevState.map((filter) => ({
        ...filter,
        selectedOptions: filter.selectedOptions.filter(
          (item) => item !== option
        )
      }))
    )
  }

  const filteredDocs = useMemo(() => {
    const documentMatchesFilters = (document: INestedDocument) => {
      return filters.every((filter) => {
        if (filter.selectedOptions.length === 0) {
          return true
        }

        return filter.selectedOptions.includes(
          String(document[filter.filterKey as keyof INestedDocument])
        )
      })
    }

    const filterNestedDocs = (nestedDocs: INestedDocument[]) => {
      return nestedDocs.filter(documentMatchesFilters)
    }

    return docs.reduce((accumulator, document) => {
      const filteredNestedDocs = filterNestedDocs(document.nestedDocuments)

      if (filteredNestedDocs.length > 0) {
        accumulator.push({
          ...document,
          nestedDocuments: filteredNestedDocs
        })
      }

      return accumulator
    }, [] as IDocument[])
  }, [docs, filters])

  const allSelectedOptions = getSelectedOptions(filters)
  const totalNestedDocuments = calcNestedDocs(filteredDocs)

  return (
    <Section>
      <Title>Available Documents</Title>

      <Search onSearch={onSearch} />

      <Subtitle>Filter by:</Subtitle>

      {filters.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {filters.map((filter, i) => (
            <Dropdown key={i} {...filter} onSelect={handleFilterSelect} />
          ))}
        </div>
      )}

      {allSelectedOptions.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border border-gray-200 rounded-lg p-2">
          {allSelectedOptions.map((option) => (
            <Badge
              key={option}
              text={option}
              onClick={() => handleFilterRemove(option)}
            />
          ))}
        </div>
      )}

      <div className="flex justify-between items-center gap-2 py-2 px-1.5">
        <Subtitle>{totalNestedDocuments} Available Documents</Subtitle>

        <Toggle
          text="Select All"
          onToggleOn={() => onSelectAll(filteredDocs)}
          onToggleOff={onUnselectAll}
        />
      </div>

      {filteredDocs.length > 0 && (
        <Accordion data={filteredDocs} onSelect={onSelect} />
      )}
    </Section>
  )
}

export default AvailableView
