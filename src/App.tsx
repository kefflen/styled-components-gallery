import Button1 from "./components/buttons/Button1"
import ComponentCanvas from "./components/ComponentCanvas"

function App() {

  return (
    <div className="App">
      <ComponentCanvas component={<Button1 />} />
    </div>
  )
}

export default App
