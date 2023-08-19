import React, {useState, useEffect } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  contactDetailType,
  contactModalproptypes,
  modalValueTypes,
} from "@/types/types";
import { useAppDispatch } from "@/hooks/customRtk";
import { addContact, updateContact } from "@/feature/contactSlice";
import { useToast } from "../ui/use-toast";

// This component is use as Modal to create and edit contacts.
function CreateContactContent({ type, contactData }: contactModalproptypes) {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const id = `${Date.now()}`;

  const modalValues: modalValueTypes = {
    edit: "Edit",
    create: "Create",
  };

  const [inputContact, setInputContact] = useState<contactDetailType>({
    firstName: "",
    lastName: "",
    status: "active",
  });

  useEffect(() => {
    if(type==="edit"){

      contactData && setInputContact(contactData);
    }
    else setInputContact({
      firstName: "",
      lastName: "",
      status: "active",
    })
  }, []);

  const onChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputContact((prev) => ({ ...prev, [name]: value }));
  };
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setInputContact((prev) => ({ ...prev, status: e.target.value }));
  };
  const submitHandler = () => {
    if (
      inputContact.firstName.trim().length < 3 ||
      inputContact.lastName.trim().length < 3
    ) {
      toast({
        variant: "destructive",
        title: "Correction.",
        description:
          "First name or Last name should have length of greater than 3 letters.",
      });
    }
    type === "create"
      ? dispatch(addContact({ ...inputContact, id }))
      : dispatch(updateContact(inputContact));
  };
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{modalValues[type]} Contact</DialogTitle>
        <DialogDescription>
          {modalValues[type]} contact list here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            First name
          </Label>
          <Input
            maxLength={15}
            id="firstName"
            name="firstName"
            value={inputContact.firstName}
            onChange={onChangeHadler}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Last name
          </Label>
          <Input
            id="lastName"
            maxLength={15}
            name="lastName"
            value={inputContact.lastName}
            onChange={onChangeHadler}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Status</Label>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                onClick={radioChangeHandler}
                checked={inputContact.status === "active"}
                value="active"
                id="r1"
              />
              <Label htmlFor="r1">Active</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="inactive"
                id="r2"
                checked={inputContact.status === "inactive"}
                onClick={radioChangeHandler}
              />
              <Label htmlFor="r2">Inactive</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" onClick={submitHandler}>
            Save Contact
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default CreateContactContent;
