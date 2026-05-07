"use client";

import { useData } from "@/lib/data-context";
import {
  getPlacementStats,
  getDegreeWisePlacements,
  getSpecialisationWisePlacements,
  getSalaryDistribution,
  getGenderWisePlacements,
  getWorkExpImpact,
} from "@/lib/placement-data";
import { KPICard } from "@/components/kpi-card";
import { ChartCard } from "@/components/chart-card";
import { DataTable } from "@/components/data-table";
import {
  Users,
  TrendingUp,
  DollarSign,
  Award,
  FileText,
  RefreshCw,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend,
} from "recharts";

const COLORS = [
  "oklch(0.65 0.2 265)",
  "oklch(0.55 0.22 170)",
  "oklch(0.7 0.18 80)",
  "oklch(0.6 0.2 30)",
  "oklch(0.5 0.2 320)",
];

export default function DashboardPage() {
  const { data, fileName, isDataLoaded } = useData();
  const stats = getPlacementStats(data);
  const degreeData = getDegreeWisePlacements(data);
  const specialisationData = getSpecialisationWisePlacements(data);
  const salaryData = getSalaryDistribution(data);
  const genderData = getGenderWisePlacements(data);
  const workExpData = getWorkExpImpact(data);

  const placementPieData = [
    { name: "Placed", value: stats.placedStudents },
    { name: "Not Placed", value: stats.notPlacedStudents },
  ];

  return (
    <div className="space-y-6 pt-12 lg:pt-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Overview of placement data from {fileName}
          </p>
        </div>
        <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
          <FileText className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{data.length} Records</span>
          <RefreshCw className="h-4 w-4 text-muted-foreground ml-2" />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Students"
          value={stats.totalStudents}
          subtitle={`${stats.placedStudents} placed`}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <KPICard
          title="Placement Rate"
          value={`${stats.placementPercentage}%`}
          subtitle="Successfully placed"
          icon={TrendingUp}
          iconColor="text-accent"
          trend={{ value: 5.2, isPositive: true }}
        />
        <KPICard
          title="Average Package"
          value={`₹${(stats.avgPackage / 100000).toFixed(2)}L`}
          subtitle="Per annum"
          icon={DollarSign}
          trend={{ value: 8.5, isPositive: true }}
        />
        <KPICard
          title="Highest Package"
          value={`₹${(stats.highestPackage / 100000).toFixed(1)}L`}
          subtitle="Top offer"
          icon={Award}
          iconColor="text-chart-3"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Placement Status Pie Chart */}
        <ChartCard
          title="Placement Status"
          description="Distribution of placed vs not placed students"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={placementPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {placementPieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Degree-wise Placements */}
        <ChartCard
          title="Department-wise Placements"
          description="Placements across different degree types"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={degreeData} layout="vertical">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.22 0.01 280)"
                />
                <XAxis type="number" stroke="oklch(0.6 0 0)" fontSize={12} />
                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="oklch(0.6 0 0)"
                  fontSize={12}
                  width={80}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="placed" fill={COLORS[0]} name="Placed" radius={[0, 4, 4, 0]} />
                <Bar dataKey="notPlaced" fill={COLORS[1]} name="Not Placed" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Salary Distribution */}
        <ChartCard
          title="Salary Distribution"
          description="Distribution of salary packages"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salaryData}>
                <defs>
                  <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.22 0.01 280)"
                />
                <XAxis dataKey="range" stroke="oklch(0.6 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.6 0 0)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke={COLORS[0]}
                  fill="url(#colorSalary)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Specialisation-wise */}
        <ChartCard
          title="Specialisation-wise Placements"
          description="Placements by MBA specialisation"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={specialisationData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.22 0.01 280)"
                />
                <XAxis dataKey="name" stroke="oklch(0.6 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.6 0 0)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="placed" fill={COLORS[0]} name="Placed" radius={[4, 4, 0, 0]} />
                <Bar dataKey="notPlaced" fill={COLORS[3]} name="Not Placed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Charts Row 3 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Gender-wise */}
        <ChartCard
          title="Gender-wise Distribution"
          description="Placement distribution by gender"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={genderData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.22 0.01 280)"
                />
                <XAxis dataKey="name" stroke="oklch(0.6 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.6 0 0)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="placed" fill={COLORS[0]} name="Placed" radius={[4, 4, 0, 0]} />
                <Bar dataKey="notPlaced" fill={COLORS[4]} name="Not Placed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        {/* Work Experience Impact */}
        <ChartCard
          title="Work Experience Impact"
          description="Effect of prior work experience on placements"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workExpData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.22 0.01 280)"
                />
                <XAxis dataKey="name" stroke="oklch(0.6 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.6 0 0)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="placed" fill={COLORS[1]} name="Placed" radius={[4, 4, 0, 0]} />
                <Bar dataKey="notPlaced" fill={COLORS[3]} name="Not Placed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Data Table */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Data Preview</h2>
        <DataTable data={data} pageSize={10} />
      </div>
    </div>
  );
}
