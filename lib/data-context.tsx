"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { placementData, type PlacementRecord } from "./placement-data";

interface DataContextType {
  data: PlacementRecord[];
  setData: (data: PlacementRecord[]) => void;
  isDataLoaded: boolean;
  fileName: string;
  setFileName: (name: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PlacementRecord[]>(placementData);
  const [fileName, setFileName] = useState<string>("placement_data.csv");

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isDataLoaded: data.length > 0,
        fileName,
        setFileName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
