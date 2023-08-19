import { Card } from '@tremor/react';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
function Welcom() {
  return (
    <div className="flex  justify-center mt-4 md:mt-10 w-screen md:w-[80vw]">
   <Card className=" w-[480px] h-[350px] min-[380px] border-t-8 border-primary">
              <CardHeader className='flex justify-center'>
                <CardTitle>Hello there! Welcome to the home screen.</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Information
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {">"} Get some popcorn and explore the app by selecting pages from the sidebar or tfrom top bar if you're using a mobile device.
                      
                    </p>
                  </div>
                </div>
                <div></div>
              </CardContent>
            </Card>
    </div>
  )
}

export default Welcom