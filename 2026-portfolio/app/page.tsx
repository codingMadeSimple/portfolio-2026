import Navbar from "@/components/sections/navbar/default"
import { ModeToggle } from "@/hooks/mode-toggle"
import Hero from "@/components/sections/hero/default"
import Logos from "@/components/sections/logos/default"
import Items from "@/components/sections/items/default"
import FAQ from "@/components/sections/faq/default"
import CTA from "@/components/sections/cta/default"
import { Footer } from "@/components/ui/footer"

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Logos/>
      <Items/>
      <FAQ/>
      <CTA/>
      <Footer/>
      {/* <ModeToggle/> */}
    </div>
    )
}
