import Lists from "./comp/Lists";
import styled from "styled-components";

const RootWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {

  return (
    <RootWrapper>
      <span>hi</span>
      <div>
        <Lists />
      </div>
    </RootWrapper>
    )
}
 

export default App;
