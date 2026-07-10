import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaTachometerAlt, FaUsers, FaBook, FaChalkboardTeacher, 
  FaImages, FaTrophy, FaEnvelope, FaCog, FaSignOutAlt,
  FaArrowRight, FaPlus, FaEdit, FaTrash, FaEye
} from 'react-icons/fa'

import Card from '../../components/Card'
import Button from '../../components/Button'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const stats = [
    { label: 'Total Students', value: '10,234', icon: FaUsers, color: 'text-blue-500', change: '+12%' },
    { label: 'Active Courses', value: '24', icon: FaBook, color: 'text-green-500', change: '+2' },
    { label: 'Faculty Members', value: '28', icon: FaChalkboardTeacher, color: 'text-purple-500', change: '+1' },
    { label: 'Total Selections', value: '523', icon: FaTrophy, color: 'text-yellow-500', change: '+45' },
  ]

  const recentActivities = [
    { action: 'New admission', details: 'Rahul Sharma enrolled in JEE Course', time: '2 hours ago' },
    { action: 'Payment received', details: '₹45,000 from Priya Patel', time: '4 hours ago' },
    { action: 'New inquiry', details: 'Contact form submission from Amit Kumar', time: '6 hours ago' },
    { action: 'Test result', details: 'Mock Test #45 results published', time: '8 hours ago' },
  ]

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt },
    { id: 'students', label: 'Students', icon: FaUsers },
    { id: 'courses', label: 'Courses', icon: FaBook },
    { id: 'faculty', label: 'Faculty', icon: FaChalkboardTeacher },
    { id: 'gallery', label: 'Gallery', icon: FaImages },
    { id: 'results', label: 'Results', icon: FaTrophy },
    { id: 'inquiries', label: 'Inquiries', icon: FaEnvelope },
    { id: 'settings', label: 'Settings', icon: FaCog },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <stat.icon className={`text-3xl ${stat.color} mb-4`} />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                    <span className="text-green-500 text-xs">{stat.change} this month</span>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activities */}
            <Card>
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4">
                Recent Activities
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b dark:border-gray-700 last:border-0">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.details}</p>
                    </div>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <div>
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button icon={FaPlus}>Add New Student</Button>
                <Button icon={FaPlus} variant="secondary">Create Course</Button>
                <Button icon={FaPlus} variant="outline">Post Notice</Button>
              </div>
            </div>
          </div>
        )

      case 'students':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
                Manage Students
              </h3>
              <Button icon={FaPlus}>Add Student</Button>
            </div>
            <Card>
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Course</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Rahul Sharma', course: 'JEE Main', status: 'Active' },
                    { name: 'Priya Patel', course: 'NEET', status: 'Active' },
                    { name: 'Amit Kumar', course: 'Foundation', status: 'Inactive' },
                  ].map((student, index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <td className="py-3 px-4">{student.name}</td>
                      <td className="py-3 px-4">{student.course}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          student.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-500 hover:text-blue-700"><FaEye /></button>
                          <button className="text-green-500 hover:text-green-700"><FaEdit /></button>
                          <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        )

      case 'courses':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
                Manage Courses
              </h3>
              <Button icon={FaPlus}>Add Course</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'JEE Main & Advanced', students: 120, status: 'Active' },
                { name: 'NEET Preparation', students: 95, status: 'Active' },
                { name: 'Foundation Batch', students: 80, status: 'Active' },
              ].map((course, index) => (
                <Card key={index} hover>
                  <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {course.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {course.students} students enrolled
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {course.status}
                    </span>
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                      <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} module coming soon...
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 min-h-screen p-4 fixed left-0 top-0">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-xl text-primary">Admin Panel</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Excellence Academy</p>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-primary text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-3xl text-gray-900 dark:text-white">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Welcome back, Admin
            </p>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
