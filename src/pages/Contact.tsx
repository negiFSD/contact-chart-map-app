import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateContactContent from "@/components/main/CreateContactContent";
import { useAppDispatch, useAppSelector } from "@/hooks/customRtk";
import { deleteContact } from "@/feature/contactSlice";
import { ShieldCheck, ShieldAlert } from "lucide-react";
import NoContactInfo from "@/components/main/NoContactInfo";

function Contact() {
  const dispatch = useAppDispatch();
  const { contactList } = useAppSelector((store) => store.contact);
  return (
    <div className=" w-full">
      <div className="flex  item-center m-4 min-h-[90vh] flex-col">
        <div className="w-60 mb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Create Contact</Button>
            </DialogTrigger>
            <CreateContactContent type="create" />
          </Dialog>
        </div>

        {contactList.length < 1 ? (
        <NoContactInfo/>
        ) : null}

        <div className="flex sm:justify-start justify-center flex-wrap gap-4 ">
          {contactList.map((item) => {
            return (
              <Card
                key={item.id && item.id}
                className="min-w-[320px] w-[400px]"
              >
                <CardHeader>
                  <CardTitle>{item.firstName}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {item.firstName} {item.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {" "}
                      {item.status === "active" ? (
                        <ShieldCheck />
                      ) : (
                        <ShieldAlert />
                      )}{" "}
                      {item.status}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Edit Contact</Button>
                      </DialogTrigger>
                      <CreateContactContent type={"edit"} contactData={item} />
                    </Dialog>
                    <Button
                      onClick={() => {
                        item?.id && dispatch(deleteContact(item?.id));
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;

