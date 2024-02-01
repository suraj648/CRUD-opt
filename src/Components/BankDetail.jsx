import { useState } from "react"
import style from "./style.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const BankDetail = ()=>{
let[acc,setAcc] = useState("")
let[type,setType] = useState("")
let[bal,setBal] = useState("")

let navigate = useNavigate()

let accData=(e)=>{
    setAcc(e.target.value)
}

let typeData=(e)=>{
    setType(e.target.value)
}

let balData=(e)=>{
    setBal(e.target.value)
}

let formHandle = ()=>{
    let payload = {
        eAcc:acc,
        aType:type,
        aBal:bal
    }
   axios.post("http://localhost:3000/bank",payload)
   .then(()=>{
    console.log("data sent");
   })

   navigate("/users")
}



    return(
        <div id={style.body}>
            <form action="">
                <label htmlFor="">Acc-Name</label>
                <input type="text" value={acc} onChange={accData} />

                <label htmlFor="">Acc-Type</label>
                <input type="text" value={type} onChange={typeData} />

                <label htmlFor="">Balance</label>
                <input type="text" value={bal} onChange={balData} />

                <button onClick={formHandle}>SUBMIT</button>
            </form>
        </div>
    )
}

export default BankDetail