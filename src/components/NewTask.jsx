// import React from 'react';

// const NewTask = () => {
//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
//         <h2 className="text-xl font-bold mb-4">New Task</h2>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-600 font-semibold">Pickup Point</label>
//             <input 
//               type="text" 
//               placeholder="TNS Pvt Ltd, Chhatarpur" 
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 font-semibold">Phone Number</label>
//             <input 
//               type="text" 
//               placeholder="+91 99XXXXXXXXX" 
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 font-semibold">Instructions for the Task</label>
//             <textarea 
//               placeholder="Enter any additional instructions..." 
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             />
//           </div>
//           <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg">Assign Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewTask;


// NewTask.jsx
import React, { useState } from 'react';

const NewTask = ({ onAddTask, onClose }) => {
  const [task, setTask] = useState({
    id: Date.now(),
    location: '',
    phone: '',
    instructions: '',
    date: new Date().toLocaleDateString(),
    status: 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task); // Pass the task back to TaskManagement
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Pickup Point</label>
            <input
              type="text"
              name="location"
              value={task.location}
              onChange={handleChange}
              placeholder="TNS Pvt Ltd, Chhatarpur"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={task.phone}
              onChange={handleChange}
              placeholder="+91 99XXXXXXXXX"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Instructions for the Task</label>
            <textarea
              name="instructions"
              value={task.instructions}
              onChange={handleChange}
              placeholder="Enter any additional instructions..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              onClick={onClose} // Close the form without adding a task
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Assign Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
