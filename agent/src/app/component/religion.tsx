'use client'
import React from 'react'
import { useEffect, useState } from "react";
type religion={
    userid : number;
    religion : string;
    caste : string;
    subcaste : string;
    createdBy : string;
    updatedBy : string;
    createdAt : string;
    updatedAt: string;
    version: number;
}
const BACKEND_URL="http://172.28.147.146:9090";
function religion() {
    const [religions, setReligions] = useState<religion[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() =>{
        async function fetchReligions() {
      try {
        const response = await fetch(BACKEND_URL);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setReligions(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchReligions();
    },[]);
    if (loading) return <p className="text-center mt-4">Loading religions...</p>;
    if (error) return <p className="text-red-500 text-center mt-4">Error: {error}</p>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-center mb-4">Religion List</h1>
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">User ID</th>
            <th className="p-2 border">Religion</th>
            <th className="p-2 border">Caste</th>
            <th className="p-2 border">Sub-Caste</th>
          </tr>
        </thead>
        <tbody>
          {religions.map((rel) => (
            <tr key={rel.userid} className="hover:bg-gray-50">
              <td className="p-2 border">{rel.userid}</td>
              <td className="p-2 border">{rel.religion}</td>
              <td className="p-2 border">{rel.caste}</td>
              <td className="p-2 border">{rel.subcaste}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default religion
