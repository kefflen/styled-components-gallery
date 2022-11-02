import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"

library.add(
  faPen,
  faXmark,
  faCheck
)

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
