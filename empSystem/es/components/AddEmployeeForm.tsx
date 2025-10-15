'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEmployeeForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        department: "",
        email: "",
        phone: "",
        salary: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/employees',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        router.push('/');
        router.refresh();
    }
    return (
        <form onSubmit={handleSubmit} className="grid gap-3 max-w-md">
            {Object.keys(formData).map((key) => (
                <input
                    key={key}
                    name={key}
                    placeholder={key[0].toUpperCase() + key.slice(1)}
                    value={(formData as any)[key]}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
            ))}
            <button>
                submit
            </button>
        </form>
    )
}