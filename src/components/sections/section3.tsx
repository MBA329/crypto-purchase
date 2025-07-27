import bitcoinlogo from "@/assets/bitconlogo.svg";
import usdtimg from "@/assets/usdtimg.png";
import tronimg from "@/assets/trximg.png";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {useGetCurrency} from "@/hooks/purchase.ts";
import {useformState} from "@/store";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft, ArrowRight} from "lucide-react";

const Section3 = ()=>{
    const {currentStep,handleStepChange,currency,setCurrency} = useformState();
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


    const {data:coinData,isLoading,isError} = useGetCurrency();
    const coins = {
        btc: {
            id:"btc",
            image
                :
            bitcoinlogo,
            name
                :
                "Bitcoin",
            border: "border-yellow-400"

        }
        ,
        trx: {
            id:"trx",
            image
                :
            tronimg,
            name
                :
                "TRX",
            border:"border-red-300"
        }
        ,
        usdt: {
            id:"usdt",
            image
                :
            usdtimg,
            name
                :
                "USDT",
            border:"border-green-300"
        }


    }
    return(
        <div className={'w-full'}>
            <h1 className={"text-3xl font-bold text-center m-10"}>
                Select a currency
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
                    <div className={"flex flex-col md:flex-row items-center gap-5 justify-center "}>
                        {
                            coinData?.map((coin:string)=>{
                                    const net = coins[coin as keyof typeof coins]
                                    if(!net) return null;
                                    return (
                                        <div
                                            onClick={()=>{
                                                setCurrency(net.id)
                                            }}
                                            key={coin} className={`border-4 rounded-lg size-[120px] shadow-lg md:size-[250px] flex justify-center flex-col items-center ${currency === net.id ? net.border : ""} cursor-pointer hover:opacity-98 transition-all`}>
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

            <div className={"flex justify-evenly items-center"}>
                <Button
                    disabled={currentStep === 1}
                    className={"cursor-pointer"} onClick={handleBack}>
                    <ArrowLeft className={"w-6 h-6"}/>
                    Back
                </Button>

                <Button
                    disabled={!currency || currency === ""}
                    onClick={() => {
                        handleNext()
                    }}
                    className={"mx-auto m-5 cursor-pointer"}

                >Next <ArrowRight/></Button>

            </div>

        </div>

    )
}
export default Section3