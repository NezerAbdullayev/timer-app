# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



1)  
let zaman= new Date()  —>  comp da olan tarixi gosterecekdir. new ile isledirik; zaman.getTime(),zaman.getFullYear(),..getDate(), ….getday() ve s. yaza bilirik(bunlar get ile olanlar)
zaman.toLocalString()—> 19:11:2023 verecekdir,time-li ise saat olacaq       Bunlar get ile baslayanlar idi indi ise set ile baslayanlara baxaq                                                     setDate(22),setMoth(2) ve s…  —> bu metodla ise biz zamani  deyise bilerik  
Qeyd: zaman.setHours(zaman.getHours()+2 )—> bu zaman hazirdaki saatin uzerine 2 saaat elave ederek guncelleyecekdir[dinamik olur bu zaman]
Qeyd:2   bu zamanin tipi objectdi biz onu .toString ile stringe cevre bilerik


2)

                                                                                                                                 numbers and saat
Number.parseInt(‘23px’ , 10 )->23    bunun ucun bir reqemle baslamalidir QEYD:10 say sistemini bildirir. qeyd etmeyede bilerik metodda .
Number.parseFloat(‘2.5rem’)—> 2.5    float reqemler ucun bun yaza bilerik 
Number.isNaN(20)—. false verecekdir .  ’20’ , ’20px’  yene false olacaqdir .  
infinity—> sonsuzluq
Number.isFinite(20.4)—> true    yalniz bildiyimiz reqemler  olmalidir. dirnaqsiz .
let number = 3.14159;  let roundedNumber = number.toFixed(2);  console.log(roundedNumber); // Çıktı: "3.14”  yuvarlanacaq reqemeqeder.
5%2 —> 1 . qalan operatoru             
ES21 de gelen   boyuk reqemleri bu cur tanimlaya bilerik misal  const diametr= 213_334_000_000  —>   bu buzaman konsola 2133334000000 kimi cixacaq 
ES20 -> BigInt() —> boyuk reqemlri saxlamaq ucun istifade edilir . misal 64bitlik API  .    bunun ucun o rreqemin sonuna 4..3232n —> n elave edilir.  
23727919n+ BigInt(15)—> bu cur etmek lazimdir . yeni nu ber typle ededle emel ede bilmer

                                                                                                                                  Date
const data=new Date( )—> hal  hazirdaki  comp d olan tarixi gosterecekdir .   const x=new Date()   x.getFullYear().getMonth() …  kimi ili ayi ve s ala bilerik.
Date()x.setFullYear(2037).getMonth(12) …   —> set ile ise  tarixleri deyisdirmek ucun istifade edirik

const now=new Date()
const local= navigator.language;  
const option={
  hour: 'numeric',
minute: ‘numeric’, hour:  ‘numeric’  ,day :    ‘numeric’   ve s...
} altda local ve ya avtomatik istediyimiz dili sece bilerik. ama local yazdigim daha avtomatikdi diye onu etmek lazimdir 
labelDate.textContent=new Intl.DateTimeFormat('ar-Sy’ve ya->local,option).format(now);  olkelere gore zaman ve tarixi almaq ucundur 
QEYD BU OPTION BIRAZ QELIZ MOVZUYA BENZEYIR)) BUNUNLA  BIR COX SEY ETMEK OLAR BELE BAXIRAMKI😅

const formatedMov = new Intl.NumberFormat(acc.locale,{
      style:'currency',
      currency: acc.currency
    }).format(mov);         —>  burda pul kursunu deyismek ucun istifade edirik 

const malzemeler=[havuc ,gobelek]
const pizzaTimer= setTimeout((ing1,ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`)
,3000,ve ya malzemeler[0],malzemeler[1] ve ya ...malzemeler) —>   bu zaman deyer girilmediyi ucun asagisindaki deyerleri qebul edecekdir.
if(malzemeler.includes(havuc))clearTimeout (pizzaTimer)  —> o olani silecekdir 

 let time =100;
  setInterval(function(){
    const min= Math.floor(time / 60);
    const  sec=time %60
// geri sayimi ekranda gostermek
    labelTimer.textContent=`${min}:${sec}`;
    //saniye azaltmaq 
    time--;
  },1000)  —> BU IZE VERILEN INTERVALDAN YENI TIME  DEN GERI SYAN SAYAC VERECEKDIR. TAM SEKILDE DUZGUN ISLEYIR.






                                        START

1)structur aletler
1. css --> tailwind ||styled component
2. context api
3. react router
4. ui library
5. react icons

2) 