import {useEffect, useState} from "react"

function useconversion_ratesInfo(conversion_rates){
    const [data, setData]= useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/8992b543dd45b38ec31a054c/latest/USD`)

        .then((res)=>res.json())
        .then((res)=> setData(res.conversion_rates))
        console.log("data", data);
    }, [conversion_rates])
    console.log("data",data);
    return data
}

export default useconversion_ratesInfo;