import React from 'react'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-green-200 text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold mb-4">Welcome to the Plant2Cash</h2>
          <p className="text-xl mb-6">Explore the beauty of nature and discover a wide variety of Herbs.</p>
          <a href="#" className="btn btn-primary rounded-full bg-green-600 text-white px-6 py-2 hover:bg-green-700">Learn More</a>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="container mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">Featured Herbs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plant Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/300" alt="Plant 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2">Herb Name 1</h4>
            <p className="text-gray-600">A brief description of the plant. It can include some interesting facts or care instructions.</p>
          </div>
          {/* Plant Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/300" alt="Plant 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2">Herb Name 2</h4>
            <p className="text-gray-600">A brief description of the plant. It can include some interesting facts or care instructions.</p>
          </div>
          {/* Plant Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/300" alt="Plant 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2">Herb Name 3</h4>
            <p className="text-gray-600">A brief description of the plant. It can include some interesting facts or care instructions.</p>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HomePage;