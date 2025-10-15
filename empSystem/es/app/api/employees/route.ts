import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "employees.json");

function readEmployees(){
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return data;
}

function writeEmployees(data:any){
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
    const employees = readEmployees();
    return NextResponse.json(employees);
}

export async function POST(request: Request) {
    const newEmployee = await request.json();
    const employees = readEmployees();
    newEmployee.id = Date.now();
    employees.push(newEmployee)
    writeEmployees(employees);
    return NextResponse.json(newEmployee, { status: 201 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const employees = readEmployees().filter(
    (e: any) => e.id.toString() !== id.toString()
  );
  writeEmployees(employees);
  return NextResponse.json({ success: true });
}