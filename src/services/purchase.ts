const baseUrl = "http://localhost:8080";
import axios from "axios";
import {toast} from "sonner"

export const getNetworks = async()=>{
    try{
        const response = await axios.get(`${baseUrl}/purchase/networks`);
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            toast.error(error.response?.data?.message || "Something went wrong")
        }
        else if( error instanceof Error){
            toast.error(error.message)
        }
        throw error

    }
}
export const getCurrency = async():Promise<string[]> =>{
    try{
        const response = await axios.get(`${baseUrl}/purchase/crypto-currencies`);
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            toast.error(error.response?.data?.message || "Something went wrong")
        }
        throw error
    }

}
export const getDataPlans = async(params:string)=>{
    try{
      const response = await axios.post(`${baseUrl}/purchase/fetch-plans/${params}`)
        return response.data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
            toast.error(error.response?.data?.message || "Something went wrong")
        }
        throw error
    }
}
