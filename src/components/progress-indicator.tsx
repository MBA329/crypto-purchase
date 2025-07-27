import {useformState} from "@/store";

export const ProgressIndicator = () => {
    const steps = [1,2,3,4,5,6]
    const {currentStep} = useformState();
    return(
        <div className={'flex items-center justify-center '}>
            {
steps.map((step,index)=>(
    <div key={step}

         className={'flex items-center'}>

    <div className={`flex items-center justify-center size-10 rounded-full text-gray-100 font-bold ${currentStep===step?"bg-blue-600":"bg-gray-300"}`}>
        {step}
    </div>
        {
            index !== steps.length-1 && (
                <div className={'w-12 h-1 bg-gray-300 '}>

                </div>
            )
        }
</div>))
            }
        </div>
    )
}