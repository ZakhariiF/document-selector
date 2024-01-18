import { FC, useEffect, useState } from "react"
import { AvailableView, SelectedView } from "components/documentSelector"
import { IDocument, INestedDocument } from "types"
import { documents } from "data"

const DocumentSelector: FC = () => {
  const [docs, setDocs] = useState<IDocument[]>([])
  const [selectedDocs, setSelectedDocs] = useState<INestedDocument[]>([])
  const [filteredDocs, setFilteredDocs] = useState<IDocument[]>([])
  const [filteredSelectedDocs, setFilteredSelectedDocs] = useState<
    INestedDocument[]
  >([])

  useEffect(() => {
    setDocs(documents)
  }, [])

  useEffect(() => {
    setFilteredDocs(docs)
  }, [docs])

  useEffect(() => {
    setFilteredSelectedDocs(selectedDocs)
  }, [selectedDocs])

  const selectDocument = (document: INestedDocument) => {
    const isDocumentSelected = selectedDocs.some(
      (doc) => doc.id === document.id
    )

    if (!isDocumentSelected) {
      setSelectedDocs((prevState) => [...prevState, document])
    }
  }

  const unselectDocument = (documentId: string) => {
    setSelectedDocs((prevState) =>
      prevState.filter((doc) => doc.id !== documentId)
    )
  }

  const searchDocument = (term: string) => {
    const filteredDocs = docs.filter((doc) =>
      doc.title.toLowerCase().includes(term.toLowerCase())
    )

    setFilteredDocs(filteredDocs)
  }

  const searchSelectedDocument = (term: string) => {
    const filteredDocs = selectedDocs.filter((doc) =>
      doc.title.toLowerCase().includes(term.toLowerCase())
    )

    setFilteredSelectedDocs(filteredDocs)
  }

  const selectAllDocuments = (documents: IDocument[]) => {
    const allNestedDocs = documents.reduce<INestedDocument[]>((acc, doc) => {
      const nestedDocs = doc.nestedDocuments
        .filter((nestedDoc) => {
          return !selectedDocs.some(
            (selectedDoc) => selectedDoc.id === nestedDoc.id
          )
        })
        .map((nestedDoc) => ({
          ...nestedDoc,
          parentId: doc.id
        }))

      return [...acc, ...nestedDocs]
    }, [])

    setSelectedDocs((prevState) => [...prevState, ...allNestedDocs])
  }

  const unSelectAllDocuments = () => {
    setSelectedDocs([])
  }

  return (
    <div className="flex gap-6">
      <AvailableView
        docs={filteredDocs}
        onSelect={selectDocument}
        onSelectAll={selectAllDocuments}
        onUnselectAll={unSelectAllDocuments}
        onSearch={searchDocument}
      />
      <SelectedView
        docs={filteredSelectedDocs}
        onUnselect={unselectDocument}
        onSearch={searchSelectedDocument}
      />
    </div>
  )
}

export default DocumentSelector
