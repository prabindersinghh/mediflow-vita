import SiteHeader from "@/components/layout/SiteHeader";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <Seo title="Contact & Support – MediFlow Vita" description="Reach our team or start a quick chat with our support assistant." />
      <SiteHeader />
      <main className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8">
        <section>
          <h1 className="text-3xl font-bold mb-2">Contact & Support</h1>
          <p className="text-muted-foreground mb-6">We usually respond within 24 hours.</p>
          <form className="space-y-4 max-w-md">
            <Input placeholder="Your name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="How can we help?" rows={5} />
            <Button type="submit">Send message</Button>
          </form>
        </section>
        <aside className="rounded-lg border p-4 h-fit">
          <h2 className="font-semibold mb-2">Support Assistant</h2>
          <div className="h-64 rounded-md border bg-muted/50 mb-3 grid place-items-center text-muted-foreground">Chatbot coming soon</div>
          <Button variant="outline">Start a quick chat</Button>
        </aside>
      </main>
    </>
  );
}
