import EmployeeList from "@/components/EmployeeList";
import fs from "fs";
import Link from "next/link";
import path from "path";
export const metadata ={
  title: "Employee Management",
}
export default async function Home() {
  const filePath = path.join(process.cwd(),"data","employees.json");
  const jsonData = await fs.readFileSync(filePath,"utf-8");
  const employees = JSON.parse(jsonData);
  console.log(employees);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Employee Management</h1>
      <EmployeeList employees={employees} />
      <Link href="/add" className="text-blue-500 hover:underline">
        Add New Employee
      </Link>
    </div>
  );
}
