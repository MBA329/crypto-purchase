import {useQuery,useMutation} from "@tanstack/react-query";
import {getNetworks,getCurrency,getDataPlans,BuyData} from "@/services/purchase.ts";
import type {buyData} from "@/types";

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

export const useBuyData = ()=>{
    return useMutation({
        mutationFn: (params:buyData)=>BuyData(params),
        mutationKey: ["buyData"]

    })
}