const rp=require("request-promise");

function obtenerFinSemana(year,countryCode){
    var options={
        uri:"https://date.nager.at/api/v2/LongWeekend/"+ year +"/"+ countryCode,
        json:true
    }

    return rp(options);

}

module.exports=obtenerFinSemana;
