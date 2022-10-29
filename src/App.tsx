import Button1 from "./components/buttons/Button1"
import Button2 from "./components/buttons/Button2"
import ComponentCanvas from "./components/ComponentCanvas"

function App() {

  return (
    <div className="App">
      <ComponentCanvas component={<Button1 />} />
      <ComponentCanvas component={<Button2 />} />
    </div>
  )
}

export default App
