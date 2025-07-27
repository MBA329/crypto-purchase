import {motion} from "framer-motion";
import Quidax from "@/assets/quidax.png"
import {Button} from "@/components/ui/button";
export const Hero =()=>{
    return(
        <section className={'bg-gray-100 min-w-screen min-h-screen flex justify-center items-center p-10'}>
            <main className={'flex flex-col items-center text-center md:text-left justify-center md:flex-row'}>
                <motion.div
                    initial={{opacity:0,y:-50}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:1.5,ease:'easeOut'}}
                    className={"md:w-1/2 space-y-4"}>
                    <h1 className={"text-4xl md:text-6xl font-extrabold"}>Hello <span className={'text-purple-800'}>Ralph</span></h1>
                    <p className={'text-lg md:text-2xl font-bold tracking-wide'}>
                        I heard you want to buy data. well guess what! you can do that using crypto click the button below to get started
                    </p>
                    <Button className={"cursor-pointer w-[150px] md:w-[200px] h-12 text-lg hover:opacity-98 transition-all"}>Get Started</Button>

                </motion.div>

                <motion.div
                    initial={{opacity:0,x:100}}
                    animate={{opacity:1,x:0}}
                    transition={{duration:1.5,ease:'easeInOut'}}

                    className={'max-w-[400px] mt-10 md:max-w-[600px]'}>
                    <div className={'w-full h-full'}>
                        <img loading={"lazy"} src={Quidax} alt="phone logo"/>
                    </div>
                </motion.div>
            </main>
        </section>
    )
}