import { DashboardButton } from "@/components/DashboardButton";
import { Medal } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center w-screen h-full">
      <div className="grid gap-5 place-content-center">
        <DashboardButton
          href="/admin/certificate"
          icon={Medal}
          title="Certificate"
        />
      </div>
    </div>
  );
}
