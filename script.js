var res=fetch('https://restcountries.com/v3.1/all');
console.log(res);
res.then((data)=>data.json()).then((result)=>{
console.log(result)
getResult(result);
})
.catch((error)=>console.log(error));


var getResult=(res)=>{
var AsianCountry=res.filter((ele)=>ele.region==="Asia");
console.log(AsianCountry);

var LessPopulation=res.filter((ele)=>ele.population<200000);
console.log(LessPopulation);


res.forEach(element => {
    console.log(`Name:${element.name.common}
    Capital:${element.capital}
    Flag:${element.flag}`);
});

var totalpopulation=res.reduce((sum,curr)=>sum+curr.population,0);
console.log(`Total Population:${totalpopulation}`);


for(let i=0;i<res.length;i++){
    let isCurrency=res[i].currencies!==undefined;
    if(isCurrency){
           let CurrencyObj=res[i].currencies;
           let isUSD=CurrencyObj.USD!==undefined;
           if(isUSD){
               console.log(`Currency in USD:${res[i].name.common}`)
           }
    }
}
}

