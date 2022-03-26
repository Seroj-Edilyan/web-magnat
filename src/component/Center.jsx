import style from "./cssComponent/Center.module.css"

const Center = () => {
    return(
        <div className={style.div}>
            <h2 className={style.h2}>Դասընթացներ</h2>
            <div className={style.div2}>
             <div className={style.div3}>
                 <h3 className={style.h3}>JAVASCRIPT</h3>
                 <p className={style.p}>Նրանց, ովքեր ունեն HTML / CSS / բազային գիտելիքներ և ցանկանում են ձեռք բերել ամենաակտուալ ծրագրավորման լեզուներից մեկը</p>
             </div>
             <div className={style.div4}>
                 <h3 className={style.h3}>REACT JS</h3>
                 <p className={style.p}>Նրանց, ովքեր ունեն HTML / CSS / JavaScript բազային գիտելիքներ և ցանկանում են ձեռք բերել ավելի խորքային գիտելիքներ ու դառնալ ավելի պահանջված ու բարձր վարձատրվող մասնագետ։</p>
             </div>
             <div className={style.div3}>
                 <h3 className={style.h3}>React Native</h3>
                 <p className={style.p}>Նրանց, ովքեր ցանկանումեն ստեղծել մոբայլ հավելվածներ Ios և Android պլատֆոռմաների համար</p>
             </div>
             <div className={style.div4}>
                 <h3 className={style.h3}>PYTHON Django</h3>
                 <p className={style.p}>Նրանց, ովքեր ցանկանումեն դառնալ ակտուալ Backend ծրագրավորող</p>
             </div>
            </div>
        </div>
    )
}
export default Center;