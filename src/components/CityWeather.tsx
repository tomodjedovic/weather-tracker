import React,{FC, useState} from "react";
import City from "./City";



export interface CityProps {
        name : string,
        temperature ? : string,
        presure ? : string,
        humidity ? : string,
        weatherConditions ? : string
    }
const cityList:CityProps[] =[
    {name : "Beograd",temperature : "20 C",presure :"1010 mb",humidity : "55 %",weatherConditions:"oblacno"},
    {name : "Novi Sad",temperature : "21 C",presure :"1015 mb",humidity : "45 %",weatherConditions:"suncano"},
    {name : "Subotica",temperature : "17 C",presure :"1005 mb",humidity : "80 %",weatherConditions:"kisa"},
    {name : "Zrenjanin",temperature : "20 C",humidity : "55 %",weatherConditions:"suncano"},
    {name : "Kikinda",temperature : "19 C",presure :"1010 mb",humidity : "60 %"}
]; 

export const conditions:string[]=["suncano","oblacno","kisa","sneg"]; 



const CityWeather:FC=()=>{
    
    const [list,setList]=useState<CityProps[]>(cityList);

    const checkConditions=(condition:string)=>{
        const checkedCities=list.filter((city)=>{return condition===city.weatherConditions});
        checkedCities.forEach((city)=>alert(city.name));
    };

    const setOnTop=(index:number)=>{
        const newList=(list.filter((city,i)=>{return i===index}));
        list.map((city,i)=> i!==index ? newList.push(city):city)
        setList(newList);
    };

    const deleteCity=(index:number)=>{
      const newCityes=(list.filter((city,i)=>{return i!==index;}));
      setList(newCityes);
    };


    return( <>
        
            <table id="cw">
                <th>
                   <td> Gradovi</td>
                   <td>Temp.</td>
                   <td>Pritisak</td>
                   <td>Vlaznost</td>
                   <td>vremenski uslovi</td>
                   <td></td>
                </th>
               
                    {list.map((city,index)=>(
                      <tr>   
                        <City key={index} 
                        name={city.name} 
                        temperature={city.temperature}
                        presure={city.presure}
                        humidity={city.humidity}
                        weatherConditions={city.weatherConditions}
                        />
                        <td>
                            <button id="delete" onClick={()=>deleteCity(index)}>ukloni grad</button>
                            <button id="top" onClick={()=>setOnTop(index)}>postavi na vrh</button>
                        </td>
                     </tr>    
                    ))}
               
            </table>
            <table>
                <th>vremenski uslovi</th>
                {conditions.map((condition)=>(
                    <tr>
                        <td>{condition}</td>
                        <td><button onClick={()=>{checkConditions(condition)}}>prov.gradove</button></td>
                    </tr>
                ))}
            </table>
    </>   
    ) 
};
export default CityWeather
