import fs from "fs";
import path from "path";
import EmployeeDetails from "@/components/EmployeeDetails";

interface EmployeePageProps {
  params: {
    id: string;
  };
}
export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  salary: string;
}

export default async function EmployeeDetailPage({ params }: EmployeePageProps) {
  const filePath = path.join(process.cwd(), "data", "employees.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const employees: Employee[] = JSON.parse(jsonData);

  const employee = employees.find((e) => e.id.toString() === params.id);

  if (!employee) {
    return <div className="p-8 text-red-500">Employee not found</div>;
  }

  return (
    <main className="p-8">
      <EmployeeDetails employee={employee} />
    </main>
  );
}
