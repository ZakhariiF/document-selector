import { FC } from "react"
import { ArrowLeftIcon, CheckIcon, CrossIcon } from "components/icons"
import { Button, Search, Section, Title } from "components/ui"
import { INestedDocument } from "types"

interface ISelectedView {
  docs: INestedDocument[]
  onUnselect: (documentId: string) => void
  onSearch: (term: string) => void
}

const SelectedView: FC<ISelectedView> = ({ docs, onUnselect, onSearch }) => {
  return (
    <Section>
      <Title>Selected Documents</Title>

      <Search onSearch={onSearch} />

      {docs.length > 0 ? (
        <ul className="flex flex-col gap-3 border border-green-500 rounded-lg p-2">
          {docs.map(({ id, title }) => (
            <li
              key={id}
              className="flex justify-between items-center gap-2 py-2 px-1.5"
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckIcon />

                {title}
              </div>

              <Button onClick={() => onUnselect(id)}>
                <CrossIcon />
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-6 text-center bg-gray-100 border border-gray-200 rounded-lg h-full p-10">
          <ArrowLeftIcon />

          <p className="text-xs font-semibold text-gray-500">
            Select documents from the left panel to have employees review them
            and provide a signature acknowledging review
          </p>
        </div>
      )}
    </Section>
  )
}

export default SelectedView
