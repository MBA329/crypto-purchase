import {Hero} from "@/components/Hero"
import {Toaster} from "sonner";
import MultiStepForm from "@/components/multi-step-form.tsx"

function App() {

  return (
    <>
      <div>
<Hero/>
          <MultiStepForm/>
      </div>
        <Toaster position={"top-center"}/>
    </>
  )
}

export default App
