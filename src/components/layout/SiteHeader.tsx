import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" aria-label="MediFlow Vita Home" className="hover-scale">
          <Logo />
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/about" className={({isActive}) => isActive ? "text-primary" : "hover:text-primary"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary" : "hover:text-primary"}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <NavLink to="/login"><Button variant="outline">Login</Button></NavLink>
          <NavLink to="/signup"><Button variant="hero">Sign Up</Button></NavLink>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
