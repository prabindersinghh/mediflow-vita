import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PatientDashboard() {
  return (
    <DashboardLayout role="patient" title="Patient Dashboard">
      <section className="grid lg:grid-cols-3 gap-6">
        <Card id="virtual" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Virtual Doctor</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-lg border bg-muted/50 h-72 grid place-items-center text-muted-foreground">Camera preview</div>
            <div className="rounded-lg border p-3 flex flex-col">
              <div className="flex-1 space-y-2 overflow-y-auto">
                <div className="text-sm text-muted-foreground">Doctor will join shortly. Share your concerns.</div>
              </div>
              <div className="mt-3 flex gap-2">
                <Input placeholder="Type your message..." />
                <Button>Send</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Upcoming Appointments</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>18 Aug, 10:00</TableCell>
                  <TableCell>Dr. Arjun</TableCell>
                  <TableCell>Virtual</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>22 Aug, 16:30</TableCell>
                  <TableCell>Dr. Meera</TableCell>
                  <TableCell>In‑person</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section id="history" className="grid md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader><CardTitle>Medical History</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Record</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>05 Aug</TableCell>
                  <TableCell>Blood Test</TableCell>
                  <TableCell>Normal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>27 Jul</TableCell>
                  <TableCell>X‑Ray</TableCell>
                  <TableCell>Review</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card id="appointments">
          <CardHeader><CardTitle>Book Appointment</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Doctor or Hospital" />
            <Input type="date" />
            <div className="flex gap-2">
              <Button>Book Online</Button>
              <Button variant="outline">Book In‑person</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="schemes" className="grid md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader><CardTitle>Hospital Schemes</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-lg border p-4">Wellness Program – 20% off on diagnostics.</div>
            <div className="rounded-lg border p-4">Cardio Care Package – Annual subscription.</div>
          </CardContent>
        </Card>
        <Card id="notifications">
          <CardHeader><CardTitle>Notifications</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-lg border p-3">Your test results are ready.</div>
            <div className="rounded-lg border p-3">New offer: 10% off video consults.</div>
          </CardContent>
        </Card>
      </section>
    </DashboardLayout>
  );
}
