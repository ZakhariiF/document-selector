import { FC, Fragment, useState } from "react"
import clsx from "clsx"
import { ArrowRightIcon, ChevronDownIcon } from "components/icons"
import { Button } from "components/ui"
import { IDocument, INestedDocument } from "types"

interface IAccordion {
  data: IDocument[]
  onSelect: (nestedData: INestedDocument) => void
}

const Accordion: FC<IAccordion> = ({ data, onSelect }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="flex flex-col border border-orange-500 rounded-lg shadow-sm">
      {data.map((section, index) => (
        <Fragment key={section.id}>
          <div
            className={clsx(
              "flex justify-between items-center bg-gray-50 border border-gray-200 p-5 cursor-pointer",
              {
                "rounded-t-lg": index === 0,
                "rounded-b-lg": index === data.length - 1,
                "bg-gray-100": openIndex === index
              }
            )}
            onClick={() => toggleAccordion(index)}
          >
            <h2
              className={clsx("font-medium text-gray-600", {
                "text-gray-900": openIndex === index
              })}
            >
              {section.title}
            </h2>

            <ChevronDownIcon
              style={{ rotate: `${openIndex === index ? "180deg" : "0deg"}` }}
            />
          </div>

          {openIndex === index && (
            <div className="flex flex-col gap-2.5 p-2">
              {section.nestedDocuments.map((nestedDocument) => (
                <div
                  key={nestedDocument.id}
                  className="flex justify-between items-center gap-2 bg-white py-2 px-1.5"
                >
                  <h3 className="text-sm font-medium text-gray-900">
                    {nestedDocument.title}
                  </h3>

                  <Button onClick={() => onSelect(nestedDocument)}>
                    <ArrowRightIcon />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Accordion
