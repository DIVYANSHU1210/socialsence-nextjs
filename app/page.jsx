"use client"

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from "react-icons/fa";

const Home = () => {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2500, pv: 1508, amt: 2210 },
    { name: 'Apr', uv: 2000, pv: 1000, amt: 2210 },
    { name: 'May', uv: 3900, pv: 3000, amt: 2210 },
    { name: 'Jun', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Jul', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Aug', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Sep', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Oct', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Nov', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Dec', uv: 3000, pv: 1398, amt: 2210 },
    // Add more data points here
  ];

  const pieData = [
    { name: '15-25 Years Old', value: 84 },
    { name: '26-35 Years Old', value: 10 },
    { name: '36-45 Years Old', value: 4 },
    { name: '>45 Years Old', value: 2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <FaUsers className="h-6 w-6 text-gray-500 mr-2" />
              <div className="text-sm font-medium text-gray-500 truncate">Customers</div>
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">3,812</div>
            <div className="mt-1 text-sm text-green-500">+15.73%</div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <FaShoppingCart className="h-6 w-6 text-gray-500 mr-2" />
              <div className="text-sm font-medium text-gray-500 truncate">Orders</div>
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">1,658</div>
            <div className="mt-1 text-sm text-green-500">+21.15%</div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <FaDollarSign className="h-6 w-6 text-gray-500 mr-2" />
              <div className="text-sm font-medium text-gray-500 truncate">Revenue</div>
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">$2,000</div>
            <div className="mt-1 text-sm text-green-500">+12.76%</div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <FaChartLine className="h-6 w-6 text-gray-500 mr-2" />
              <div className="text-sm font-medium text-gray-500 truncate">Growth</div>
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">32.56%</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg p-5">
          <h2 className="text-xl font-medium text-gray-800 mb-5">Projections vs Actuals</h2>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg p-5">
          <h2 className="text-xl font-medium text-gray-800 mb-5">Total Customers</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg p-5 mt-6">
        <h2 className="text-xl font-medium text-gray-800 mb-5">Customer Segmentation</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            label
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Home;
