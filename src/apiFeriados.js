const rp=require("request-promise");

function obtenerFeriados(year,countryCode){
    var options={
        uri:"https://date.nager.at/api/v2/publicholidays/2020/AR",
        json:true
    }

    return rp(options);

}

module.exports=obtenerFeriados;



function obtenerFinSemana(year,countryCode){
    var options={
        uri:"https://date.nager.at/api/v2/LongWeekend/"+ year +"/"+ countryCode,
        json:true
    }

    return rp(options);

}

module.exports=obtenerFinSemana;




function obtenerProximosFeriados(countryCode){
    var options={
        uri:"https://date.nager.at/api/v2/NextPublicHolidays/"+countryCode,
        json:true
    }

    return rp(options);

}

module.exports=obtenerProximosFeriados;


