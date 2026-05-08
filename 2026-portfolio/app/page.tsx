import Navbar from "@/components/sections/navbar/default"
import { ModeToggle } from "@/hooks/mode-toggle"

export default function Page() {
  return (
    <div>
      <Navbar/>
      <ModeToggle/>
    </div>
    )
}
