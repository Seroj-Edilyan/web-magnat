import style from "./cssComponent/Abouthead.module.css"
import img1 from "./image/coursphoto1.svg" 
import img2 from "./image/coursphoto2.svg" 
import img3 from "./image/coursphoto3.svg" 
import img4 from "./image/coursphoto4.svg" 



export const AboutHead = () => {


    return(
        <div className={style.div}>
           <div className={style.div1}>
            <div className={style.div3}><img src={img1} className={style.img1}/></div>
            <div className={style.div2}>
                <h2 className={style.h2}>Մեր մասին</h2>
                <p className={style.p}>Web Magnat-ը վեբ կայքերի պատրաստման և ուսուցման կենտրոն է։ Մենք շուկայոմ ենք արդեն 4 տարի և ունենք փորձառու, շուկայի պահանջներին բավարարող առաջադեմ մասնագետներ, ովքեր յուրաքանչյուրին ցուցաբերում են անհատական մոտեցում:</p>
                </div>
            <div><img src={img2} className={style.img2}/></div>
           </div>
           <div className={style.div5}>
              <div> <img src={img3}/></div>
              <div> <img src={img4}/></div>
           </div>
        </div>
    )
}