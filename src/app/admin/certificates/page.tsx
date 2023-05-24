import { Toolbar } from "@/components/Toolbar";

export default function Certificates() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div id="toolbar" className="flex items-center justify-end w-2/4">
        <Toolbar createNewObjUrl="#" objectName="certificate" />
      </div>
    </div>
  );
}
