import { FC } from "react"
import { MainContainer } from "components/ui"
import { DocumentSelector } from "components/documentSelector"

const App: FC = () => {
  return (
    <MainContainer>
      <DocumentSelector />
    </MainContainer>
  )
}

export default App
