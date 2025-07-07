import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, X, User, Scale, MapPin, Calendar, Mail, Phone } from "lucide-react";

interface LawyerCardProps {
  lawyer: {
    id: string;
    name: string;
    email: string;
    phone: string;
    licenseNumber: string;
    barAdmission: string;
    specialization: string[];
    yearsExperience: number;
    location: string;
    status: "pending" | "approved" | "rejected";
    applicationDate: string;
    avatar?: string;
  };
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export function LawyerCard({ lawyer, onApprove, onReject }: LawyerCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success text-success-foreground";
      case "rejected":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-warning text-warning-foreground";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-[var(--shadow-elevated)] bg-[var(--gradient-card)] border border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 ring-2 ring-border">
              <AvatarImage src={lawyer.avatar} alt={lawyer.name} />
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                {getInitials(lawyer.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{lawyer.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Scale className="h-3 w-3" />
                License #{lawyer.licenseNumber}
              </p>
            </div>
          </div>
          <Badge className={getStatusColor(lawyer.status)}>
            {lawyer.status.charAt(0).toUpperCase() + lawyer.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-3 w-3" />
              <span>{lawyer.email}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-3 w-3" />
              <span>{lawyer.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{lawyer.location}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Applied: {new Date(lawyer.applicationDate).toLocaleDateString()}</span>
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Bar Admission:</span> {lawyer.barAdmission}
            </div>
            <div className="text-muted-foreground">
              <span className="font-medium">Experience:</span> {lawyer.yearsExperience} years
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Specializations:</p>
          <div className="flex flex-wrap gap-2">
            {lawyer.specialization.map((spec, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      {lawyer.status === "pending" && (
        <CardFooter className="flex gap-3 pt-4 border-t border-border">
          <Button
            variant="success"
            onClick={() => onApprove(lawyer.id)}
            className="flex-1 gap-2"
          >
            <Check className="h-4 w-4" />
            Approve
          </Button>
          <Button
            variant="destructive"
            onClick={() => onReject(lawyer.id)}
            className="flex-1 gap-2"
          >
            <X className="h-4 w-4" />
            Reject
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}