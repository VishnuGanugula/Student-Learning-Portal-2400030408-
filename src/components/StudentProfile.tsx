import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function randomFrom<T>(arr: T[]) { return arr[Math.floor(Math.random() * arr.length)]; }

export default function StudentProfile({ userId, userName }: { userId?: string | null; userName?: string | null }) {
  // Random demo data (replace with real data when available)
  const name = userName || randomFrom(["Aarav Patel", "Ananya Sharma", "Vikram Rao", "Sneha Gupta"]);
  const id = userId || `U-${Math.floor(100000000 + Math.random()*900000000)}`;

  const personalLeft = [
    ["Admission Date", randomFrom(["07-05-2024","15-06-2023","01-08-2022"])],
    ["Date Of Birth", randomFrom(["11-10-2004","02-03-2005","21-07-2003"])],
    ["Blood Group", randomFrom(["A+","B+","O+"])],
    ["E-mail", `${name.toLowerCase().split(" ")[0]}@example.edu`],
    ["Height", randomFrom(["170 cm","165 cm","172 cm"])],
    ["Weight", randomFrom(["64 kg","70 kg","58 kg"])],
  ];

  const personalRight = [
    ["Nationality", randomFrom(["Indian","Other"])],
    ["Major Degree", randomFrom(["B.Tech CSE","B.Sc Physics","B.Com"])],
    ["Admission Type", randomFrom(["Regular","Lateral Entry"])],
    ["Hostel Status", randomFrom(["Hostler","Day Scholar"])],
    ["Current Department", randomFrom(["CSE-1","Physics-1"])],
  ];

  const tabs = ["Personal Information","Address Details","Contact Information","Identity Information","Dependents Details","Qualification Details","Publications","Patents","Activities","Awards","Advisors","Discipline Issues","Courses"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student Profile</h2>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t, i) => (
            <div key={i} className="px-3 py-1 rounded-md bg-violet-100 text-violet-800 text-sm">{t}</div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left profile card */}
        <div className="lg:col-span-3">
          <Card className="bg-violet-600 text-white">
            <CardHeader>
              <div className="flex flex-col items-center py-6">
                <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <div className="text-3xl font-bold">{(name.split(" ")[0] || "S")[0]}</div>
                </div>
                <div className="text-lg font-semibold">{name.toUpperCase()}</div>
                <div className="text-sm mt-1">University ID : <strong>{id}</strong></div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-3 text-sm">
                {personalLeft.map((row, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="text-white/90">{row[0]} :</div>
                    <div className="font-medium">{row[1]}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right details */}
        <div className="lg:col-span-9">
          <div className="border-b pb-4 mb-4">
            <h3 className="text-xl font-semibold">Personal Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-4">
              <div className="space-y-3">
                {personalLeft.map((row, i) => (
                  <div key={i} className="border rounded p-2 bg-gray-50 flex justify-between items-center">
                    <div className="text-sm text-slate-600">{row[0]}</div>
                    <div className="font-medium">{row[1]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded shadow p-4">
              <div className="space-y-3">
                {personalRight.map((row, i) => (
                  <div key={i} className="border rounded p-2 bg-gray-50 flex justify-between items-center">
                    <div className="text-sm text-slate-600">{row[0]}</div>
                    <div className="font-medium">{row[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
