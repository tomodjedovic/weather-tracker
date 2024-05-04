import { CityProps } from "./CityWeather";



const City=(city:CityProps)=>{
    

    
    return(
        <>
            <td>{city.name}</td>
            <td>{city.temperature ? city.temperature :"Nepoznata"}</td>
            <td>{city.presure ? city.presure : "Nepoznata"}</td>
            <td>{city.humidity ? city.humidity : "Nepoznata"}</td>
        </>
    )
}
export default City;