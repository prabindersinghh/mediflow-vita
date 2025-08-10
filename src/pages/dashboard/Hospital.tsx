import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function HospitalDashboard() {
  return (
    <DashboardLayout role="hospital" title="Hospital Dashboard">
      <section className="grid lg:grid-cols-3 gap-6">
        <Card id="profile">
          <CardHeader><CardTitle>Profile & Services</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <div className="rounded-lg border p-3">City Care Hospital</div>
            <Button size="sm" variant="outline">Edit profile</Button>
          </CardContent>
        </Card>
        <Card id="schemes" className="lg:col-span-2">
          <CardHeader><CardTitle>Schemes & Offers</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Scheme</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Wellness Gold</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell><Button size="sm">Manage</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Diagnostic Saver</TableCell>
                  <TableCell>Draft</TableCell>
                  <TableCell><Button size="sm" variant="outline">Publish</Button></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      <section id="appointments" className="grid md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader><CardTitle>Appointments</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>18 Aug</TableCell>
                  <TableCell>Dr. Sharma</TableCell>
                  <TableCell>12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>18 Aug</TableCell>
                  <TableCell>Dr. Khan</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card id="reports">
          <CardHeader><CardTitle>Reports & Analytics</CardTitle></CardHeader>
          <CardContent>
            <div className="rounded-lg border h-56 grid place-items-center text-muted-foreground">Charts placeholder</div>
          </CardContent>
        </Card>
      </section>
    </DashboardLayout>
  );
}
