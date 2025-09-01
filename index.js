document.addEventListener("DOMContentLoaded", postData)
const data = document.location.search;
const params = new URLSearchParams(data);
const vacation = params.get("vacation");
const amount = params.get("amount");
const continents = params.getAll("continents");
const doing = params.get("do");
const stay = params.get("stay");
let country;
let image;
let para;
if ((amount == "23" || amount == "3+") && continents == "SA" && doing == "hike" && vacation=="alps" && (stay=="cabin" || stay=="camping")){
    country = "Peru";
    image = "images/peru.webp";
    para = "You are Peru because you love the outdoors, have been to the area before, and have travled to several different countries!";
} else if((amount == "23" || amount == "3+") && continents == "Eu" && (doing == "hike" || doing =="mix") && (vacation=="alps" || vacation=="nyc") && (stay=="cabin" || stay=="camping" || stay=="5s")){
    country = "Germany";
    image = "images/germany.webp";
    para = "You are Germany because you have been to Europe and enjoy travel with a mix of outdoors and the city!";
} else if((amount == "23" || amount == "3+") && (continents == "NA"||continents=="Oc") && (doing == "hike" || doing =="mix" || doing == "city") && (vacation=="alps" || vacation=="beach") && (stay=="cabin" || stay=="camping" || stay=="5s")){
    country = "The Bahamas";
    image = "images/bahamas.webp";
    para = "You are the Bahamas because you love the outdoors and are always down to travel to another country for the beach experience!";
} else if(amount == "1" && continents == "NA" && (doing == "hike" || doing =="mix" || doing == "city") && (vacation=="alps" || vacation=="beach" || vacation=="nyc" || vacation=="home") && (stay=="cabin" || stay=="camping" || stay=="5s")){
    country = "The USA";
    image = "images/us.jpg";
    para = "You are the USA because you do not travel out of the country much, but still enjoy a variety of activities in your home country!";
} else if((amount == "23" || amount=="3+") && continents == "As" && (doing == "hike" || doing =="mix" || doing == "city") && (vacation=="alps" || vacation=="beach" || vacation=="nyc") && (stay=="cabin" || stay=="camping" || stay=="5s")){
    country = "Japan";
    image = "images/japan.png";
    para = "You are Japan because you have been to surrounding areas and enjoy places with a variety of activities including both cities and mountains!";
} else{
    country = "Antarctica";
    image = "images/ant.webp";
    para = "You are Antarctica because you have a special travel pattern like Antarctica which does not even have a flag!";
}
function postData(){
    const container = document.getElementById("results");
    container.innerHTML = `<h1>You are ${country}!</h1>
                            <img src = ${image}></img>
                            <h3>${para}</h3>`;
}