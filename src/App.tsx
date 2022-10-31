import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
