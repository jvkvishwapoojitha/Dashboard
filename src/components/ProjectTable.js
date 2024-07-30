import React, { useState } from 'react';
import CreateProject from './CreateProject'; // Import the CreateProject component
import '../Table.css';

const ProjectTable = () => {
  const [showCreateProject, setShowCreateProject] = useState(false);

  const headerStyle = {
    fontFamily: 'Georgia,serif', // Change the font family here
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '2rem', // Add space above the heading
  };

  const tableContentStyle = {
    fontFamily: 'Times New Roman, serif', // Change the font family here
    fontSize: '16px',
  };

  const handleShow = () => setShowCreateProject(true);
  const handleClose = () => setShowCreateProject(false);

  return (
    <div className="container">
      <div className="row align-items-center mb-3">
        <div className="col">
          <h2 style={headerStyle}>Projects</h2>
        </div>
        <div className="col text-end">
          <button className="btn btn-dark" onClick={handleShow}>Create New Project</button>
        </div>
      </div>

      <div className="row">
        <div className={`col-md-8 ${showCreateProject ? 'pe-3' : ''}`}>
          <div className="table-responsive">
            <table className="table table-striped table-bordered" style={tableContentStyle}>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Project Name</th>
                  <th scope="col">Project Description</th>
                  <th scope="col">Assessment Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer">Online Food Delivery</a></td>
                  <td>Online delivery web application</td>
                  <td>Security Assessment, AI Integration Assessment</td>
                </tr>
                <tr>
                  <td><a href="http://example.com/student-system" target="_blank" rel="noopener noreferrer">Student System</a></td>
                  <td>Student Management systems</td>
                  <td>Data Backup Assessment, Security Assessment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CreateProject Form on the right */}
        {showCreateProject && (
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <CreateProject />
                <button type="button" className="btn btn-secondary mt-3 w-100" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTable;
