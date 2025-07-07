import { useState } from "react";
import { LawyerCard } from "./LawyerCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Users, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockLawyers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@lawfirm.com",
    phone: "+1 (555) 123-4567",
    licenseNumber: "LIC-2024-001",
    barAdmission: "New York State Bar, 2018",
    specialization: ["Corporate Law", "Contract Law", "Mergers & Acquisitions"],
    yearsExperience: 6,
    location: "New York, NY",
    status: "pending" as const,
    applicationDate: "2024-01-15",
    avatar: undefined,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@legalservices.com",
    phone: "+1 (555) 987-6543",
    licenseNumber: "LIC-2024-002",
    barAdmission: "California State Bar, 2015",
    specialization: ["Criminal Defense", "Civil Rights"],
    yearsExperience: 9,
    location: "Los Angeles, CA",
    status: "approved" as const,
    applicationDate: "2024-01-12",
    avatar: undefined,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@familylaw.org",
    phone: "+1 (555) 456-7890",
    licenseNumber: "LIC-2024-003",
    barAdmission: "Texas State Bar, 2020",
    specialization: ["Family Law", "Divorce Mediation", "Child Custody"],
    yearsExperience: 4,
    location: "Austin, TX",
    status: "pending" as const,
    applicationDate: "2024-01-18",
    avatar: undefined,
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@patentlaw.com",
    phone: "+1 (555) 321-0987",
    licenseNumber: "LIC-2024-004",
    barAdmission: "Illinois State Bar, 2012",
    specialization: ["Intellectual Property", "Patent Law", "Technology Law"],
    yearsExperience: 12,
    location: "Chicago, IL",
    status: "rejected" as const,
    applicationDate: "2024-01-10",
    avatar: undefined,
  },
];

export function LawyerApprovalDashboard() {
  const [lawyers, setLawyers] = useState(mockLawyers);
  const { toast } = useToast();

  const handleApprove = (id: string) => {
    setLawyers(prev =>
      prev.map(lawyer =>
        lawyer.id === id ? { ...lawyer, status: "approved" as const } : lawyer
      )
    );
    
    const lawyer = lawyers.find(l => l.id === id);
    toast({
      title: "Lawyer Approved",
      description: `${lawyer?.name} has been approved successfully.`,
    });
  };

  const handleReject = (id: string) => {
    setLawyers(prev =>
      prev.map(lawyer =>
        lawyer.id === id ? { ...lawyer, status: "rejected" as const } : lawyer
      )
    );
    
    const lawyer = lawyers.find(l => l.id === id);
    toast({
      title: "Application Rejected",
      description: `${lawyer?.name}'s application has been rejected.`,
      variant: "destructive",
    });
  };

  const stats = {
    total: lawyers.length,
    pending: lawyers.filter(l => l.status === "pending").length,
    approved: lawyers.filter(l => l.status === "approved").length,
    rejected: lawyers.filter(l => l.status === "rejected").length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-[var(--gradient-header)] text-primary-foreground p-6 shadow-[var(--shadow-elevated)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Legal Admin Approval Hub</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            Review and approve lawyer registration applications
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[var(--gradient-card)] border border-border shadow-[var(--shadow-card)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Applications
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.total}</div>
            </CardContent>
          </Card>

          <Card className="bg-[var(--gradient-card)] border border-border shadow-[var(--shadow-card)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Review
              </CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.pending}</div>
              <Badge variant="secondary" className="mt-1">
                Requires Action
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-[var(--gradient-card)] border border-border shadow-[var(--shadow-card)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Approved
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.approved}</div>
            </CardContent>
          </Card>

          <Card className="bg-[var(--gradient-card)] border border-border shadow-[var(--shadow-card)]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Rejected
              </CardTitle>
              <div className="h-4 w-4 bg-destructive rounded-full" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{stats.rejected}</div>
            </CardContent>
          </Card>
        </div>

        {/* Lawyers Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            Lawyer Applications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {lawyers.map((lawyer) => (
              <LawyerCard
                key={lawyer.id}
                lawyer={lawyer}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}