import { useNavigate, useParams } from "react-router-dom"
import style from "./style.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
const Edit =()=>{

let[acc,setAcc] = useState("")
let[type,setType] = useState("")
let[bal,setBal] = useState("")

let navigate = useNavigate()
let obj = useParams()

let accData=(e)=>{
    setAcc(e.target.value)
}

let typeData=(e)=>{
    setType(e.target.value)
}

let balData=(e)=>{
    setBal(e.target.value)
}

useEffect(()=>{
    axios.get(`http://localhost:3000/bank/${obj.id}`)
    .then((r)=>{
        setAcc(r.data.eAcc)
        setType(r.data.aType)
        setBal(r.data.aBal)
    })
},[obj.id])

let formHandle =()=>{

    let payload = {
        eAcc:acc,
        aType:type,
        aBal:bal
    }

    axios.put(`http://localhost:3000/bank/${obj.id}`,payload)
    .then(()=>{
        console.log("data updated");
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

                <button onClick={formHandle}>Update</button>
            </form>
        </div>
    )
}

export default Edit