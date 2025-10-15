"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

export default function EmployeeList({ employees }: { employees: Employee[] }) {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await fetch("/api/employees", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    router.refresh(); 
  };

  return (
    <div className="grid gap-4">
      {employees.map((emp) => (
        <div
          key={emp.id}
          className="border p-4 rounded-md flex justify-between items-center"
        >
          <Link href={`/employee/${emp.id}`}>
            <div>
              <h2 className="font-semibold">{emp.name}</h2>
              <p className="text-sm text-gray-600">{emp.position}</p>
              <p className="text-sm text-gray-600">{emp.department}</p>
            </div>
          </Link>
          <button
            onClick={() => handleDelete(emp.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
