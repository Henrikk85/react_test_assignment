import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 text-center text-primary mb-4">
              React Test Assignment
            </h1>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Welcome to React with Bootstrap 5!</h5>
                <p className="card-text">
                  This is a React application with Bootstrap 5 integration for frontend markup and styling.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-primary me-md-2" type="button">
                    Primary Button
                  </button>
                  <button className="btn btn-outline-secondary" type="button">
                    Secondary Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Feature 1</h5>
                <p className="card-text">Bootstrap 5 components are fully integrated and ready to use.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">Responsive design with Bootstrap's grid system.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Feature 3</h5>
                <p className="card-text">TypeScript support for better development experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
