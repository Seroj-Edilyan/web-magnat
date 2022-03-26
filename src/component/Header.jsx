import style from "./cssComponent/Header.module.css"
import img from "./image/homePage.svg"

const Header = () => {
    return(
        <div className={style.div}>
         <div className={style.div2}>
             <h1 className={style.h1}>WEB MAGNAT</h1>
             <p className={style.p}>Web Magnat-ը վեբ կայքերի պատրաստման և ուսուցման կենտրոն է։ Մենք շուկայում ենք արդեն 4 տարի և ունենք փորձառու, շուկայի պահանջներին բավարարող առաջադեմ մասնագետներ, ովքեր յուրաքանչյուրին ցուցաբերում են անհատական մոտեցում:</p>
         </div>
         <div><img src={img} className={style.img}/></div>
        </div>
    )
}

export default Header;