import { Button } from "../ui/button";
import { User } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

//Navbar used in shared layout.
function Navbar() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className="p-4 border-solid border-b-2 flex flex-row justify-between items-center ">
      <div className="hidden md:block font-bold">Logo</div>
      <div className=" hidden  md:flex flex-row justify-between gap-4 font-semibold capitalize">
        {currentPage.slice(1)}
      </div>
      <div className="md:hidden"> Logo</div>
      <div className="flex gap-[2px] md:hidden">
        <Button variant="secondary">
          <Link to="/contact">Contact</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/charts">Charts</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/maps">Maps</Link>
        </Button>
      </div>
      <div className="flex flex-row justify-between gap-4 items-center">
        <Button className="rounded-full" variant="outline" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
