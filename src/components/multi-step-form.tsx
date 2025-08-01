import Section1 from "./sections/section1.tsx"
import Section2 from "./sections/section2.tsx"
import Section3 from "./sections/section3.tsx";
import Section4 from "./sections/section4.tsx";
import {motion,AnimatePresence} from "framer-motion";
import {ProgressIndicator} from "@/components/progress-indicator.tsx";
import {useformState} from "@/store";

const MultiStepForm = () => {

    const {direction,currentStep} = useformState();

    const slideVariants = {
        enter:(direction:string)=>({
            x: direction === "forward" ? "-100%" : "100%",
            opacity:0.5
        }),
        center:{
            opacity: 1,
            x:0,
        },
        leave:(direction:string)=>({
            x: direction === "backward" ? "100%" : "-100%",
            opacity:0.5
        })


    }
    return(
        <section className={'min-h-screen flex overflow-x-auto flex-col justify-center items-center'}>
            <ProgressIndicator/>
            <main>
                <AnimatePresence mode={"wait"} custom={direction} initial={false}>
                    {
                        currentStep === 1 && (
                            <motion.div key={currentStep}
                            initial={"enter"}
                                        exit={"leave"}
                                        animate={"center"}
                                        variants={slideVariants}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                            >
                                <Section1/>
                            </motion.div>

                        )
                    }
                    {
                        currentStep === 2 && (
                            <motion.div key={currentStep}
                                        initial={"enter"}
                                        exit={"leave"}
                                        animate={"center"}
                                        variants={slideVariants}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                            >
                                <Section2/>
                            </motion.div>
                        )
                    }
                    {
                        currentStep === 3 && (
                            <motion.div key={currentStep}
                                        initial={"enter"}
                                        exit={"leave"}
                                        animate={"center"}
                                        variants={slideVariants}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                            >
                                <Section3/>
                            </motion.div>
                        )
                    }
                    {
                        currentStep === 4 && (
                            <motion.div key={currentStep}
                                        initial={"enter"}
                                        exit={"leave"}
                                        animate={"center"}
                                        variants={slideVariants}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                            >
                                <Section4/>
                            </motion.div>
                        )
                    }
                    {
                        currentStep === 5 && (
                            <motion.div key={currentStep}
                                        initial={"enter"}
                                        exit={"leave"}
                                        animate={"center"}
                                        variants={slideVariants}
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                            >
                                <Section1/>
                            </motion.div>
                        )
                    }

                </AnimatePresence>



            </main>
        </section>
    )
}

export default MultiStepForm