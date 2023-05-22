import { useState, useEffect } from 'react';
import { reqResApi } from '../api/reqResPokeApi';

interface Types{
    name : string,
    url : string
}
export default function useGetTypePokemon() {
    const [Types, setTypes] = useState<Types[]>([])

    useEffect(() => {
        ( async () => await getTypes() )()
    }, [])
    
    const getTypes = async ()=>{
        try {
            const resp = await reqResApi('/type/')
            setTypes(resp.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        Types
    };
  
}
