import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const accountData = [
  { month: "Jan", balance: 7652 },
  { month: "Feb", balance: 12495 },
  { month: "Mar", balance: 7000 },
  { month: "Apr", balance: 9460 },
  { month: "May", balance: 4500 },
  { month: "Jun", balance: 3000 },
];

const expensesData = [
    { name: "Travel", value: 4250.42, color: "#acedfc" },
    { name: "Rent", value: 3500, color: "#85E7FF" },
    { name: "Shopping", value: 1140.42, color: "#1F99B8" },
    { name: "Food", value: 1280.12, color: "#154C59" },
    { name: "Subscriptions", value: 820, color: "#FFD93D" },
    { name: "Utilities", value: 510.42, color: "#6BCB77" },
  ];

type Transaction = {
    name: string;
    date: string;
    amount: number;
  };
  
  const transactions: Transaction[] = [
    { name: "Grocery Store", date: "July 22", amount: -109.20 },
    { name: "Gym Membership", date: "July 18", amount: -125.00 },
    { name: "ACH Payment - Invoice #1954", date: "July 16", amount: 800.00 },
    { name: "Coffee Mill", date: "July 14", amount: -15.54 },
    { name: "Electric Bill", date: "July 10", amount: -125.54 },
  ];

  const getColorForTransaction = (transactionName: string) => {
    // Basic mapping: customize as needed
    if (transactionName.includes("Grocery") || transactionName.includes("Coffee")) {
      return "#154C59"; // Shopping
    }
    if (transactionName.includes("Gym") || transactionName.includes("Membership")) {
      return "#FFD93D"; // Subscriptions
    }
    if (transactionName.includes("ACH Payment")) {
      return "#fff"; // Rent (or Income, you can adjust)
    }
    return "#6BCB77"; // Default: Utilities
  };


const FinancialDashboard: React.FC = () => {
  return (
    <div className="mx-4 max-w-7xl w-full mb-20 text-white
    rounded-2xl">
      
      {/* Account Balance Chart */}
<motion.div
        className="bg-white/5 border border-white/20 p-4 rounded-xl mb-4 backdrop-blur-lg shadow-lg shadow-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4">Current Balance</h2>
        <p className="font-bold text-3xl text-white">$9,810.54</p>

      </motion.div>
      
      
      <motion.div
  className="bg-white/5 border border-white/20 p-4 rounded-xl mb-4 backdrop-blur-lg shadow-lg shadow-black/20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>
  <h2 className="text-xl font-semibold mb-4 text-white">Recent Transactions</h2>

  <div>
    <ul>
      {transactions.map((tx, index) => (
        <li
          key={index}
          className="flex justify-between items-center py-2 border-b border-white/20 last:border-0"
        >
          <div className="flex items-center gap-3">
            {/* Color Dot */}
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: getColorForTransaction(tx.name) }}
            ></span>

            <div>
              <p className="text-white font-medium">{tx.name}</p>
              <p className="text-sm text-white/50">{tx.date}</p>
            </div>
          </div>

          {/* Amount */}
          <p
            className={`text-white font-semibold ${
              tx.amount < 0 ? "text-red-400" : "text-green-400"
            }`}
          >
            {tx.amount < 0
              ? `-$${Math.abs(tx.amount).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              : `+$${tx.amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
          </p>
        </li>
      ))}
    </ul>
  </div>
</motion.div>

      {/* Account Balance Chart */}
      <motion.div
        className="bg-white/5 border border-white/20 rounded-xl mb-4 backdrop-blur-lg shadow-lg shadow-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4 p-4">Balance History</h2>
        <ResponsiveContainer width="100%" height={250} className="pr-4">
        <LineChart data={accountData}>
  <defs>
    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#1F99B8" />
      <stop offset="33%" stopColor="#85E7FF" />
      <stop offset="66%" stopColor="#acedfc" />
      <stop offset="100%" stopColor="#ffffff" />
    </linearGradient>
  </defs>

  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
  <XAxis dataKey="month" stroke="#ffffff70" />
  <YAxis stroke="#ffffff70" />
  <Line
  type="monotone"
  dataKey="balance"
  stroke="url(#lineGradient)"
  strokeWidth={3}
  dot={{ r: 5, stroke: "#fff", strokeWidth: 1 }}
  label={({ x, y, index, value, payload }) => {
    // Adjust placement for first and last dots
    let dx = 0;
    let dy = -10; // Default: place above
    let textAnchor: "start" | "middle" | "end" = "middle";

    if (index === 0) {
      // First dot: bottom-right
      dx = 8;
      dy = 15;
      textAnchor = "start";
    } else if (index === accountData.length - 1) {
      // Last dot: bottom-left
      dx = -8;
      dy = 15;
      textAnchor = "end";
    }

    return (
      <text
        x={x + dx}
        y={y + dy}
        fill="#fff"
        fontSize={12}
        textAnchor={textAnchor}
      >
        ${value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </text>
    );
  }}
/>
</LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Expenses & Income vs. Expenses */}
      <motion.div
  className="bg-white/5 border border-white/20 rounded-xl backdrop-blur-lg shadow-lg shadow-black/20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  <h2 className="text-xl font-semibold mb-6 text-white p-4">Monthly Spending Overview</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {/* Pie Chart */}
    <div>
      <ResponsiveContainer width="100%" height={250} className="my-4 p-2">
        <PieChart>
          <Pie
            data={expensesData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={95}
            label={{ fill: "#fff" }} // White labels
          >
            {expensesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* Expenses Category List */}
    <div className="flex flex-col justify-center px-4">
      <ul>
        {expensesData.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-white/20 last:border-0"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <p className="text-white font-medium">{item.name}</p>
            </div>
            <p className="text-white font-semibold">
              ${item.value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default FinancialDashboard;