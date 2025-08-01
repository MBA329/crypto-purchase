export interface purchaseData{
string: string[];
}

export interface VariationData{
    fixedPrice
        :
       string
    name
        :
       string
    variationAmount
        :
       string
    variationCode
        :
       string
}

export interface DataPlans{
    convenienceFee:string;
    serviceId:string;
    serviceName:string;
    variations:VariationData[];
}
export interface buyData{
    phoneNumber:string;
    network:string;
    billersCode:string;
    dataPlanCode:string;
    cryptoCurrency:string;
}