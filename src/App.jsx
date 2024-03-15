import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Step1} from "./components/Step1"
import {Step2} from "./pages/Step2"
import {Step3 } from "./pages/Step3"
import { Step4 } from "./pages/Step4"
import { DataContext } from "./Hooks/GlobalContext"

function App() {

  return (
    <>
    <BrowserRouter>
    <DataContext>

      <Routes>
        <Route path="/" element={<Step1 />}></Route>
        <Route path="/step2" element={<Step2 />}></Route>
        <Route path="/step3" element={<Step3 />}></Route>
        <Route path="/step4" element={<Step4 />}></Route>
        <Route path="*" element={<Step1 />}></Route>
      </Routes>
    </DataContext>
    </BrowserRouter>

    </>
  )
}

export default App
