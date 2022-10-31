import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./pages/Home";
import InputPage from "./pages/InputsPage";


export default function Routes() {

  return (
    <ReactRoutes>
      <Route index element={<Home />} />
      <Route path="/inputs" element={<InputPage />} />
    </ReactRoutes>
  )
}
