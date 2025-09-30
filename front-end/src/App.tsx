import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const birthdaysByMonth = [
    {
      month: "March 2025",
      birthdays: [
        { id: 1, name: 'John', lastName: 'Doe', daysLeft: 15 },
        { id: 2, name: 'Emma', lastName: 'Wilson', daysLeft: 17 },
      ]
    },
    {
      month: "April 2025", 
      birthdays: [
        { id: 3, name: 'Sarah', lastName: 'Smith', daysLeft: 22 },
        { id: 4, name: 'Mike', lastName: 'Johnson', daysLeft: 35 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f5fb]">
      {/* Sidebar toggle button */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 bg-[#6c69ff] text-white p-3 rounded-xl shadow-lg"
      >
        ☰
      </button>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-lg p-6 z-40">
          <h2 className="text-xl font-semibold mb-6">Profile</h2>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded hover:bg-gray-100">
              Edit Profile
            </button>
            <button className="w-full text-left p-3 rounded hover:bg-gray-100">
              My Wishlist
            </button>
            <button className="w-full text-left p-3 rounded hover:bg-gray-100">
              Settings
            </button>
            <button className="w-full text-left p-3 rounded hover:bg-gray-100 mt-4">
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={sidebarOpen ? 'ml-80 p-8' : 'p-8'}>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome back, Alex! 🎉</h1>
        
        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-lg font-semibold text-gray-900">Upcoming Birthdays</div>
            <div className="text-sm text-gray-600">Next 30 days</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
            <div className="text-lg font-semibold text-gray-900">Active Celebrations</div>
            <div className="text-sm text-gray-600">Being organized</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-900 mb-2">24</div>
            <div className="text-lg font-semibold text-gray-900">Team Members</div>
            <div className="text-sm text-gray-600">In your circle</div>
          </div>
        </div>

        {/* Birthday cards by month */}
        <div className="space-y-8">
          {birthdaysByMonth.map((monthData, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{monthData.month}</h2>
              <div className="space-y-4">
                {monthData.birthdays.map((birthday) => (
                  <div key={birthday.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-[#fe7475] rounded-full flex items-center justify-center text-white font-semibold text-xl">
                          {birthday.name[0]}{birthday.lastName[0]}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-xl">{birthday.name} {birthday.lastName}</h4>
                          <p className="text-gray-600">Birthday celebration</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#6c69ff]">{birthday.daysLeft} days</div>
                        <div className="text-sm text-gray-600">until celebration</div>
                        <button className="mt-2 bg-[#ffbe3d] text-gray-900 px-4 py-2 rounded-xl font-medium">
                          Plan Celebration
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;