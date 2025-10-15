import Link from "next/link";
type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
}
export default function EmployeeDetails({ employee }: { employee: Employee & { salary: string } }) {
  return (
    <div className="border rounded-md p-6 shadow-md bg-black text-white">
      <Link href="/" className="text-blue-500 underline mb-4 block">
        ← Back to List
      </Link>
      <h1 className="text-2xl font-bold mb-2">{employee.name}</h1>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Salary:</strong> {employee.salary}</p>
    </div>
  );
}
