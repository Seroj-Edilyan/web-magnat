import style from "./cssComponent/Footer.module.css"
import img from "./image/footer.page.svg"
import phone from "./image/phone.svg"
import map from "./image/map.svg"
import inst from "./image/instagram.svg"
import fb from "./image/fb.svg"
import linke from "./image/linkedin.svg"

const Footer = () => {
    return(
        <div>
            <div className={style.div}>
            <div className={style.div2}>
              <div className={style.div3}><div className={style.div4}><img src={phone} className={style.img}/><p className={style.p}>+374 94 04 00 74</p></div></div>
              <div className={style.div5}><div className={style.div4}><img src={map} className={style.img}/><p className={style.p}>Թումանյան 23</p></div></div>
              <div className={style.div6}><div className={style.div4}><img src={inst} className={style.img1}/><img src={fb} className={style.img1}/><img src={linke} className={style.img1}/></div></div>
            </div>
            <div>
                <img src={img}/>
            </div>
        </div>
        <div className={style.foot}><p className={style.p1}>Web Magnat / Web Development and Training Company LLC</p></div>
        </div>

    )
}
export default Footer;