import React from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard.css';

const Dashboard = () => {
  // Updated assessment scores data
  const assessmentScores = [
    { id: 1, label: 'Physical Security', score: 85 },
    { id: 2, label: 'Environmental Controls', score: 60 },
    { id: 3, label: 'Power Infrastructure', score: 70 },
    { id: 4, label: 'Networking Infrastructure', score: 55 },
    { id: 5, label: 'Server and Hardware', score: 90 },
    { id: 6, label: 'Data Backup and Recovery', score: 65 },
    { id: 7, label: 'Monitoring and Management', score: 75 }
  ];

  // Function to determine the color based on score
  const getProgressColor = (score) => {
    if (score >= 75) {
      return 'bg-success'; // Green for success
    } else if (score >= 50) {
      return 'bg-warning'; // Yellow for warning
    } else {
      return 'bg-danger'; // Red for danger
    }
  };

  return (
    <div>
      <h2 className="col-md-8 offset-md-2 mb-4">Dashboard</h2>

      {/* Assessment Scores Section */}
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title assessment-scores-heading">Assessment Scores</h5>
              <div className="assessment-scores-border">
                {/* Render improved assessment scores visualization */}
                {assessmentScores.map(score => (
                  <div key={score.id} className="d-flex align-items-center mb-3">
                    <div className="w-25">
                      <span className="bar-label">{score.label}</span>
                    </div>
                    <div className="progress w-75">
                      <div className={`progress-bar ${getProgressColor(score.score)}`} role="progressbar" style={{ width: `${score.score}%` }} aria-valuenow={score.score} aria-valuemin="0" aria-valuemax="100">
                        {score.score}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chosen Assessments Section */}
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title chosen-assessments-heading">Chosen Assessments</h5>
              <div className="chosen-assessments-border">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Physical Security
                    <Link to="/assessment/PhysicalSecurity" className="btn btn-outline-dark btn-sm btn-hover-effect">View</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Environmental Controls
                    <Link to="/assessment/EnvironmentalControls" className="btn btn-outline-dark btn-sm btn-hover-effect">View</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Power Infrastructure
                    <Link to="/assessment/PowerInfrastructure" className="btn btn-outline-dark btn-sm btn-hover-effect">View</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Networking Infrastructure
                    <Link to="/assessment/NetworkingInfrastructure" className="btn btn-outline-dark btn-sm btn-hover-effect">View</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Server And Hardware
                    <Link to="/assessment/ServerAndHardware" className="btn btn-outline-dark btn-sm btn-hover-effect">View</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Data Backup And Recovery
                    <Link to="/assessment/DataBackupAndRecovery" className="btn btn-outline-dark btn-sm btn-hover-effect">View</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Monitoring And Management
                    <Link to="/assessment/MonitoringAndManagement" className="btn btn-outline-dark btn-sm btn-hover-effect">View</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
  
};

export default Dashboard;
