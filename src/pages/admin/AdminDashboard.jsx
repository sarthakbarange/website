import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaTachometerAlt, FaUsers, FaBook, FaChalkboardTeacher, 
  FaImages, FaTrophy, FaEnvelope, FaCog, FaSignOutAlt,
  FaArrowRight, FaPlus, FaEdit, FaTrash, FaEye, FaBell
} from 'react-icons/fa'

import Card from '../../components/Card'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [notices, setNotices] = useState([])
  const [showNoticeModal, setShowNoticeModal] = useState(false)
  const [newNotice, setNewNotice] = useState({
    title: '',
    category: 'Admission',
    content: '',
    important: false
  })

  // Load notices from localStorage
  const loadNotices = () => {
    try {
      const stored = localStorage.getItem('notices')
      if (stored) {
        setNotices(JSON.parse(stored))
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadNotices()
    window.addEventListener('notices-updated', loadNotices)
    return () => window.removeEventListener('notices-updated', loadNotices)
  }, [])

  const handlePostNotice = (e) => {
    e.preventDefault()
    if (!newNotice.title || !newNotice.content) return

    try {
      const currentNotices = [...notices]
      const newId = currentNotices.length > 0 ? Math.max(...currentNotices.map(n => n.id)) + 1 : 1
      const noticeToAdd = {
        id: newId,
        title: newNotice.title,
        category: newNotice.category,
        date: new Date().toISOString().split('T')[0],
        content: newNotice.content,
        important: newNotice.important
      }

      const updated = [noticeToAdd, ...currentNotices]
      localStorage.setItem('notices', JSON.stringify(updated))
      setNotices(updated)

      // Reset form and close modal
      setNewNotice({
        title: '',
        category: 'Admission',
        content: '',
        important: false
      })
      setShowNoticeModal(false)

      // Dispatch custom sync event
      window.dispatchEvent(new Event('notices-updated'))
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteNotice = (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return

    try {
      const filtered = notices.filter(n => n.id !== id)
      localStorage.setItem('notices', JSON.stringify(filtered))
      setNotices(filtered)

      // Dispatch custom sync event
      window.dispatchEvent(new Event('notices-updated'))
    } catch (err) {
      console.error(err)
    }
  }

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
    { id: 'notices', label: 'Notices Board', icon: FaBell },
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
                    <span className="text-green-500 text-xs font-semibold">{stat.change} this month</span>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activities & Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Recent Activities
                  </h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b dark:border-gray-800 last:border-0">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{activity.action}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{activity.details}</p>
                        </div>
                        <span className="text-xs text-gray-400">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4">
                      Active Notices
                    </h3>
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                      {notices.slice(0, 3).map((notice) => (
                        <div key={notice.id} className="p-3 bg-gray-50 dark:bg-gray-850 rounded-xl border dark:border-gray-800 flex justify-between items-start">
                          <div>
                            <span className="inline-block px-1.5 py-0.5 bg-primary/10 text-primary dark:text-secondary rounded text-[9px] font-bold">
                              {notice.category}
                            </span>
                            <h4 className="text-xs font-bold text-gray-900 dark:text-white mt-1 line-clamp-1">
                              {notice.title}
                            </h4>
                            <p className="text-[10px] text-gray-505 dark:text-gray-400 line-clamp-1">{notice.date}</p>
                          </div>
                          <button onClick={() => handleDeleteNotice(notice.id)} className="text-red-500 hover:text-red-700 p-1">
                            <FaTrash className="text-xs" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" onClick={() => setActiveTab('notices')}>
                    Manage Notices ({notices.length})
                  </Button>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button icon={FaPlus} onClick={() => alert("Simulated: Add Student panel is under configuration.")}>Add New Student</Button>
                <Button icon={FaPlus} variant="secondary" onClick={() => alert("Simulated: Add Course panel is under configuration.")}>Create Course</Button>
                <Button icon={FaPlus} variant="outline" onClick={() => setShowNoticeModal(true)}>Post Notice Announcement</Button>
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
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b dark:border-gray-800 text-gray-500 dark:text-gray-400">
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Course</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Rahul Sharma', course: 'JEE Main', status: 'Active' },
                      { name: 'Priya Patel', course: 'NEET', status: 'Active' },
                      { name: 'Amit Kumar', course: 'Foundation', status: 'Inactive' },
                    ].map((student, index) => (
                      <tr key={index} className="border-b dark:border-gray-800 last:border-0 text-gray-900 dark:text-white">
                        <td className="py-3 px-4">{student.name}</td>
                        <td className="py-3 px-4">{student.course}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            student.status === 'Active' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300' 
                              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
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
              </div>
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
                  <div className="flex items-center justify-between border-t dark:border-gray-800 pt-3 mt-3">
                    <span className="px-2 py-0.5 bg-green-150 text-green-700 rounded-full text-xs font-semibold">
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

      case 'notices':
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
                Manage Notices Board
              </h3>
              <Button icon={FaPlus} onClick={() => setShowNoticeModal(true)}>Post Notice</Button>
            </div>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b dark:border-gray-800 text-gray-500">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Title</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Priority</th>
                      <th className="py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.map((notice) => (
                      <tr key={notice.id} className="border-b dark:border-gray-800 last:border-0 text-gray-900 dark:text-white">
                        <td className="py-3 px-4 text-sm">{notice.date}</td>
                        <td className="py-3 px-4 font-semibold text-sm">{notice.title}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 bg-primary/10 text-primary dark:text-secondary rounded text-xs">
                            {notice.category}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {notice.important ? (
                            <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 rounded text-xs font-bold">
                              High
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded text-xs">
                              Normal
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <button onClick={() => handleDeleteNotice(notice.id)} className="text-red-500 hover:text-red-700 p-2">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-900 min-h-screen p-4 fixed left-0 top-0 border-r dark:border-gray-805 z-10">
          <div className="mb-8 pt-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-white text-base" />
              </div>
              <h2 className="font-heading font-bold text-lg text-primary dark:text-white">Admin Panel</h2>
            </div>
            <p className="text-[10px] text-gray-500 dark:text-gray-450 mt-0.5">Excellence Academy</p>
          </div>
          
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                  activeTab === item.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-55 dark:hover:bg-gray-850'
                }`}
              >
                <item.icon className="text-base" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <button 
              onClick={() => alert("Simulated: Logging out...")}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors text-sm font-semibold"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8 pt-24 min-h-screen">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-3xl text-gray-900 dark:text-white uppercase tracking-wide">
              {activeTab === 'dashboard' ? 'Overview Dashboard' : activeTab.toUpperCase()}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Welcome back, Administrator
            </p>
          </div>

          {renderContent()}
        </div>
      </div>

      {/* Post Notice Dialog Modal */}
      <Modal
        isOpen={showNoticeModal}
        onClose={() => setShowNoticeModal(false)}
        title="Post New Notice Board Announcement"
        size="md"
      >
        <form onSubmit={handlePostNotice} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Notice Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Winter Semester Holidays"
              value={newNotice.title}
              onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-950 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Notice Category
              </label>
              <select
                value={newNotice.category}
                onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-950 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              >
                {['Admission', 'Exam', 'New Course', 'Holiday', 'Result', 'Meeting', 'Scholarship', 'Schedule'].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center pt-5">
              <input
                id="important"
                type="checkbox"
                checked={newNotice.important}
                onChange={(e) => setNewNotice({ ...newNotice, important: e.target.checked })}
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary cursor-pointer"
              />
              <label htmlFor="important" className="ml-2 text-xs font-bold text-red-500 uppercase cursor-pointer">
                Mark as High Priority
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Notice Message Content *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Provide a detailed message description..."
              value={newNotice.content}
              onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-950 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
            />
          </div>

          <div className="flex items-center justify-end space-x-2 border-t dark:border-gray-800 pt-4">
            <Button type="button" variant="outline" onClick={() => setShowNoticeModal(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Post Announcement
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AdminDashboard
