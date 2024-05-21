import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-4 mt-4">
         <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 Plate2Cash. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer