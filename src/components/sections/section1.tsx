import glo from "@/assets/glo.png"
import airtel from "@/assets/airtel.png"
import mtn from "@/assets/mtn.jpg";
import mobile from "@/assets/mobile.jpeg";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {useGetNetworks} from "@/hooks/purchase.ts";
import {useformState} from "@/store";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft,ArrowRight} from "lucide-react";

const Section1 = ()=>{

    const {handleStepChange,currentStep,network,setNetwork,setEnabled} = useformState();

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
    const {data:providersData,isLoading,isError} = useGetNetworks();
    const providers = {
   airtel: {
        id:"airtel",
            image
    :
        airtel,
            name
    :
        "Airtel",
       border: "border-red-400"

    }
,
   mtn: {
        id:"mtn",
            image
    :
        mtn,
            name
    :
        "MTN",
       border:"border-yellow-300"
    }
,
   glo: {
        id:"glo",
            image
    :
        glo,
            name
    :
        "Glo",
       border:"border-green-300"
    }
,
   etisalat: {
        id:"etisalat",
            image
    :
        mobile,
            name
    :
        "9Mobile",
       border:"border-green-800"
    }

}
    return(
        <div className={'w-full'}>
<h1 className={"text-3xl font-bold text-center m-10"}>
     Select a service provider
</h1>
            {
                isLoading ? (<div className={'flex flex-col md:flex-row gap-2 items-center justify-center'}>
                    {
                        [...Array(4)].map((_,index)=>(
                            <div key={index} className={"border flex flex-col justify-center gap-2 rounded-md p-4 size-[100px]"}>
                                <Skeleton className={"w-full size-[70px]"}/>
                                <Skeleton className={"w-15 h-4"}/>
                            </div>
                        ))
                    }
                </div>) : (
                    <div className={"grid grid-cols-2 gap-9 md:gap-1 md:grid-cols-4 place-items-center   justify-center "}>
                        {
                           providersData?.map((provider:string)=>{
                               const net = providers[provider as keyof typeof providers]
                               if(!net) return null;
                               return (
                                   <div
                                       onClick={()=>{
                                           setNetwork(net.id)
                                           setEnabled(true)
                                       }}
                                       key={provider} className={`border-4 rounded size-[120px] shadow-lg md:size-[250px] flex justify-center flex-col items-center ${network === net.id ? net.border : ""} cursor-pointer hover:opacity-98 transition-all`}>
                                       <img src={net.image} alt="omo" className={'size-[70px] md:size-[200px]'}/>
                                       <p className={""}>{net.name}</p>
                                   </div>
                               )
                               }
                           )
                        }
                    </div>
                )

            }
            {
                isError && (
                    <div className={"text-center text-red-500 text-lg"}>
                        <p>Failed to load Resource check your connection</p>
                    </div>
                )


            }
            <div className={"flex mt-7 justify-evenly items-center"}>
                <Button
                    disabled={currentStep === 1}
                    className={"cursor-pointer"} onClick={handleBack}>
                    <ArrowLeft className={"w-6 h-6"}/>
                    Back
                </Button>

                <Button
                    disabled={!network || network === ""}
                    onClick={() => {
                        handleNext()
                    }}
                    className={"mx-auto m-5 cursor-pointer"}

                >Next <ArrowRight/></Button>

            </div>


        </div>
    )
}
export default Section1