import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function DoctorDashboard() {
  return (
    <DashboardLayout role="doctor" title="Doctor Dashboard">
      <section className="grid lg:grid-cols-3 gap-6">
        <Card id="appointments" className="lg:col-span-2">
          <CardHeader><CardTitle>Appointments</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>09:30</TableCell>
                  <TableCell>Neha</TableCell>
                  <TableCell>Virtual</TableCell>
                  <TableCell><Button size="sm">Start</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11:00</TableCell>
                  <TableCell>Rahul</TableCell>
                  <TableCell>In‑person</TableCell>
                  <TableCell><Button size="sm" variant="outline">Details</Button></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card id="earnings">
          <CardHeader><CardTitle>Earnings & Performance</CardTitle></CardHeader>
          <CardContent className="space-y-1 text-sm">
            <div className="flex justify-between"><span>Month to date</span><span className="font-medium">₹ 82,400</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Consults</span><span>56</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Avg. rating</span><span>4.8</span></div>
          </CardContent>
        </Card>
      </section>

      <section id="patients" className="grid md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader><CardTitle>Assigned Patients</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Aman</TableCell>
                  <TableCell>12 Aug</TableCell>
                  <TableCell>Follow-up in 2 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Priya</TableCell>
                  <TableCell>10 Aug</TableCell>
                  <TableCell>Check blood pressure</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card id="prescriptions">
          <CardHeader><CardTitle>Quick Prescription</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">Select a patient and write a note.</p>
            <Button size="sm">Open editor</Button>
          </CardContent>
        </Card>
      </section>
    </DashboardLayout>
  );
}
