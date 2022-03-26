
export const postData = (data,x,y) => {
    x(true)
    fetch("https://back.webmagnat.am/api/send-contact?fbclid=IwAR1y4w6l7b5Y9f6r0MBMyOCK4LoMqvvKysiDqIXVksfBHNaT0oMsh6hl7q4",{
        method:"POST",
        mode:"cors",
        cache: "no-cache",
        credentials:"same-origin",
        headers: {
            "Content-Type":"application-json",
        },
        body: JSON.stringify(data),
        referrerPolicy: "no-referrer",

    }).then((data)=>{
        if(data.status == false){
           y(true)
        }
    }).finally(() => x(false));
}
// fetch(
//     "https://back.webmagnat.am/api/send-contact?fbclid=IwAR1y4w6l7b5Y9f6r0MBMyOCK4LoMqvvKysiDqIXVksfBHNaT0oMsh6hl7q4",
//     {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify(data),
//     }
//   );