import React, { useState } from 'react';
import './App.css';

function App() {
  const [allUsers] = useState([
    { id: 1, name: 'John Doe', contact: '+1 (555) 123-4567', image: 'https://via.placeholder.com/150/0066cc/ffffff?text=JD' },
    { id: 2, name: 'Jane Smith', contact: '+1 (555) 234-5678', image: 'https://via.placeholder.com/150/28a745/ffffff?text=JS' },
    { id: 3, name: 'Mike Johnson', contact: '+1 (555) 345-6789', image: 'https://via.placeholder.com/150/dc3545/ffffff?text=MJ' },
    { id: 4, name: 'Sarah Wilson', contact: '+1 (555) 456-7890', image: 'https://via.placeholder.com/150/ffc107/000000?text=SW' },
    { id: 5, name: 'David Brown', contact: '+1 (555) 567-8901', image: 'https://via.placeholder.com/150/6f42c1/ffffff?text=DB' },
    { id: 6, name: 'Lisa Davis', contact: '+1 (555) 678-9012', image: 'https://via.placeholder.com/150/fd7e14/ffffff?text=LD' },
    { id: 7, name: 'Alex Turner', contact: '+1 (555) 789-0123', image: 'https://via.placeholder.com/150/17a2b8/ffffff?text=AT' },
    { id: 8, name: 'Emma Watson', contact: '+1 (555) 890-1234', image: 'https://via.placeholder.com/150/e83e8c/ffffff?text=EW' },
    { id: 9, name: 'Chris Evans', contact: '+1 (555) 901-2345', image: 'https://via.placeholder.com/150/20c997/ffffff?text=CE' },
    { id: 10, name: 'Sophia Lee', contact: '+1 (555) 012-3456', image: 'https://via.placeholder.com/150/6610f2/ffffff?text=SL' },
    { id: 11, name: 'Ryan Garcia', contact: '+1 (555) 123-4567', image: 'https://via.placeholder.com/150/fd7e14/ffffff?text=RG' },
    { id: 12, name: 'Olivia Martinez', contact: '+1 (555) 234-5678', image: 'https://via.placeholder.com/150/198754/ffffff?text=OM' }
  ]);

  const [visibleUsersCount, setVisibleUsersCount] = useState(6);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! (This will be connected to POST request in the future)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleShowMore = () => {
    const newCount = Math.min(visibleUsersCount + 3, allUsers.length);
    setVisibleUsersCount(newCount);
    console.log(`Showing ${newCount} users out of ${allUsers.length} total users`);
  };

  const visibleUsers = allUsers.slice(0, visibleUsersCount);
  const showMoreButton = visibleUsersCount < allUsers.length;

  return (
    <div className="App">
      {/* Top Navigation Menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-primary" href="#">
            <i className="bi bi-hexagon-fill me-2"></i>
            MyPlatform
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link fw-semibold me-3" href="#signup">
                Sign Up
              </a>
              <a className="nav-link fw-semibold" href="#members">
                Members
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Block 1: Full-screen Landing Page */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h1 className="display-2 fw-bold text-white mb-4">
                  Welcome to Our Platform
                </h1>
                <p className="lead text-white mb-5">
                  Discover amazing features and connect with people around the world. 
                  Join our community today and start your journey with us.
                </p>
                <button className="btn btn-primary btn-lg px-5 py-3">
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: User Profiles Section (GET Request Feature) */}
      <section className="users-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold text-dark">Our Community</h2>
              <p className="lead text-muted">Meet some of our amazing users</p>
            </div>
          </div>
          
          <div className="row g-4">
            {visibleUsers.map((user) => (
              <div key={user.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm user-card">
                  <div className="card-body text-center p-4">
                    <img 
                      src={user.image} 
                      alt={user.name}
                      className="rounded-circle mb-3 user-avatar"
                      width="100" 
                      height="100"
                    />
                    <h5 className="card-title fw-bold">{user.name}</h5>
                    <p className="card-text text-muted">
                      <i className="bi bi-telephone me-2"></i>
                      {user.contact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {showMoreButton && (
            <div className="row mt-5">
              <div className="col-12 text-center">
                <button 
                  className="btn btn-outline-primary btn-lg px-5"
                  onClick={handleShowMore}
                >
                  Show More Users ({allUsers.length - visibleUsersCount} remaining)
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Block 3: Contact Form Section (POST Request Feature) */}
      <section className="contact-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold text-dark">Get In Touch</h2>
                <p className="lead text-muted">We'd love to hear from you. Send us a message!</p>
              </div>
              
              <div className="card shadow">
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-bold">Message</label>
                        <textarea
                          className="form-control form-control-lg"
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us what's on your mind..."
                        ></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg px-5 py-3">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
