import {useformState} from "@/store";
import {useGetDataPlans} from "@/hooks/purchase.ts";
import {useState} from "react";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import type {VariationData} from "@/types";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft, ArrowRight} from "lucide-react";


const Section2 = () => {
    const [fullData,setFullData] = useState(false)
    const {currentStep,handleStepChange,network,setPlan,dataPlan} = useformState();
    const {data:dataPlans,isLoading} = useGetDataPlans(network);

    const handleNext = ()=>{
        if (currentStep < 6){
            handleStepChange(currentStep + 1,"forward");
        }

    }
    const handleBack = ()=>{
        if(currentStep > 1){
            handleStepChange(currentStep  - 1,"backward");
        }
    }
const plans:VariationData[] = dataPlans?.variations;
const handleClick = (plan:VariationData)=>{
    setPlan(plan.variationCode);
}

const actualData = fullData?plans:plans?.slice(0,5);
    return(
        <div>

            <h1 className={"font-bold text-lg m-4"}>Choose a data plan for your selected network</h1>
            <div>
                {
                   isLoading? (
                       <div className={'flex justify-center items-center flex-col gap-5'}>
                           {
                               [...Array(5)].map((_,index)=>(
                                   <div key={index} className={"w-[250px] border flex flex-col items-center p-5  rounded-md w- h-20 justify-start"}>
                                       <Skeleton className={'w-[200px] h-[50px]'}/>
                                       <Skeleton className={'w-10 h-5'}/>
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
            <div className={"flex mt-6 justify-evenly items-center"}>
                <Button
                    disabled={currentStep === 1}
                    className={"cursor-pointer"} onClick={handleBack}>
                    <ArrowLeft className={"w-6 h-6"}/>
                    Back
                </Button>

                <Button
                    disabled={!dataPlan || dataPlan === ""}
                    onClick={() => {
                        handleNext()
                    }}
                    className={"mx-auto m-5 cursor-pointer"}

                >Next <ArrowRight/></Button>

            </div>

        </div>
    )
}
export default Section2