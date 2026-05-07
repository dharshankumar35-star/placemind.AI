"use client";

import { useData } from "@/lib/data-context";
import {
  getPlacementStats,
  getDegreeWisePlacements,
  getSpecialisationWisePlacements,
  getSalaryDistribution,
  getGenderWisePlacements,
  getWorkExpImpact,
  getHSCStreamPlacements,
} from "@/lib/placement-data";
import { KPICard } from "@/components/kpi-card";
import { ChartCard } from "@/components/chart-card";
import {
  Users,
  TrendingUp,
  DollarSign,
  Award,
  GraduationCap,
  Briefcase,
  Target,
  BarChart3,
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  Line,
} from "recharts";

const COLORS = [
  "oklch(0.65 0.2 265)",
  "oklch(0.55 0.22 170)",
  "oklch(0.7 0.18 80)",
  "oklch(0.6 0.2 30)",
  "oklch(0.5 0.2 320)",
];

export default function AnalyticsPage() {
  const { data, fileName } = useData();
  const stats = getPlacementStats(data);
  const degreeData = getDegreeWisePlacements(data);
  const specialisationData = getSpecialisationWisePlacements(data);
  const salaryData = getSalaryDistribution(data);
  const genderData = getGenderWisePlacements(data);
  const workExpData = getWorkExpImpact(data);
  const hscStreamData = getHSCStreamPlacements(data);

  // Calculate additional metrics
  const avgSSC =
    data.reduce((sum, d) => sum + d.ssc_p, 0) / data.length;
  const avgHSC =
    data.reduce((sum, d) => sum + d.hsc_p, 0) / data.length;
  const avgDegree =
    data.reduce((sum, d) => sum + d.degree_p, 0) / data.length;
  const avgMBA =
    data.reduce((sum, d) => sum + d.mba_p, 0) / data.length;

  const academicData = [
    { subject: "SSC", average: avgSSC.toFixed(1) },
    { subject: "HSC", average: avgHSC.toFixed(1) },
    { subject: "Degree", average: avgDegree.toFixed(1) },
    { subject: "MBA", average: avgMBA.toFixed(1) },
  ];

  // Placement vs Not Placed academic comparison
  const placedStudents = data.filter((d) => d.status === "Placed");
  const notPlacedStudents = data.filter((d) => d.status === "Not Placed");

  const comparisonData = [
    {
      metric: "SSC %",
      placed: (
        placedStudents.reduce((sum, d) => sum + d.ssc_p, 0) /
        placedStudents.length
      ).toFixed(1),
      notPlaced: (
        notPlacedStudents.reduce((sum, d) => sum + d.ssc_p, 0) /
        notPlacedStudents.length
      ).toFixed(1),
    },
    {
      metric: "HSC %",
      placed: (
        placedStudents.reduce((sum, d) => sum + d.hsc_p, 0) /
        placedStudents.length
      ).toFixed(1),
      notPlaced: (
        notPlacedStudents.reduce((sum, d) => sum + d.hsc_p, 0) /
        notPlacedStudents.length
      ).toFixed(1),
    },
    {
      metric: "Degree %",
      placed: (
        placedStudents.reduce((sum, d) => sum + d.degree_p, 0) /
        placedStudents.length
      ).toFixed(1),
      notPlaced: (
        notPlacedStudents.reduce((sum, d) => sum + d.degree_p, 0) /
        notPlacedStudents.length
      ).toFixed(1),
    },
    {
      metric: "MBA %",
      placed: (
        placedStudents.reduce((sum, d) => sum + d.mba_p, 0) /
        placedStudents.length
      ).toFixed(1),
      notPlaced: (
        notPlacedStudents.reduce((sum, d) => sum + d.mba_p, 0) /
        notPlacedStudents.length
      ).toFixed(1),
    },
  ];

  return (
    <div className="space-y-6 pt-12 lg:pt-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Advanced Analytics
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Deep insights and statistical analysis from {fileName}
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Placement Rate"
          value={`${stats.placementPercentage}%`}
          subtitle={`${stats.placedStudents} of ${stats.totalStudents}`}
          icon={Target}
        />
        <KPICard
          title="Avg Academic Score"
          value={`${avgMBA.toFixed(1)}%`}
          subtitle="MBA average"
          icon={GraduationCap}
          iconColor="text-accent"
        />
        <KPICard
          title="With Experience"
          value={`${data.filter((d) => d.workex === "Yes").length}`}
          subtitle="Students with work exp"
          icon={Briefcase}
        />
        <KPICard
          title="Salary Range"
          value={`₹${(stats.lowestPackage / 100000).toFixed(0)}-${(stats.highestPackage / 100000).toFixed(0)}L`}
          subtitle="Min to max"
          icon={DollarSign}
          iconColor="text-chart-3"
        />
      </div>

      {/* Academic Performance Comparison */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard
          title="Academic Performance: Placed vs Not Placed"
          description="Comparing average scores across academic stages"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={comparisonData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.22 0.01 280)"
                />
                <XAxis dataKey="metric" stroke="oklch(0.6 0 0)" fontSize={12} />
                <YAxis stroke="oklch(0.6 0 0)" fontSize={12} domain={[50, 80]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="placed"
                  fill={COLORS[0]}
                  name="Placed"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="notPlaced"
                  fill={COLORS[3]}
                  name="Not Placed"
                  radius={[4, 4, 0, 0]}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="HSC Stream Distribution"
          description="Placements by higher secondary stream"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={hscStreamData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="placed"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {hscStreamData.map((_, index) => (
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
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Work Experience Analysis */}
      <ChartCard
        title="Work Experience Impact Analysis"
        description="Detailed comparison of students with and without work experience"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workExpData} layout="vertical">
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
                  width={120}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="placed"
                  fill={COLORS[1]}
                  name="Placed"
                  radius={[0, 4, 4, 0]}
                />
                <Bar
                  dataKey="notPlaced"
                  fill={COLORS[3]}
                  name="Not Placed"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {workExpData.map((item) => (
              <div key={item.name} className="glass rounded-lg p-4">
                <h4 className="font-medium mb-2">{item.name}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Placed</p>
                    <p className="text-xl font-bold text-accent">{item.placed}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Salary</p>
                    <p className="text-xl font-bold">
                      ₹{(item.avgSalary / 100000).toFixed(2)}L
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ChartCard>

      {/* Salary Deep Dive */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard
          title="Salary Distribution Analysis"
          description="Distribution of salary packages across ranges"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salaryData}>
                <defs>
                  <linearGradient id="colorSalaryA" x1="0" y1="0" x2="0" y2="1">
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
                  fill="url(#colorSalaryA)"
                  strokeWidth={2}
                  name="Students"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="Gender Distribution"
          description="Placement outcomes by gender"
        >
          <div className="h-72">
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
                <Bar
                  dataKey="placed"
                  fill={COLORS[0]}
                  name="Placed"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="notPlaced"
                  fill={COLORS[4]}
                  name="Not Placed"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Degree & Specialisation */}
      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard
          title="Degree Type Analysis"
          description="Placements across different degree types"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={degreeData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.22 0.01 280)"
                />
                <XAxis dataKey="name" stroke="oklch(0.6 0 0)" fontSize={11} />
                <YAxis stroke="oklch(0.6 0 0)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "oklch(0.12 0.005 280)",
                    border: "1px solid oklch(0.22 0.01 280)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="placed"
                  fill={COLORS[0]}
                  name="Placed"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="notPlaced"
                  fill={COLORS[1]}
                  name="Not Placed"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard
          title="MBA Specialisation Performance"
          description="Comparing Mkt&HR vs Mkt&Fin"
        >
          <div className="h-72">
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
                <Bar
                  dataKey="placed"
                  fill={COLORS[0]}
                  name="Placed"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="notPlaced"
                  fill={COLORS[3]}
                  name="Not Placed"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Summary Insights */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Key Insights Summary
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="glass rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Top Finding</p>
            <p className="font-medium">
              Students with work experience have {" "}
              {(
                (workExpData[0].placed /
                  (workExpData[0].placed + workExpData[0].notPlaced)) *
                100
              ).toFixed(0)}
              % placement rate
            </p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Salary Insight</p>
            <p className="font-medium">
              Average salary differential: ₹
              {(
                (workExpData[0].avgSalary - workExpData[1].avgSalary) /
                1000
              ).toFixed(0)}
              K between experienced and freshers
            </p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Recommendation</p>
            <p className="font-medium">
              Focus on internship programs to improve overall placement rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
