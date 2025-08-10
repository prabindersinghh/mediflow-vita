import { Stethoscope } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-8 w-8 rounded-md bg-primary/10 grid place-items-center">
      <Stethoscope className="h-5 w-5 text-primary" />
    </div>
    <span className="font-semibold">MediFlow Vita</span>
  </div>
);

export default Logo;
