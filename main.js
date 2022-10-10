let marmid ={
    bulochka:["longer","big","mini"],
   souslar: ["mayonez","sezar","ketchup","bbq","chili",],
   ovoshi : ["salat list","pomidor","ayzberk",],
   konserva:["salyonni bodring"],
   sutlimaxsulot:["sir","sirparmezan"],
   polfabrikat:["katlet","rings","chikken nagets","chikken balls"],
   kartoshkalar:["fri macCain","Amsterdam","derevenski"],
   qoshimcha:["sir","katlet"]
   
}
let open_les_ailes=true
let date =21;
if(date>22 ){
    open_les_ailes=false
}
 let les_ailes=(time,work)=>{
    return new Promise((open,close)=>{
        if(open_les_ailes){
            setTimeout(()=>{
                open(work())
            },time)
        }else{close(console.log("sorry we are closed."))
    }
    })
 }
les_ailes(2000, ()=>console.log(`${marmid.bulochka[0]}  bulochka kesildi`))
        .then(()=>{
            return les_ailes(2000,()=>console.log(`${marmid.souslar[2]} sous surtiladi`))
        })
        .then(()=>{
            return les_ailes(2000,()=>console.log(`${marmid.souslar[0]} sous surtiladi`))
        })
        .then(()=>{
            return  les_ailes(2000,()=>console.log(`${marmid.ovoshi[0]} qoyiladi`))
        })
        .then(()=>{
            return  les_ailes(2000,()=>console.log(`${marmid.ovoshi[1]} qoyiladi`))
        })
        .then(()=>{
            return les_ailes(2000,()=>console.log(`${marmid.polfabrikat[1]}  qoyiladi`))
        })
        .then(()=>{
            return les_ailes(1000,()=>console.log("orab bervoramiz"))
        })
        .then(()=>{
            return les_ailes(6000,()=>console.log("klent xursand"))
        })
        .catch(()=>{
            console.log("yopilib bolganmiz");
        })


