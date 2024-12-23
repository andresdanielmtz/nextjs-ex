"use client"

import { TableDemo } from "@/components/project/Table"

export default function Example() {
    return (
        <div className="w-screen">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Invoices
            </h1>
            <TableDemo />
        </div>
    )
}