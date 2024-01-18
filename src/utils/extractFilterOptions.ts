import { IDocument, INestedDocument } from "types"

interface FilterOptions {
  [key: string]: string[]
}

export function extractFilterOptions(documents: IDocument[]) {
  const filterOptions: FilterOptions = {}

  documents.forEach((document) => {
    document.nestedDocuments.forEach((nestedDocument) => {
      Object.keys(nestedDocument).forEach((key) => {
        const value = nestedDocument[key as keyof INestedDocument]

        if (value !== null && !filterOptions[key]) {
          filterOptions[key] = [value]
        }

        if (value !== null && !filterOptions[key].includes(value)) {
          filterOptions[key].push(value)
        }
      })
    })
  })

  return filterOptions
}
