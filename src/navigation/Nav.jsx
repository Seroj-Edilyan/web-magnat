import { Link } from "react-router-dom"
import style from "./style/Nav.module.css"
import image from "../images/logo.svg"

export const Nav = () => {
    return(
        <div className={style.div}>
            <div className={style.logo}><Link to="/"><img src={image}/></Link></div>
            <div className={style.divlink}><Link to="about" className={style.link}> Մեր Մասին </Link></div>
            <div className={style.cours}><Link to="cours" className={style.link}> Դասընթացներ <div className={style.new}>new</div> </Link></div>
            <div className={style.divlink}><Link to="contact" className={style.link}> Հետադարձ Կապ </Link></div>
            <div className={style.divreg}><div className={style.divreg2}><Link to="registr" className={style.reg}> Գրանցում </Link></div></div>
        </div>
    )
}