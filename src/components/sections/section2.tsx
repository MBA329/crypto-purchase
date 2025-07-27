import {useformState} from "@/store";
import {useGetDataPlans} from "@/hooks/purchase.ts";
import {useState} from "react";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import type {VariationData} from "@/types";


const Section2 = () => {
    const [fullData,setFullData] = useState(false)
    const {network,setEnabled,setPlan,dataPlan} = useformState();
    const {data:dataPlans,isLoading} = useGetDataPlans(network);


const plans:VariationData[] = dataPlans?.variations;
const handleClick = (plan:VariationData)=>{
    setEnabled(true);
    setPlan(plan.variationCode);
}

const actualData = fullData?plans:plans?.slice(0,5);
    return(
        <div>

            <h1 className={"font-bold text-lg m-4"}>Choose a data plan for your selected network</h1>
            <div>
                {
                   isLoading? (
                       <div>
                           {
                               [...Array(5)].map((_,index)=>(
                                   <div key={index} className={"w-full h-20"}>
                                       <Skeleton/>
                                   </div>
                               ))
                           }

                       </div>
                   ):(
                       <div

                           className={"flex items-center flex-col gap-2 max-h-[500px] overflow-y-auto py-10 justify-center"}>
                           {actualData?.map((plan,index)=>{
                               return (
                                   <div
                                       onClick={()=>{handleClick(plan)}}
                                       key={index} className={`border-2 p-3 ${dataPlan === plan.variationCode?"border-gray-900":""} rounded-md`}>
                                       {plan?.name}
                                   </div>
                               )
                           })}
                           <p
                               onClick={()=>{setFullData(!fullData)}}
                               className={"text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"}>{fullData?"Show Less":"Show More"}</p>
                       </div>
                   )
                }
            </div>
        </div>
    )
}
export default Section2