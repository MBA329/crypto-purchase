import {create} from "zustand/react";

export type formSteps = number

interface formData{
currentStep : formSteps,
    direction: string,
    phoneNumber: string,
    currency: string,
    network:string,
    dataPlan:string,
    enabled:boolean,
    setNetwork: (network:string)=>void,
    setCurrency: (currency:string)=>void,
    setEnabled: (enabled:boolean)=>void,
    setPhoneNumber: (phoneNumber:string)=>void,
    handleStepChange: (step:formSteps,dir:string)=>void,
    setPlan: (plan:string)=>void,


}
const initialState = {
    currentStep : 1 as formSteps,
    direction: "",
    phoneNumber: "",
    currency: "",
    network: "",
    dataPlan: "",
    enabled:false
}

export const useformState = create<formData>((set)=>({
    ...initialState,
    setNetwork:(net)=> set({network:net}),
    setCurrency:(cur)=> set({currency:cur}),
    setPhoneNumber:(number)=>set({phoneNumber:number}),
    handleStepChange: (step:formSteps,dir:string)=>set({currentStep:step ,direction:dir}),
    setEnabled:(active)=>set({enabled:active}),
    setPlan:(plan)=>set({dataPlan:plan})

}))