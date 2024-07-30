import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateProject.css'; // Assuming you will add the CSS styles in this file
import { Link } from 'react-router-dom';

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedAssessmentTypes, setSelectedAssessmentTypes] = useState([]);
  const [error, setError] = useState('');

  const assessmentTypes = [
    { id: 1, name: 'Physical Security' },
    { id: 2, name: 'Environmental Controls' },
    { id: 3, name: 'Power Infrastructure' },
    { id: 4, name: 'Networking Infrastructure' },
    { id: 5, name: 'Server and Hardware' },
    { id: 6, name: 'Data Backup and Recovery' },
    { id: 7, name: 'Monitoring and Management' },
  ];

  const navigate = useNavigate();

  const handleCheckboxChange = (assessmentType) => {
    const index = selectedAssessmentTypes.indexOf(assessmentType);
    if (index === -1) {
      setSelectedAssessmentTypes([...selectedAssessmentTypes, assessmentType]);
    } else {
      setSelectedAssessmentTypes(selectedAssessmentTypes.filter(type => type !== assessmentType));
    }
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();

    if (projectName && projectDescription && selectedAssessmentTypes.length > 0) {
      console.log({ projectName, projectDescription, selectedAssessmentTypes });
      // Clear form fields and error message
      setProjectName('');
      setProjectDescription('');
      setSelectedAssessmentTypes([]);
      setError('');
      // Redirect to dashboard after saving project
      navigate('/dashboard');
    } else {
      setError('Please fill out all project details.');
    }
  };

  return (
    <div className="create-project-container">
      <div className="create-project-card">
        <h2 className="create-project-title">Create Project</h2>
        <form onSubmit={handleProjectSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              className="form-control"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectDescription">Project Description</label>
            <textarea
              id="projectDescription"
              className="form-control"
              placeholder="Enter project description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Assessment Types</label>
            <div className="assessment-types">
              {assessmentTypes.map(type => (
                <div key={type.id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`assessment-${type.id}`}
                    value={type.name}
                    checked={selectedAssessmentTypes.includes(type.name)}
                    onChange={() => handleCheckboxChange(type.name)}
                  />
                  <label className="form-check-label" htmlFor={`assessment-${type.id}`}>{type.name}</label>
                </div>
              ))}
            </div>
          </div>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <button type="submit" className="btn btn-dark">Save Project</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/ProjectTable" className="btn btn-secondary">Back to Project Table</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
