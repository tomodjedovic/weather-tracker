import { CityProps } from "./CityWeather";



const City=(city:CityProps)=>{
    

    
    return(
        <>
            <td>{city.name}</td>
            <td>{city.temperature ? city.temperature :"Nepoznata"}</td>
            <td>{city.presure ? city.presure : "Nepoznat"}</td>
            <td>{city.humidity ? city.humidity : "Nepoznata"}</td>
            <td>{city.weatherConditions ? city.weatherConditions : "nepoznati"}</td>
        </>
    )
}
export default City;