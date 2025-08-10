import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Signup() {
  const [role, setRole] = useState<string>("patient");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/dashboard/${role}`);
  }

  return (
    <>
      <Seo title="Sign Up – MediFlow Vita" description="Create your MediFlow Vita account and choose your role to get started." />
      <SiteHeader />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto rounded-xl border p-6 shadow-sm">
          <h1 className="text-2xl font-semibold mb-1">Create account</h1>
          <p className="text-sm text-muted-foreground mb-4">Join MediFlow Vita today.</p>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="name@email.com" />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="patient">Patient</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="hospital">Hospital</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" variant="hero">Create account</Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4 text-center">Already have an account? <Link to="/login" className="story-link">Login</Link></p>
        </div>
      </main>
    </>
  );
}
