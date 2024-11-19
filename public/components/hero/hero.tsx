import { GrSearch } from "react-icons/gr";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Hero = () => {
  return (
    <div className="w-full hero-bg text-white h-[353px] flex items-center justify-center">
      <div className="w-1/2 flex items-center flex-col justify-center">
        <h2 className="text-[32px] font-semibold mb-2">Events</h2>
        <p className="text-lg font-medium mb-8 w-3/4 text-center">
          Mi eget leo viverra cras pharetra enim viverra. Ac at non pretium
          etiam viverra. Ac at non pretium etiam
        </p>
        <div className="w-full relative">
          <Input
            type="text"
            placeholder="Search here"
            className="h-14 placeholder:text-[#B8B8B8]  font-medium text-primary-text"
          />
          <Button
            size="sm"
            className="gap-x-2 bg-[#56D59C] hover:bg-[#56D59C] hover:bg-opacity-80 absolute top-[10px] right-4 "
          >
            <GrSearch />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero