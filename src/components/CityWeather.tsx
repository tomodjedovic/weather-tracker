import React,{FC, useState} from "react";
import City from "./City";


export interface CityProps {
        name : string,
        temperature ? : string,
        presure ? : string,
        humidity ? : string
    }
const cityList:CityProps[] =[
    {name : "Beograd",temperature : "20 C",presure :"1010 mb",humidity : "55 %"},
    {name : "Novi Sad",temperature : "21 C",presure :"1015 mb",humidity : "45 %"},
    {name : "Subotica",temperature : "17 C",presure :"1005 mb",humidity : "80 %"},
    {name : "Zrenjanin",temperature : "20 C",humidity : "55 %"},
    {name : "Kikinda",temperature : "19 C",presure :"1010 mb",humidity : "60 %"}
    ];

const CityWeather:FC=()=>{
    
    const [list,setList]=useState<CityProps[]>(cityList);

    const setOnTop=(index:number)=>{
        const newList=(list.filter((city,i)=>{return i===index}));
        list.map((city,i)=> i!==index ? newList.push(city):city)
        setList(newList);
    };

    const deleteCity=(index:number)=>{
      const newCityes=(list.filter((city,i)=>{return i!==index;}));
      setList(newCityes);
    };


    return(
        
            <table>
                <th>
                   <td> Gradovi</td>
                   <td>Temp.</td>
                   <td>Pritisak</td>
                   <td>Vlaznost</td>
                   <td></td>
                </th>
               
                    {list.map((city,index)=>(
                      <tr>   
                        <City key={index} 
                        name={city.name} 
                        temperature={city.temperature}
                        presure={city.presure}
                        humidity={city.humidity}
                        />
                        <td>
                            <button id="delete" onClick={()=>deleteCity(index)}>obrisi grad</button>
                            <button id="top" onClick={()=>setOnTop(index)}>postavi na vrh</button>
                        </td>
                     </tr>    
                    ))}
               
            </table>
       
    )
};
export default CityWeather
