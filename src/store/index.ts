import {create} from "zustand/react";

export type formSteps = 1|2|3|4|5|6

interface formData{
previousStep : formSteps,
currentStep : formSteps,
    phoneNumber: string,
    currency: string,
    network:string,
    dataPlan:string,
    setNetwork: (network:string)=>void,
    setCurrency: (currency:string)=>void,
    setPhoneNumber: (phoneNumber:string)=>void,


}