import SiteHeader from "@/components/layout/SiteHeader";
import Seo from "@/components/seo/Seo";

export default function About() {
  return (
    <>
      <Seo title="About – MediFlow Vita" description="How MediFlow Vita helps Patients, Doctors, and Hospitals collaborate securely." />
      <SiteHeader />
      <main className="container mx-auto px-4 py-10">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">About MediFlow Vita</h1>
          <p className="text-muted-foreground">A unified, secure platform that streamlines healthcare for everyone.</p>
        </header>
        <section className="grid md:grid-cols-3 gap-6 mt-8">
          <article className="rounded-lg border p-6 shadow-sm">
            <h2 className="font-semibold mb-2">For Patients</h2>
            <p className="text-sm text-muted-foreground">Book appointments, consult virtually, access history, and receive timely notifications.</p>
          </article>
          <article className="rounded-lg border p-6 shadow-sm">
            <h2 className="font-semibold mb-2">For Doctors</h2>
            <p className="text-sm text-muted-foreground">Manage schedules, update prescriptions and notes, and consult virtually.</p>
          </article>
          <article className="rounded-lg border p-6 shadow-sm">
            <h2 className="font-semibold mb-2">For Hospitals</h2>
            <p className="text-sm text-muted-foreground">Publish services and schemes, manage rosters and appointments, track analytics.</p>
          </article>
        </section>
      </main>
    </>
  );
}
