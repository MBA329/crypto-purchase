import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useformState} from "@/store";
import type {buyData} from "@/types";
import {toast} from "sonner";
import {useBuyData} from "@/hooks/purchase.ts";

const Section4 = ()=>{
    const {currentStep,handleStepChange,network,currency,dataPlan} = useformState();

    const handleBack = ()=>{
        if(currentStep > 1){
            handleStepChange(currentStep  - 1,"backward");
        }
    }
    const {mutate} = useBuyData();
const [value,setValue] = useState<string>("")
    const payload:buyData = {
        phoneNumber:value,
        billersCode:value,
        cryptoCurrency:currency,
        dataPlanCode:dataPlan,
        network:network
    }

    const handleSubmit = ()=>{
        if(!value){
            toast.error("please choose a phone number");
            return
        }
        mutate(
            payload,{
                onSuccess: () => toast.success("Data purchased successfully!"),
                onError: (error) => toast.error(error?.message || "Purchase failed!"),
            });


    }
    return (
        <div className={'size-[300px] flex flex-col justify-center items-center'}>
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={(phoneNumber)=>setValue(phoneNumber || "")}
                className={"w-[230px] rounded-md p-2 border-2 border-gray-900 focus:outline-none"}
            />

            <div className={"flex mt-6 justify-evenly items-center"}>
                <Button
                    disabled={currentStep === 1}
                    className={"cursor-pointer"} onClick={handleBack}>
                    <ArrowLeft className={"w-6 h-6"}/>
                    Back
                </Button>

                <Button
                    disabled={!value || value === ""}
                    onClick={() => {
                        handleSubmit()
                    }}
                    className={"mx-auto m-5 cursor-pointer"}

                >Next <ArrowRight/></Button>

            </div>

        </div>
    )
}
export default Section4