import {useQuery} from "@tanstack/react-query";
import {getNetworks} from "@/services/purchase.ts";

export const useGetNetworks = ()=>{
   return useQuery({
        queryKey: ["crypto"],
        queryFn: getNetworks,
       staleTime: 1000 * 6
    })
}