const rp=require("request-promise");

function obtenerFeriados(year,countryCode){
    var options={
        uri:"https://date.nager.at/api/v2/publicholidays/"+ year +"/"+ countryCode,
        json:true
    }

    return rp(options);

}

module.exports=obtenerFeriados;
