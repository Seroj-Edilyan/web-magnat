import style from "../component/cssComponent/Contacthead.module.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useEffect, useState } from "react"
import { postData } from "./request/Request"



export const Registrthead = () => {
    const [name,setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [phone,setPhone] = useState("");
    const [loading,setLoading] = useState(false);
    const [loading1,setLoading1] = useState(false)
    
    const data = {
        name,
        lastname,
        phone,
    }
    
    return(
        <div className={style.div}>
           {loading && <h4>Ձեր հարցումը կատարվւմ է asdasd․․․</h4>}{loading1 && <h3>Դուք հաջողությամբ գրանցվել եք, մեր աշխատակիցները շուտով կկապնվեն Ձեզ հետ</h3>}
         <h2 className={style.h2}>Գրանցվել</h2>
         <input type="text" placeholder="Անուն" className={style.inp} value={name} onChange={(e) => setName(e.target.value)}/>
         <input type="text" placeholder="Ազգանուն" className={style.inp} value={lastname} onChange={(e) => setLastname(e.target.value)}/>
         <PhoneInput country={'am'} className={style.phoneinp} value={phone} onChange={(phone) => setPhone(phone)}/>
         <button className={style.btn} disabled={!name || !lastname || !phone} onClick={()=>postData(data,setLoading,setLoading1)}>Գրանցում</button>
        </div>
    )
}