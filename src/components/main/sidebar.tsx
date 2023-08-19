import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Contact2, MapPin, AreaChart} from "lucide-react"
import { useNavigate, useLocation} from "react-router-dom"


// Sidebar used in sharedlayout
export function Sidebar() {
    const navigate = useNavigate()
    const {pathname} = useLocation();
  
  return (
    <div className={cn("pb-12 w-[20vw]  h-[100vh] border-r hidden  md:block", )}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Contact Menu
          </h2>
          <div className="space-y-1">
            <Button variant={pathname==='/contact'?'secondary':'ghost'} className="w-full justify-start" onClick={()=>navigate('/contact')}>
            <Contact2 size={22} className="mr-2"/>
              Contact
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Charts & Maps
          </h2>
          <div className="space-y-1">
            <Button variant={pathname==='/charts'?'secondary':'ghost'} className="w-full justify-start" onClick={()=>navigate('/charts')}>
            <AreaChart  size={22} className="mr-2"/>
              Charts
            </Button>
            <Button variant={pathname==='/maps'?'secondary':'ghost'} className="w-full justify-start" onClick={()=>navigate('/maps')}>
            <MapPin  size={22} className="mr-2"/>
              Maps
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  )
}
