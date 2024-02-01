import axios from "axios"
import style from "./style.module.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const BankUser = ()=>{
    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/bank")
        .then((response)=>{setData(response.data)})
    })


    let del = (id)=>{
        axios.delete(`http://localhost:3000/bank/${id}`)
        .then(()=>{console.log("data deleted");})
        window.Object.assign("/users")
    }
    return(
        <div id={style.user}>
           {data.map((x)=>{
            return(
                   <table>
                        <tr>
                            <td>NAME</td>
                            <td>{x.eAcc}</td>
                        </tr>

                        <tr>
                            <td>ACC TYPE</td>
                            <td>{x.aType}</td>
                        </tr>

                        <tr>
                            <td>BALANCE</td>
                            <td>{x.aBal}</td>
                        </tr>

                        <tr>
                            <td><button><Link to ={`/edit/${x.id}`}>EDIT</Link></button></td>
                            <td><button onClick={()=>{del(x.id)}}>DELETE</button></td>
                        </tr>

                   </table>

            )
           })} 
        </div>
    )
}

export default BankUser