// import React, { useState } from 'react';
// import { mockDrivers } from '../data/mockData';

// const SalaryCalculator = () => {
//   const [selectedDriver, setSelectedDriver] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [baseSalary, setBaseSalary] = useState(0);
//   const [overtimeHours, setOvertimeHours] = useState(0);
//   const [overtimeRate, setOvertimeRate] = useState(0);

//   const calculateSalary = () => {
//     const overtimePay = overtimeHours * overtimeRate;
//     const totalSalary = baseSalary + overtimePay;
//     return totalSalary.toFixed(2);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <h2 className="text-xl font-semibold mb-4">Salary Calculator</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-2">Select Driver</label>
//           <select
//             value={selectedDriver}
//             onChange={(e) => setSelectedDriver(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option value="">Select a driver</option>
//             {mockDrivers.map((driver) => (
//               <option key={driver.id} value={driver.id}>
//                 {driver.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block mb-2">Start Date</label>
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">End Date</label>
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Base Salary</label>
//           <input
//             type="number"
//             value={baseSalary}
//             onChange={(e) => setBaseSalary(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Overtime Hours</label>
//           <input
//             type="number"
//             value={overtimeHours}
//             onChange={(e) => setOvertimeHours(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Overtime Rate</label>
//           <input
//             type="number"
//             value={overtimeRate}
//             onChange={(e) => setOvertimeRate(Number(e.target.value))}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>
//       <div className="mt-4">
//         <p className="text-lg font-semibold">
//           Total Salary: ${calculateSalary()}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SalaryCalculator;

import React from 'react';

const SalarySummary = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Salary Summary</h2>
        <ul className="text-gray-700 space-y-2">
          <li><strong>Total Overtime Hours:</strong> 10 hrs</li>
          <li><strong>Total Salary:</strong> $5000</li>
          <li><strong>Total Expense:</strong> $300</li>
          <li><strong>Net Payable:</strong> $4700</li>
        </ul>
      </div>
    </div>
  );
};

export default SalarySummary;
