import Button1 from "./components/buttons/Button1"
import Button2 from "./components/buttons/Button2"
import Button3 from "./components/buttons/Button3"
import Button4 from "./components/buttons/Button4"
import ComponentCanvas from "./components/ComponentCanvas"

function App() {

  return (
    <div className="App">
      <ComponentCanvas component={<Button1 />} />
      <ComponentCanvas component={<Button2 />} />
      <ComponentCanvas component={<Button3 />} />
      <ComponentCanvas component={<Button4 />} />
    </div>
  )
}

export default App
