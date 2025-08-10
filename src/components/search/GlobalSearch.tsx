import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function GlobalSearch() {
  return (
    <form className="flex items-center gap-2 w-full max-w-xl" role="search" aria-label="Global search">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input className="pl-9" placeholder="Search doctors, hospitals, services..." />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
