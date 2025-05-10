// import React, { useState } from 'react';
// import { PlusCircle } from 'lucide-react';

// const TaskManagement = () => {
//   const [activeTab, setActiveTab] = useState('Active');

//   const tasks = [
//     { id: 1234, date: '26/03/2024', location: 'TNS Pvt. Ltd., Chhatarpur Dhamli Hills' },
//     { id: 1233, date: '22/02/2024', location: 'TNS Pvt. Ltd., Chhatarpur Dhamli Hills' }
//   ];

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Task Management</h2>
//       <div className="flex mb-6 bg-gray-100 rounded-full p-1">
//         {['Active', 'Completed', 'Inbox'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`flex-1 py-2 px-4 rounded-full transition-colors ${
//               activeTab === tab
//                 ? 'bg-white text-black shadow-sm'
//                 : 'text-gray-500 hover:bg-gray-200'
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div className="space-y-4">
//         {tasks.map((task) => (
//           <div key={task.id} className="bg-gray-100 rounded-lg p-4">
//             <p><strong>Task Id:</strong> {task.id}</p>
//             <p><strong>Completed on:</strong> {task.date}</p>
//             <p><strong>Location:</strong> {task.location}</p>
//           </div>
//         ))}
//       </div>
//       <div className="mt-6 flex justify-between items-center">
//         <button className="text-blue-600 font-semibold">Tasks</button>
//         <button className="flex items-center text-blue-600 font-semibold">
//           <PlusCircle className="mr-2" size={20} />
//           New Task
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskManagement;

import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const TaskManagement = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const [tasks, setTasks] = useState([
    { id: 1234, date: '26/03/2024', location: 'TNS Pvt. Ltd., Chhatarpur Dhamli Hills', status: 'Active' },
    { id: 1233, date: '22/02/2024', location: 'TNS Pvt. Ltd., Chhatarpur Dhamli Hills', status: 'Completed' }
  ]);
  const [showNewTask, setShowNewTask] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowNewTask(false);
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: 'Completed' } : task));
  };

  const filteredTasks = tasks.filter(task => task.status === activeTab);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Task Management</h2>
      <div className="flex mb-6 bg-gray-100 rounded-full p-1">
        {['Active', 'Completed', 'Inbox'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-full transition-colors ${
              activeTab === tab
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Display tasks based on the active tab */}
      <div className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task.id} className="bg-gray-100 rounded-lg p-4">
              <p><strong>Task Id:</strong> {task.id}</p>
              <p><strong>{activeTab === 'Active' ? 'Due Date:' : 'Completed on:'}</strong> {task.date}</p>
              <p><strong>Location:</strong> {task.location}</p>
              {activeTab === 'Active' && (
                <button
                  className="text-indigo-500 mt-2"
                  onClick={() => completeTask(task.id)}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No {activeTab.toLowerCase()} tasks.</p>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button className="text-blue-600 font-semibold">Tasks</button>
        <button
          className="flex items-center text-blue-600 font-semibold"
          onClick={() => setShowNewTask(true)}
        >
          <PlusCircle className="mr-2" size={20} />
          New Task
        </button>
      </div>

      {/* Show New Task form */}
      {showNewTask && <NewTask onAddTask={handleAddTask} onClose={() => setShowNewTask(false)} />}
    </div>
  );
};

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
    onAddTask(task);
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
              onClick={onClose}
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

export default TaskManagement;
