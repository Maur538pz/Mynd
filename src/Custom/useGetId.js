import { useState, useEffect } from 'react'
export const useGetId = () => {
    const [ id, setId ] = useState(0)
    useEffect(()=>{
        const localId = localStorage.getItem('idAreas')
        if(localId) setId(Number(localId))
    },[])
    const genNewId= () => {
        const getNewId = () => id+1
        localStorage.setItem('idAreas',getNewId())
        setId(getNewId())
    }

    return {id,genNewId}


}