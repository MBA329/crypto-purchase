import glo from "@/assets/glo.png"
import airtel from "@/assets/airtel.png"
import mtn from "@/assets/mtn.jpg";
import mobile from "@/assets/mobile.jpeg";
import {Button} from "@/components/ui/button.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {useGetNetworks} from "@/hooks/purchase.ts";
import {useState} from "react";

const Section1 = ()=>{

    const [icon,setIcon] = useState("");
    const [direction,setDirection] = useState<"forward" | "backward">("forward");

    const {data:providersData,isLoading} = useGetNetworks();
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
        id:"mobile",
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
                isLoading ? (<div className={'flex flex-col md:flex-row items-center justify-center'}>
                    {
                        [...Array(4)].map((_,index)=>(
                            <div key={index} className={"border flex flex-col rounded p-4 size-[100px]"}>
                                <Skeleton className={"w-full size-[70px]"}/>
                                <Skeleton className={"w-full h-3"}/>
                            </div>
                        ))
                    }
                </div>) : (
                    <div className={"grid grid-cols-2 gap-9 md:gap-1 md:grid-cols-4 place-items-center   justify-center "}>
                        {
                           providersData.map((provider:string)=>{
                               const network = providers[provider as keyof typeof providers]
                               if(!network) return null;
                               return (
                                   <div
                                       onClick={()=>{
                                           setIcon(network.id)
                                       }}
                                       key={provider} className={`border-4 rounded size-[120px] shadow-lg md:size-[250px] flex justify-center flex-col items-center ${icon === network.id ? network.border : ""} cursor-pointer hover:opacity-98 transition-all`}>
                                       <img src={network.image} alt="omo" className={'size-[70px] md:size-[200px]'}/>
                                       <p className={""}>{network.name}</p>
                                   </div>

                               )
                               }
                           )
                        }
                    </div>
                )
            }
        <Button
            className={"mx-auto m-5 cursor-pointer"}
        disabled={!icon}
        >Next</Button>

        </div>
    )
}
export default Section1