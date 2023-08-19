import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'


// Info card to show if there is no contact available
function NoContactInfo() {
  return (
    <div className=" flex justify-center mt-20">
            <Card className=" w-[380px]">
              <CardHeader>
                <CardTitle>No Contact found</CardTitle>
                <CardDescription>Please add some contacts.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Instruction
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Press create contact button to add a new Contact.
                    </p>
                  </div>
                </div>
                <div></div>
              </CardContent>
            </Card>
          </div>
  )
}

export default NoContactInfo