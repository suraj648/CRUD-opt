import style from "./style.module.css"
import { Link } from "react-router-dom"

const Home = ()=>{
    return(
        <div id={style.nav}>
            <Link to ="/">BankDetail</Link>
            <Link to ="/users">BankUser</Link>
        </div>
    )
}

export default Home