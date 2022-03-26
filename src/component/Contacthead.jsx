import style from "../component/cssComponent/Contacthead.module.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react"

export const Contacthead = () => {
    const [name,setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [phone,setPhone] = useState("");
    return(
        <div className={style.div}>
         <h2 className={style.h2}>Հետադարձ կապ</h2>
         <input type="text" placeholder="Անուն" className={style.inp} value={name} onChange={(e) => setName(e.target.value)}/>
         <input type="text" placeholder="Ազգանուն" className={style.inp} value={lastname} onChange={(e) => setLastname(e.target.value)}/>
         <PhoneInput country={'am'} className={style.phoneinp} value={phone} onChange={(phone) => setPhone(phone)}/>
         <button className={style.btn} disabled={!name || !lastname || !phone}>Գրանցում</button>
        </div>
    )
}