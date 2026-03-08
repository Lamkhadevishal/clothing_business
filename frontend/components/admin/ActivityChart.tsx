"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", views: 4000, orders: 240 },
  { name: "Tue", views: 3000, orders: 198 },
  { name: "Wed", views: 5000, orders: 380 },
  { name: "Thu", views: 4780, orders: 308 },
  { name: "Fri", views: 5890, orders: 480 },
  { name: "Sat", views: 6390, orders: 580 },
  { name: "Sun", views: 4490, orders: 410 },
];

export default function ActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Analytics (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="views" stroke="#000000" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}