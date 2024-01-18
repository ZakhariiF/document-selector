import { IDocument } from "types"

export function calcNestedDocs(documents: IDocument[]) {
  return documents.reduce(
    (total, document) => total + document.nestedDocuments.length,
    0
  )
}
