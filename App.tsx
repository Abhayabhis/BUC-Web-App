import React from 'react';
import { GraduationCap, BookOpen, Users, Monitor, Calendar, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap size={32} />
            <span className="text-2xl font-bold">BUC</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Courses</a>
            <a href="#" className="nav-link">Study Centers</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
          <button className="btn-primary">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-black text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg" 
            alt="Abstract futuristic background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">#BREAK THE LOOP</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your learning journey with BUC's comprehensive education platform for grades 10-12
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary">
              Explore Courses
            </button>
            <button className="btn-secondary">
              Find Study Centers
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BUC?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
              <Monitor className="mx-auto mb-4 text-black" size={40} />
              <h3 className="text-xl font-semibold mb-2">Online Learning</h3>
              <p className="text-gray-600">Access quality education anytime, anywhere with our interactive online platform</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
              <MapPin className="mx-auto mb-4 text-black" size={40} />
              <h3 className="text-xl font-semibold mb-2">Offline Centers</h3>
              <p className="text-gray-600">Study at our state-of-the-art learning centers with expert guidance</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 card-hover">
              <Users className="mx-auto mb-4 text-black" size={40} />
              <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
              <p className="text-gray-600">Learn from experienced educators dedicated to your success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                grade: 'Grade 10',
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
              },
              {
                grade: 'Grade 11',
                image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
              },
              {
                grade: 'Grade 12',
                image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg'
              }
            ].map(({grade, image}) => (
              <div key={grade} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={image} 
                  alt={`${grade} students`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <BookOpen className="mb-4 text-black" size={32} />
                  <h3 className="text-xl font-semibold mb-2">{grade} Program</h3>
                  <p className="text-gray-600 mb-4">Comprehensive study materials and expert guidance for all subjects</p>
                  <button className="btn-primary w-full bg-black text-white hover:bg-gray-800">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-black text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg" 
            alt="Modern learning space" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Break the Loop?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join BUC today and experience education that transforms your future
          </p>
          <button className="btn-primary">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap size={24} />
                <span className="text-xl font-bold">BUC</span>
              </div>
              <p className="text-gray-400">Breaking the loop in education</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Study Centers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Grade 10</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Grade 11</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Grade 12</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Crash Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@buc.edu</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Education St</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;