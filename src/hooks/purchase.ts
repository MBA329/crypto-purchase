import {useQuery} from "@tanstack/react-query";
import {getNetworks,getCurrency,getDataPlans} from "@/services/purchase.ts";

export const useGetNetworks = ()=>{
   return useQuery({
        queryKey: ["crypto"],
        queryFn: getNetworks,
       staleTime: 1000 * 6
    })
}

export const useGetCurrency = ()=>{
    return useQuery(
        {
            queryKey: ["currency"],
            queryFn: getCurrency,
            staleTime: 1000 * 6
        }
    )
}

export const useGetDataPlans = (network:string)=>{
    return useQuery({
        queryKey: ["dataPlans",network],
        queryFn: ()=> getDataPlans(network),
        staleTime: 1000 * 6
    })
}