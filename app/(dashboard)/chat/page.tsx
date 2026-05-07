"use client";

import { useState, useRef, useEffect } from "react";
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
import { ChatMessage, SQLBlock, InsightCard } from "@/components/chat-message";
import { ChartCard } from "@/components/chart-card";
import { Send, Sparkles, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  Legend,
} from "recharts";

const COLORS = [
  "oklch(0.65 0.2 265)",
  "oklch(0.55 0.22 170)",
  "oklch(0.7 0.18 80)",
  "oklch(0.6 0.2 30)",
  "oklch(0.5 0.2 320)",
];

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  query?: string;
  chartType?: "bar" | "pie" | "table";
  chartData?: Record<string, unknown>[];
  insights?: string[];
}

const suggestedQuestions = [
  "What is the overall placement rate?",
  "Show me salary distribution",
  "Which department has the best placements?",
  "Does work experience affect placement?",
  "Compare male vs female placements",
  "What is the highest package offered?",
];

export default function ChatPage() {
  const { data, isDataLoaded, fileName } = useData();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processQuery = (query: string): Message => {
    const lowerQuery = query.toLowerCase();
    const stats = getPlacementStats(data);

    // Placement rate query
    if (
      lowerQuery.includes("placement rate") ||
      lowerQuery.includes("overall") ||
      lowerQuery.includes("how many placed")
    ) {
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `Based on my analysis of your placement data, the **overall placement rate is ${stats.placementPercentage}%**.\n\nOut of ${stats.totalStudents} students in the dataset:\n- ${stats.placedStudents} students were successfully placed\n- ${stats.notPlacedStudents} students were not placed`,
        query: `SELECT 
  COUNT(*) as total_students,
  SUM(CASE WHEN status = 'Placed' THEN 1 ELSE 0 END) as placed,
  ROUND(SUM(CASE WHEN status = 'Placed' THEN 1.0 ELSE 0 END) / COUNT(*) * 100, 2) as placement_rate
FROM placement_data;`,
        chartType: "pie",
        chartData: [
          { name: "Placed", value: stats.placedStudents },
          { name: "Not Placed", value: stats.notPlacedStudents },
        ],
        insights: [
          `${stats.placementPercentage}% placement rate is competitive`,
          "Focus on improving support for the remaining students",
          "Consider analyzing factors affecting unplaced students",
        ],
      };
    }

    // Salary distribution
    if (
      lowerQuery.includes("salary") ||
      lowerQuery.includes("package") ||
      lowerQuery.includes("ctc")
    ) {
      const salaryData = getSalaryDistribution(data);
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `Here's the salary distribution analysis:\n\n**Average Package:** ₹${(stats.avgPackage / 100000).toFixed(2)} LPA\n**Highest Package:** ₹${(stats.highestPackage / 100000).toFixed(1)} LPA\n**Lowest Package:** ₹${(stats.lowestPackage / 100000).toFixed(1)} LPA`,
        query: `SELECT 
  CASE 
    WHEN salary < 200000 THEN '< 2L'
    WHEN salary BETWEEN 200000 AND 249999 THEN '2L-2.5L'
    WHEN salary BETWEEN 250000 AND 299999 THEN '2.5L-3L'
    WHEN salary BETWEEN 300000 AND 349999 THEN '3L-3.5L'
    WHEN salary BETWEEN 350000 AND 399999 THEN '3.5L-4L'
    ELSE '> 4L'
  END as salary_range,
  COUNT(*) as count
FROM placement_data
WHERE salary IS NOT NULL
GROUP BY salary_range;`,
        chartType: "bar",
        chartData: salaryData,
        insights: [
          "Most packages fall in the ₹2L-3L range",
          `Top performers earned up to ₹${(stats.highestPackage / 100000).toFixed(1)} LPA`,
          "Consider skills training to increase higher package placements",
        ],
      };
    }

    // Department/degree wise
    if (
      lowerQuery.includes("department") ||
      lowerQuery.includes("degree") ||
      lowerQuery.includes("branch")
    ) {
      const degreeData = getDegreeWisePlacements(data);
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `Here's the department-wise placement analysis:\n\n${degreeData.map((d) => `**${d.name}:** ${d.placed} placed out of ${d.total} (${((d.placed / d.total) * 100).toFixed(1)}%)`).join("\n")}`,
        query: `SELECT 
  degree_t,
  COUNT(*) as total,
  SUM(CASE WHEN status = 'Placed' THEN 1 ELSE 0 END) as placed,
  SUM(CASE WHEN status = 'Not Placed' THEN 1 ELSE 0 END) as not_placed
FROM placement_data
GROUP BY degree_t;`,
        chartType: "bar",
        chartData: degreeData,
        insights: [
          "Comm&Mgmt has the highest number of students",
          "Sci&Tech shows strong placement performance",
          "Consider targeted programs for lower-performing departments",
        ],
      };
    }

    // Work experience
    if (
      lowerQuery.includes("work experience") ||
      lowerQuery.includes("workex") ||
      lowerQuery.includes("experience")
    ) {
      const workExpData = getWorkExpImpact(data);
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `Analysis of work experience impact on placements:\n\n**With Work Experience:**\n- Placed: ${workExpData[0].placed}\n- Not Placed: ${workExpData[0].notPlaced}\n- Avg Salary: ₹${(workExpData[0].avgSalary / 100000).toFixed(2)} LPA\n\n**Without Work Experience:**\n- Placed: ${workExpData[1].placed}\n- Not Placed: ${workExpData[1].notPlaced}\n- Avg Salary: ₹${(workExpData[1].avgSalary / 100000).toFixed(2)} LPA`,
        query: `SELECT 
  workex,
  COUNT(*) as total,
  SUM(CASE WHEN status = 'Placed' THEN 1 ELSE 0 END) as placed,
  AVG(salary) as avg_salary
FROM placement_data
GROUP BY workex;`,
        chartType: "bar",
        chartData: workExpData,
        insights: [
          "Work experience positively impacts placement chances",
          "Experienced candidates tend to get higher packages",
          "Encourage internships and industrial training",
        ],
      };
    }

    // Gender comparison
    if (
      lowerQuery.includes("male") ||
      lowerQuery.includes("female") ||
      lowerQuery.includes("gender")
    ) {
      const genderData = getGenderWisePlacements(data);
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `Gender-wise placement analysis:\n\n**Male Students:**\n- Placed: ${genderData[0].placed}\n- Not Placed: ${genderData[0].notPlaced}\n- Placement Rate: ${((genderData[0].placed / (genderData[0].placed + genderData[0].notPlaced)) * 100).toFixed(1)}%\n\n**Female Students:**\n- Placed: ${genderData[1].placed}\n- Not Placed: ${genderData[1].notPlaced}\n- Placement Rate: ${((genderData[1].placed / (genderData[1].placed + genderData[1].notPlaced)) * 100).toFixed(1)}%`,
        query: `SELECT 
  gender,
  COUNT(*) as total,
  SUM(CASE WHEN status = 'Placed' THEN 1 ELSE 0 END) as placed,
  SUM(CASE WHEN status = 'Not Placed' THEN 1 ELSE 0 END) as not_placed
FROM placement_data
GROUP BY gender;`,
        chartType: "bar",
        chartData: genderData,
        insights: [
          "Male students form the majority of the dataset",
          "Both genders show comparable placement rates",
          "Consider gender-specific career guidance programs",
        ],
      };
    }

    // Highest package
    if (
      lowerQuery.includes("highest") ||
      lowerQuery.includes("top") ||
      lowerQuery.includes("best")
    ) {
      const topStudents = [...data]
        .filter((d) => d.salary !== null)
        .sort((a, b) => (b.salary || 0) - (a.salary || 0))
        .slice(0, 5);

      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `**Top 5 Highest Packages:**\n\n${topStudents.map((s, i) => `${i + 1}. ₹${((s.salary || 0) / 100000).toFixed(1)} LPA - ${s.degree_t}, ${s.specialisation}`).join("\n")}`,
        query: `SELECT sl_no, degree_t, specialisation, salary
FROM placement_data
WHERE salary IS NOT NULL
ORDER BY salary DESC
LIMIT 5;`,
        insights: [
          `Highest package: ₹${(stats.highestPackage / 100000).toFixed(1)} LPA`,
          "Top earners often have strong academic records",
          "Sci&Tech and Mkt&Fin specialisations perform well",
        ],
      };
    }

    // Specialisation
    if (
      lowerQuery.includes("special") ||
      lowerQuery.includes("mba") ||
      lowerQuery.includes("mkt")
    ) {
      const specData = getSpecialisationWisePlacements(data);
      return {
        id: Date.now().toString(),
        role: "assistant",
        content: `MBA Specialisation-wise placement analysis:\n\n${specData.map((d) => `**${d.name}:** ${d.placed} placed, ${d.notPlaced} not placed`).join("\n")}`,
        query: `SELECT 
  specialisation,
  SUM(CASE WHEN status = 'Placed' THEN 1 ELSE 0 END) as placed,
  SUM(CASE WHEN status = 'Not Placed' THEN 1 ELSE 0 END) as not_placed
FROM placement_data
GROUP BY specialisation;`,
        chartType: "bar",
        chartData: specData,
        insights: [
          "Mkt&Fin has higher placement numbers",
          "Both specialisations show good industry demand",
          "Consider market trends when advising students",
        ],
      };
    }

    // Default response
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: `I analyzed your query but need more specific keywords. Try asking about:\n\n- **Placement rate** - Overall statistics\n- **Salary/Package** - Compensation analysis\n- **Department/Degree** - Branch-wise data\n- **Work experience** - Impact analysis\n- **Gender** - Male vs female comparison\n- **Highest package** - Top performers`,
      insights: [
        "Try asking specific questions about your data",
        "Use keywords like 'salary', 'department', 'gender'",
        "I can generate charts and SQL queries for you",
      ],
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = processQuery(userMessage.content);
    setMessages((prev) => [...prev, response]);
    setIsLoading(false);
  };

  const handleSuggestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] pt-12 lg:pt-0">
      {/* Header */}
      <div className="flex-shrink-0 pb-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Chat with Data
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Ask questions about your placement data in natural language
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 glass px-3 py-2 rounded-lg">
            <Database className="h-4 w-4 text-primary" />
            <span className="text-sm">{fileName}</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-2">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Start a Conversation</h3>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Ask me anything about your placement data. I can analyze trends,
              generate charts, and provide insights.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestion(question)}
                  className="glass px-3 py-2 rounded-lg text-sm hover:bg-secondary transition-colors text-left"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              >
                {message.role === "assistant" && (
                  <div className="space-y-3 mt-3">
                    {message.query && <SQLBlock query={message.query} />}

                    {message.chartData && message.chartType && (
                      <ChartCard title="Generated Visualization" className="mt-3">
                        <div className="h-48">
                          <ResponsiveContainer width="100%" height="100%">
                            {message.chartType === "pie" ? (
                              <PieChart>
                                <Pie
                                  data={message.chartData}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={40}
                                  outerRadius={60}
                                  paddingAngle={5}
                                  dataKey="value"
                                >
                                  {message.chartData.map((_, index) => (
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
                            ) : (
                              <BarChart data={message.chartData}>
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  stroke="oklch(0.22 0.01 280)"
                                />
                                <XAxis
                                  dataKey={
                                    Object.keys(message.chartData[0])[0]
                                  }
                                  stroke="oklch(0.6 0 0)"
                                  fontSize={10}
                                />
                                <YAxis stroke="oklch(0.6 0 0)" fontSize={10} />
                                <Tooltip
                                  contentStyle={{
                                    backgroundColor: "oklch(0.12 0.005 280)",
                                    border: "1px solid oklch(0.22 0.01 280)",
                                    borderRadius: "8px",
                                  }}
                                />
                                <Bar
                                  dataKey={
                                    Object.keys(message.chartData[0]).includes(
                                      "placed"
                                    )
                                      ? "placed"
                                      : Object.keys(message.chartData[0])[1]
                                  }
                                  fill={COLORS[0]}
                                  radius={[4, 4, 0, 0]}
                                />
                                {Object.keys(message.chartData[0]).includes(
                                  "notPlaced"
                                ) && (
                                  <Bar
                                    dataKey="notPlaced"
                                    fill={COLORS[3]}
                                    radius={[4, 4, 0, 0]}
                                  />
                                )}
                              </BarChart>
                            )}
                          </ResponsiveContainer>
                        </div>
                      </ChartCard>
                    )}

                    {message.insights && (
                      <InsightCard
                        title="Key Insights & Recommendations"
                        insights={message.insights}
                      />
                    )}
                  </div>
                )}
              </ChatMessage>
            ))}
            {isLoading && (
              <ChatMessage role="assistant" content="" isLoading />
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Form */}
      <div className="flex-shrink-0 pt-4 border-t border-border">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about your data..."
              className="w-full px-4 py-3 glass-card rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 pr-12"
              disabled={isLoading}
            />
            <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-2">
          PlaceMind AI can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}
