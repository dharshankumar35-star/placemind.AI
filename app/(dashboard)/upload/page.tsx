"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/lib/data-context";
import { type PlacementRecord } from "@/lib/placement-data";
import Papa from "papaparse";
import {
  Upload,
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  X,
  ArrowRight,
  Database,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function UploadPage() {
  const router = useRouter();
  const { setData, setFileName } = useData();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<PlacementRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [recordCount, setRecordCount] = useState(0);

  const processFile = useCallback((file: File) => {
    setUploadState("uploading");
    setUploadedFile(file);
    setError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const rawData = results.data as Record<string, string>[];
          
          // Transform and validate data
          const transformedData: PlacementRecord[] = rawData.map((row, idx) => ({
            sl_no: parseInt(row.sl_no) || idx + 1,
            gender: row.gender || "M",
            ssc_p: parseFloat(row.ssc_p) || 0,
            ssc_b: row.ssc_b || "Others",
            hsc_p: parseFloat(row.hsc_p) || 0,
            hsc_b: row.hsc_b || "Others",
            hsc_s: row.hsc_s || "Commerce",
            degree_p: parseFloat(row.degree_p) || 0,
            degree_t: row.degree_t || "Comm&Mgmt",
            workex: row.workex || "No",
            etest_p: parseFloat(row.etest_p) || 0,
            specialisation: row.specialisation || "Mkt&HR",
            mba_p: parseFloat(row.mba_p) || 0,
            status: row.status || "Not Placed",
            salary: row.salary ? parseFloat(row.salary) : null,
          }));

          if (transformedData.length === 0) {
            throw new Error("No valid records found in the file");
          }

          setPreviewData(transformedData.slice(0, 5));
          setRecordCount(transformedData.length);
          setData(transformedData);
          setFileName(file.name);
          setUploadState("success");
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to parse file");
          setUploadState("error");
        }
      },
      error: (err) => {
        setError(err.message);
        setUploadState("error");
      },
    });
  }, [setData, setFileName]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file && (file.type === "text/csv" || file.name.endsWith(".csv"))) {
        processFile(file);
      } else {
        setError("Please upload a CSV file");
        setUploadState("error");
      }
    },
    [processFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        processFile(file);
      }
    },
    [processFile]
  );

  const resetUpload = () => {
    setUploadState("idle");
    setUploadedFile(null);
    setPreviewData([]);
    setError(null);
    setRecordCount(0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pt-12 lg:pt-0">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Upload Dataset</h1>
        <p className="text-muted-foreground">
          Upload your placement data in CSV format to start analyzing
        </p>
      </div>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300",
          isDragging
            ? "border-primary bg-primary/5 scale-[1.02]"
            : "border-border hover:border-primary/50",
          uploadState === "success" && "border-accent bg-accent/5",
          uploadState === "error" && "border-destructive bg-destructive/5"
        )}
      >
        {uploadState === "idle" && (
          <>
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Drag and drop your file here
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              or click to browse from your computer
            </p>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button className="pointer-events-none">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Choose File
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Supported formats: CSV (max 10MB)
            </p>
          </>
        )}

        {uploadState === "uploading" && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 animate-pulse">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Processing file...</h3>
            <p className="text-muted-foreground text-sm">
              Analyzing {uploadedFile?.name}
            </p>
            <div className="w-48 h-1 bg-secondary rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-primary animate-shimmer" />
            </div>
          </div>
        )}

        {uploadState === "success" && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload Successful!</h3>
            <p className="text-muted-foreground text-sm">
              {uploadedFile?.name} - {recordCount} records loaded
            </p>
            <div className="flex gap-3 mt-4">
              <Button variant="outline" onClick={resetUpload}>
                Upload Another
              </Button>
              <Button
                onClick={() => router.push("/dashboard")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                View Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {uploadState === "error" && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-destructive/20 flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload Failed</h3>
            <p className="text-destructive text-sm mb-4">{error}</p>
            <Button variant="outline" onClick={resetUpload}>
              <X className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </div>
        )}
      </div>

      {/* Preview Section */}
      {uploadState === "success" && previewData.length > 0 && (
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="font-medium">Data Preview</span>
            <span className="text-xs text-muted-foreground ml-auto">
              Showing first 5 records
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
                    ID
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
                    Gender
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
                    Degree
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
                    Specialisation
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {previewData.map((row) => (
                  <tr key={row.sl_no} className="hover:bg-secondary/20">
                    <td className="px-3 py-2">{row.sl_no}</td>
                    <td className="px-3 py-2">
                      {row.gender === "M" ? "Male" : "Female"}
                    </td>
                    <td className="px-3 py-2">{row.degree_t}</td>
                    <td className="px-3 py-2">{row.specialisation}</td>
                    <td className="px-3 py-2">
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-full text-xs font-medium",
                          row.status === "Placed"
                            ? "bg-accent/20 text-accent"
                            : "bg-destructive/20 text-destructive"
                        )}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 font-mono">
                      {row.salary
                        ? `₹${(row.salary / 100000).toFixed(1)}L`
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="font-semibold mb-4">File Requirements</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">CSV Format</p>
              <p className="text-xs text-muted-foreground">
                File must be comma-separated values
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Headers Required</p>
              <p className="text-xs text-muted-foreground">
                First row should contain column names
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Placement Data</p>
              <p className="text-xs text-muted-foreground">
                Include status, salary, and demographics
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Max 10MB</p>
              <p className="text-xs text-muted-foreground">
                File size should not exceed 10 megabytes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
