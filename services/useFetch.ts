import { useEffect, useState } from "react"

export const useFetch= <T>(fetchFunction: ()=> Promise<T>, autoFetch=true)=>{
    const [data,setdata] = useState<T| null>(null);
    const [loading,setloading]= useState(false);
    const [error, setError]= useState<Error | null>(null);

    const fetchData = async()=>{
        try{
            setloading(true);
            setError(null);

            const result= await fetchFunction();

            setdata(result);
        }
        catch(err){
            //@ts-ignore
            setError(err instanceof Error? err: new Error('An error occured'));
        } finally{
            setloading(false);
        }
    }
    const reset=()=>{
        setdata(null);
        setloading(false);
        setError(null);
    }

    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    },[]);

    return {data, loading, error, refetch: fetchData, reset};

}