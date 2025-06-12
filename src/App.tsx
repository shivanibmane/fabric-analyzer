import { Route, Routes } from "react-router"
import Home from "./components/Home/Home"
import MainLayout from "./components/MainLayout"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="/configaration" element={<div>Configaration</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />

        </Route>
      </Routes>
    </>
  )
}

export default App