import { useState } from 'react';

const Homepage = () => {
  const [sidebarOpen] = useState(true); // Always open for now

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
    },
    {
      month: "May 2025",
      birthdays: [
        { id: 5, name: 'Emily', lastName: 'Brown', daysLeft: 51 },
        { id: 6, name: 'David', lastName: 'Wilson', daysLeft: 62 },
      ]
    }
  ];

  const stats = [
    { label: 'Upcoming Birthdays', value: '3', sublabel: 'Next 30 days' },
    { label: 'Active Celebrations', value: '2', sublabel: 'Being organized' },
    { label: 'Team Members', value: '24', sublabel: 'In your circle' },
  ];

  const handleCardClick = (birthday: any) => {
    console.log('Birthday card clicked:', birthday);
    // This will open the birthday modal later
  };

  const handleProfileEdit = () => {
    console.log('Edit profile clicked');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="min-h-screen bg-[#f4f5fb]">
      {/* Sidebar - Always visible */}
      <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 font-[Poppins]">Profile</h2>
        </div>
        
        <div className="p-6 flex flex-col h-[calc(100vh-80px)]">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-[#6c69ff] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                AJ
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 font-[Poppins]">Alex Johnson</h3>
                <p className="text-gray-600 text-sm font-[Poppins]">alex.j@company.com</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={handleProfileEdit}
                className="w-full text-left p-4 rounded-xl hover:bg-[#f4f5fb] transition-all font-[Poppins] text-gray-700 border border-gray-100 hover:border-[#6c69ff] hover:scale-105 transform duration-200"
              >
                ✏️ Edit Profile
              </button>
              <button className="w-full text-left p-4 rounded-xl hover:bg-[#f4f5fb] transition-all font-[Poppins] text-gray-700 border border-gray-100 hover:border-[#fe7475] hover:scale-105 transform duration-200">
                🎁 My Wishlist
              </button>
              <button className="w-full text-left p-4 rounded-xl hover:bg-[#f4f5fb] transition-all font-[Poppins] text-gray-700 border border-gray-100 hover:border-[#ffbe3d] hover:scale-105 transform duration-200">
                ⚙️ Settings
              </button>
            </div>
          </div>

          {/* Logout at bottom */}
          <button 
            onClick={handleLogout}
            className="w-full text-left p-4 rounded-xl bg-[#f4f5fb] hover:bg-red-50 hover:text-red-600 transition-all font-[Poppins] text-gray-700 border border-gray-200 mt-auto hover:scale-105 transform duration-200"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80">
        <div className="p-8">
          {/* Welcome Title */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 font-[Poppins] mb-2">
              Welcome back, Alex! 🎉
            </h1>
            <p className="text-xl text-gray-600 font-[Poppins]">
              Here's your birthday overview
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <div className="text-3xl font-bold text-gray-900 font-[Poppins] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 font-[Poppins] mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 font-[Poppins]">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Birthdays by Month */}
          <div className="space-y-8">
            {birthdaysByMonth.map((monthData, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-900 font-[Poppins] mb-6 border-b border-gray-100 pb-3">
                  {monthData.month}
                </h2>
                
                <div className="space-y-4">
                  {monthData.birthdays.map((birthday) => (
                    <div
                      key={birthday.id}
                      onClick={() => handleCardClick(birthday)}
                      className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-[#6c69ff] group hover:scale-102 transform"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-[#fe7475] rounded-full flex items-center justify-center text-white font-semibold text-xl group-hover:bg-[#6c69ff] transition-all duration-300 group-hover:scale-110 transform">
                            {birthday.name[0]}{birthday.lastName[0]}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 font-[Poppins] text-xl group-hover:text-[#6c69ff] transition-colors duration-300">
                              {birthday.name} {birthday.lastName}
                            </h4>
                            <p className="text-gray-600 font-[Poppins]">
                              Birthday celebration
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#6c69ff] font-[Poppins] mb-1 group-hover:scale-110 transform transition-transform duration-300">
                            {birthday.daysLeft} days
                          </div>
                          <div className="text-sm text-gray-600 font-[Poppins]">
                            until celebration
                          </div>
                          <div className="mt-2 text-[#6c69ff] text-sm font-[Poppins] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Click to contribute →
                          </div>
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
    </div>
  );
};

export default Homepage;