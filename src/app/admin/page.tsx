import { DashboardButton } from "@/components/DashboardButton";
import { Bot, FileBadge } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center w-screen h-full">
      <div className="grid grid-cols-2 gap-5 place-content-center">
        <DashboardButton
          href="/admin/certificates"
          icon={FileBadge}
          title="Certificates"
        />
        <DashboardButton
          href="/admin/automations"
          icon={Bot}
          title="Automations"
        />
      </div>
    </div>
  );
}
