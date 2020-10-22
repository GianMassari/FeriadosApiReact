const rp=require("request-promise");

function obtenerProximosFeriados(countryCode){
    var options={
        uri:"https://date.nager.at/api/v2/NextPublicHolidays/"+countryCode,
        json:true
    }

    return rp(options);

}

module.exports=obtenerProximosFeriados;

