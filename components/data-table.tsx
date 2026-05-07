"use client";

import { type PlacementRecord } from "@/lib/placement-data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface DataTableProps {
  data: PlacementRecord[];
  pageSize?: number;
}

export function DataTable({ data, pageSize = 10 }: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  const columns = [
    { key: "sl_no", label: "ID" },
    { key: "gender", label: "Gender" },
    { key: "ssc_p", label: "SSC %" },
    { key: "hsc_p", label: "HSC %" },
    { key: "degree_t", label: "Degree" },
    { key: "specialisation", label: "Specialisation" },
    { key: "workex", label: "Work Exp" },
    { key: "status", label: "Status" },
    { key: "salary", label: "Salary" },
  ];

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {currentData.map((row, idx) => (
              <tr
                key={row.sl_no}
                className={cn(
                  "transition-colors hover:bg-secondary/50",
                  idx % 2 === 0 ? "bg-transparent" : "bg-secondary/20"
                )}
              >
                <td className="px-4 py-3 text-sm whitespace-nowrap">{row.sl_no}</td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    row.gender === "M" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                  )}>
                    {row.gender === "M" ? "Male" : "Female"}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">{row.ssc_p.toFixed(1)}</td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">{row.hsc_p.toFixed(1)}</td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">{row.degree_t}</td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">{row.specialisation}</td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    row.workex === "Yes" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                  )}>
                    {row.workex}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    row.status === "Placed" ? "bg-green-500/20 text-green-400" : "bg-destructive/20 text-destructive"
                  )}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap font-mono">
                  {row.salary ? `₹${(row.salary / 100000).toFixed(1)}L` : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of {data.length} results
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium px-3">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
