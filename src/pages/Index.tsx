import SiteHeader from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import Seo from "@/components/seo/Seo";

const Index = () => {
  return (
    <>
      <Seo title="MediFlow Vita – Unified Healthcare Platform" description="Book appointments, virtual consults, manage records, and hospital programs — secure and modern." />
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-14 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Healthcare, simplified for Patients, Doctors, and Hospitals</h1>
            <p className="text-lg text-muted-foreground mb-8">Book appointments, conduct virtual consultations, manage records, and publish hospital programs — all in one secure platform.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="/signup"><Button variant="hero" size="lg">Get Started</Button></a>
              <a href="/login"><Button variant="outline" size="lg">Login</Button></a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">
          <article className="rounded-xl border p-6 shadow-sm hover-scale">
            <h2 className="font-semibold mb-1">For Patients</h2>
            <p className="text-sm text-muted-foreground">Book physical or online appointments, access history, and get care from anywhere.</p>
          </article>
          <article className="rounded-xl border p-6 shadow-sm hover-scale">
            <h2 className="font-semibold mb-1">For Doctors</h2>
            <p className="text-sm text-muted-foreground">Manage schedules, consult virtually, update notes and prescriptions, and track performance.</p>
          </article>
          <article className="rounded-xl border p-6 shadow-sm hover-scale">
            <h2 className="font-semibold mb-1">For Hospitals</h2>
            <p className="text-sm text-muted-foreground">Publish services and offers, manage rosters and appointments, and view analytics.</p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Index;
