export interface IDocument {
  id: string
  title: string
  nestedDocuments: INestedDocument[]
}

export interface INestedDocument {
  id: string
  title: string
  jobTemplate: string | null
  location: string | null
  seniority: string | null
  subsidiary: string | null
}
