import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import BankDetail from "./Components/BankDetail"
import BankUser from "./Components/BankUser"
import Edit from "./Components/Edit"

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Home/>
                <Routes>
                    <Route element={<BankDetail/>} path="/"/>
                    <Route element={<BankUser/>} path="/users"/>
                    <Route element={<Edit/>} path="/edit/:id"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App