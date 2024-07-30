import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PieChart from './PieChart'; // Import the PieChart component
import '../Assessmentpages.css';

const assessmentsData = {
  PhysicalSecurity: [
    {
      title: "Access Controls",
      questions: [
        {
          text: "Do you use biometric authentication for access to critical areas?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are electronic card access systems implemented for all entry points?",
          options: ["Yes, with audit logs (3)", "Yes, without audit logs (2)", "No (1)"]
        },
        {
          text: "Are audit logs maintained for all access points?",
          options: ["Yes, regularly reviewed (4)", "Yes, but not regularly reviewed (3)", "No (1)"]
        },
        {
          text: "How often are access logs reviewed?",
          options: ["Daily (4)", "Weekly (3)", "Monthly (2)", "Rarely (1)"]
        },
        {
          text: "Are there manual access logs as a backup for electronic systems?",
          options: ["Yes (3)", "No (1)"]
        },
        {
          text: "Are there access controls for different security zones within the datacenter?",
          options: ["Yes, multiple zones (4)", "Yes, basic zones (3)", "No (1)"]
        }
      ]
    },
    {
      title: "Surveillance",
      questions: [
        {
          text: "Is there CCTV coverage for all entry and exit points?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Are CCTV cameras positioned to cover critical areas?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "How often is surveillance footage reviewed?",
          options: ["Daily (4)", "Weekly (3)", "Monthly (2)", "Rarely (1)"]
        },
        {
          text: "Are CCTV recordings stored securely?",
          options: ["Yes, encrypted (4)", "Yes, not encrypted (3)", "No (1)"]
        },
        {
          text: "Is there a retention policy for surveillance footage?",
          options: ["Yes, long-term (4)", "Yes, short-term (3)", "No (1)"]
        },
        {
          text: "Are surveillance cameras regularly maintained and tested?",
          options: ["Yes, quarterly (4)", "Yes, annually (3)", "No (1)"]
        }
      ]
    },
    {
      title: "Perimeter Security",
      questions: [
        {
          text: "Is there fencing around the entire perimeter of the datacenter?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Are entry points to the facility controlled and monitored?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Is there adequate lighting around the perimeter of the facility?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Are there physical barriers to prevent vehicle access to critical areas?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Are security patrols conducted regularly around the perimeter?",
          options: ["Yes, frequently (4)", "Yes, occasionally (3)", "No (1)"]
        },
        {
          text: "Are there motion sensors installed around the perimeter?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        }
      ]
    },
    {
      title: "Intrusion Detection",
      questions: [
        {
          text: "Are motion detectors installed in all critical areas?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Are alarms connected to intrusion detection systems?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "How often are intrusion detection systems tested?",
          options: ["Quarterly (4)", "Annually (3)", "No testing (1)"]
        },
        {
          text: "Are there panic buttons or emergency alerts in case of security breaches?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Are there procedures for responding to intrusion alerts?",
          options: ["Yes, documented and trained (4)", "Yes, but not trained (3)", "No (1)"]
        },
        {
          text: "Is there an automated notification system for security breaches?",
          options: ["Yes (4)", "No (1)"]
        }
      ]
    }
  ],
  EnvironmentalControls: [
    {
      title: "Temperature and Humidity",
      questions: [
        {
          text: "Are there monitoring systems for temperature and humidity levels?",
          options: ["Yes, continuous monitoring (4)", "Yes, periodic monitoring (3)", "No (1)"]
        },
        {
          text: "Are alert systems in place for temperature and humidity anomalies?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are redundant HVAC systems installed?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "How often are HVAC systems maintained?",
          options: ["Quarterly (4)", "Annually (3)", "No maintenance (1)"]
        },
        {
          text: "Are temperature and humidity levels logged continuously?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Is there a policy for acceptable temperature and humidity ranges?",
          options: ["Yes, documented (4)", "No (1)"]
        }
      ]
    },
    {
      title: "Fire Suppression",
      questions: [
        {
          text: "Are automatic fire suppression systems installed?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "How often are fire suppression systems tested?",
          options: ["Quarterly (4)", "Annually (3)", "No testing (1)"]
        },
        {
          text: "Are fire extinguishers available in all critical areas?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are staff trained on the use of fire extinguishers?",
          options: ["Yes, regularly (4)", "Yes, but not regularly (3)", "No (1)"]
        },
        {
          text: "Are smoke detectors installed throughout the datacenter?",
          options: ["Yes (4)", "Partial (3)", "No (1)"]
        },
        {
          text: "Are fire suppression systems regularly maintained?",
          options: ["Yes, quarterly (4)", "Annually (3)", "No maintenance (1)"]
        }
      ]
    },
    {
      title: "Water Leak Detection",
      questions: [
        {
          text: "Are water leak sensors installed in critical areas?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are immediate alerts generated for detected water leaks?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are there procedures for responding to water leaks?",
          options: ["Yes, documented and trained (4)", "Yes, but not trained (3)", "No (1)"]
        },
        {
          text: "Are water leak sensors regularly tested?",
          options: ["Yes, quarterly (4)", "Annually (3)", "No testing (1)"]
        },
        {
          text: "Is there a policy for preventing water damage?",
          options: ["Yes, documented (4)", "No (1)"]
        },
        {
          text: "Are drainage systems regularly inspected and maintained?",
          options: ["Yes, quarterly (4)", "Annually (3)", "No maintenance (1)"]
        }
      ]
    }
  ],
  PowerInfrastructure: [
    {
      title: "UPS Systems",
      questions: [
        {
          text: "Are redundant UPS systems installed for critical equipment?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "How often are UPS systems tested and maintained?",
          options: ["Quarterly (4)", "Annually (3)", "No testing (1)"]
        },
        {
          text: "Are UPS systems monitored for performance?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are there sufficient UPS units to support all critical equipment?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Is there a policy for UPS battery replacement?",
          options: ["Yes, documented (4)", "No (1)"]
        },
        {
          text: "Are load tests conducted on UPS systems regularly?",
          options: ["Yes, quarterly (4)", "Annually (3)", "No testing (1)"]
        }
      ]
    },
    {
      title: "Power Distribution Units (PDUs)",
      questions: [
        {
          text: "Are redundant PDUs installed with load balancing?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are PDUs monitored for power consumption and performance?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "How often are PDUs maintained and inspected?",
          options: ["Quarterly (4)", "Annually (3)", "No maintenance (1)"]
        },
        {
          text: "Are there sufficient PDUs to support all critical equipment?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are PDU circuits regularly tested for load capacity?",
          options: ["Yes, quarterly (4)", "Annually (3)", "No testing (1)"]
        },
        {
          text: "Is there a policy for PDU replacement and upgrade?",
          options: ["Yes, documented (4)", "No (1)"]
        }
      ]
    },
    {
      title: "Backup Generators",
      questions: [
        {
          text: "Are backup generators installed to support the datacenter?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "How often are backup generators tested and maintained?",
          options: ["Quarterly (4)", "Annually (3)", "No maintenance (1)"]
        },
        {
          text: "Are fuel levels for generators regularly checked?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Are generators tested under full load conditions?",
          options: ["Yes (4)", "No (1)"]
        },
        {
          text: "Is there a policy for generator fuel replenishment?",
          options: ["Yes, documented (4)", "No (1)"]
        },
        {
          text: "Are generators monitored for performance during outages?",
          options: ["Yes (4)", "No (1)"]
        }
      ]
    }
  ],
  NetworkingInfrastructure: [
  {
    title: "Network Redundancy",
    questions: [
      {
        text: "Are redundant network paths implemented for critical systems?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "How often are network failover mechanisms tested?",
        options: ["Quarterly (4)", "Annually (3)", "No testing (1)"]
      },
      {
        text: "Is there a documented network topology diagram?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are network redundancy policies in place?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Are there automatic failover systems for network paths?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are backup network connections tested regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No testing (1)"]
      }
    ]
  },
  {
    title: "Switches and Routers",
    questions: [
      {
        text: "Are firmware updates for switches and routers applied regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No updates (1)"]
      },
      {
        text: "Are switches and routers monitored for performance and security?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are there procedures for responding to network congestion?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Are network devices configured for optimal performance?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Is there a policy for replacing outdated network hardware?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Are switches and routers regularly audited for security compliance?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No audits (1)"]
      }
    ]
  },
  {
    title: "Cable Management",
    questions: [
      {
        text: "Is cabling organized and labeled throughout the datacenter?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are there regular audits for cable integrity?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No audits (1)"]
      },
      {
        text: "Are cable management best practices followed?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Is there a policy for adding and removing cables?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Are there cable trays and pathways to prevent damage?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are cables inspected for wear and tear regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No inspections (1)"]
      }
    ]
  }
],
ServerAndHardware: [
  {
    title: "Server Configuration",
    questions: [
      {
        text: "Are server configurations audited regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No audits (1)"]
      },
      {
        text: "Is there documentation for all server configurations?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are servers configured according to best practices?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are security patches applied to servers regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No patches (1)"]
      },
      {
        text: "Is there a policy for server configuration changes?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Are servers monitored for performance and security?",
        options: ["Yes (4)", "No (1)"]
      }
    ]
  },
  {
    title: "Hardware Maintenance",
    questions: [
      {
        text: "Are regular checks conducted for hardware wear and tear?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No checks (1)"]
      },
      {
        text: "Is there a scheduled maintenance plan for hardware components?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Are warranties and support contracts documented for all hardware?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are spare parts available for critical hardware components?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are hardware devices inventoried and tracked?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Is there a policy for decommissioning and disposing of old hardware?",
        options: ["Yes, documented (4)", "No (1)"]
      }
    ]
  }
],
DataBackupAndRecovery: [
  {
    title: "Backup Procedures",
    questions: [
      {
        text: "Are regular automated backups performed for critical data?",
        options: ["Yes, daily (4)", "Yes, weekly (3)", "Yes, monthly (2)", "No (1)"]
      },
      {
        text: "Is there offsite storage for backups?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are backup procedures documented and followed?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are backup integrity checks performed regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No checks (1)"]
      },
      {
        text: "Are there alerts for backup failures?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are backups encrypted for security?",
        options: ["Yes (4)", "No (1)"]
      }
    ]
  },
  {
    title: "Disaster Recovery Plan",
    questions: [
      {
        text: "Is there a documented and tested disaster recovery plan?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are regular drills conducted for disaster recovery?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No drills (1)"]
      },
      {
        text: "Are recovery time objectives (RTO) and recovery point objectives (RPO) defined?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are disaster recovery procedures reviewed and updated regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No reviews (1)"]
      },
      {
        text: "Is there a failover site for disaster recovery?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are disaster recovery team members trained and informed?",
        options: ["Yes, regularly (4)", "Yes, but not regularly (3)", "No (1)"]
      }
    ]
  }
],
MonitoringAndManagement: [
  {
    title: "Alerting Systems",
    questions: [
      {
        text: "Are continuous monitoring systems in place for key performance indicators?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are immediate alerts generated for anomalies?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are there procedures for responding to alerts?",
        options: ["Yes, documented (4)", "No (1)"]
      },
      {
        text: "Are alert thresholds and criteria defined?",
        options: ["Yes (4)", "No (1)"]
      },
      {
        text: "Are monitoring systems tested regularly?",
        options: ["Yes, quarterly (4)", "Annually (3)", "No testing (1)"]
      },
      {
        text: "Are there backup monitoring systems in place?",
        options: ["Yes (4)", "No (1)"]
      }
    ]
  }
]
};
  const assessments = [
    {
      type: 'Physical Security',
      sections: [
        { title: 'Access Controls', totalMarks: 40, color: 'red' },
        { title: 'Surveillance', totalMarks: 30, color: 'yellow' },
        { title: 'Perimeter Security', totalMarks: 20, color: 'green' },
        { title: 'Intrusion Detection', totalMarks: 10, color: 'blue' },
      ],
    },
    {
      type: 'Environmental Controls',
      sections: [
        { title: 'Temperature Control', totalMarks: 35, color: 'red' },
        { title: 'Humidity Control', totalMarks: 25, color: 'yellow' },
        { title: 'Fire Suppression', totalMarks: 20, color: 'green' },
        { title: 'Water Detection', totalMarks: 20, color: 'blue' },
      ],
    },
    {
      type: 'Power Infrastructure',
      sections: [
        { title: 'UPS Systems', totalMarks: 50, color: 'red' },
        { title: 'Generator Backup', totalMarks: 25, color: 'yellow' },
        { title: 'Power Distribution', totalMarks: 15, color: 'green' },
        { title: 'Electrical Wiring', totalMarks: 10, color: 'blue' },
      ],
    },
    {
      type: 'Networking Infrastructure',
      sections: [
        { title: 'Network Security', totalMarks: 40, color: 'red' },
        { title: 'Bandwidth Management', totalMarks: 30, color: 'yellow' },
        { title: 'Network Redundancy', totalMarks: 20, color: 'green' },
        { title: 'Cabling and Connectivity', totalMarks: 10, color: 'blue' },
      ],
    },
    {
      type: 'Server and Hardware',
      sections: [
        { title: 'Server Performance', totalMarks: 30, color: 'red' },
        { title: 'Hardware Maintenance', totalMarks: 40, color: 'yellow' },
        { title: 'Data Storage', totalMarks: 20, color: 'green' },
        { title: 'Cooling Systems', totalMarks: 10, color: 'blue' },
      ],
    },
    {
      type: 'Data Backup and Recovery',
      sections: [
        { title: 'Backup Solutions', totalMarks: 35, color: 'red' },
        { title: 'Recovery Procedures', totalMarks: 25, color: 'yellow' },
        { title: 'Data Integrity', totalMarks: 20, color: 'green' },
        { title: 'Backup Frequency', totalMarks: 20, color: 'blue' },
      ],
    },
    {
      type: 'Monitoring and Management',
      sections: [
        { title: 'System Monitoring', totalMarks: 30, color: 'red' },
        { title: 'Performance Metrics', totalMarks: 30, color: 'yellow' },
        { title: 'Alert Systems', totalMarks: 20, color: 'green' },
        { title: 'Management Tools', totalMarks: 20, color: 'blue' },
      ],
    },
  ];


const QuestionSection = ({ section, onChange }) => {
  return (
    <div className="mb-4 small-font">
      <h5>{section.title}</h5>
      {section.questions.map((question, qIndex) => (
        <div className="mb-3" key={qIndex}>
          <label className="form-label">{question.text}</label>
          <select
            className="form-select mb-2"
            onChange={(e) => onChange(e, section.title, question.text, 'option')}
            defaultValue=""
          >
            <option value="">Select an option</option>
            {question.options.map((option, oIndex) => (
              <option key={oIndex} value={option}>{option}</option>
            ))}
          </select>
          <input
            type="file"
            className="form-control mb-2"
            placeholder="Upload File"
            onChange={(e) => onChange(e, section.title, question.text, 'file')}
          />
          <textarea
            className="form-control"
            rows="3"
            placeholder="Comments"
            onChange={(e) => onChange(e, section.title, question.text, 'comment')}
          />
        </div>
      ))}
    </div>
  );
};

const AssessmentPage = () => {
  const { type } = useParams();
  const assessment = assessmentsData[type];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e, sectionTitle, question, fieldType) => {
    const value = fieldType === 'file' ? e.target.files[0] : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [sectionTitle]: {
        ...prev[sectionTitle],
        [question]: {
          ...prev[sectionTitle]?.[question],
          [fieldType]: value
        }
      }
    }));
  };

  if (!assessment) {
    return <div>Assessment not found</div>;
  }

 

  const handleSubmit = () => {
    // Check if any question in any section is incomplete
    const isIncomplete = assessment.some(section =>
      section.questions.some(question =>
        !formData[section.title]?.[question.text]?.option ||
        !formData[section.title]?.[question.text]?.comment
      )
    );

    if (isIncomplete) {
      alert('Please complete all fields.');
      return;
    }

    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      alert('Assessment submitted successfully!');
      navigate('/dashboard'); // Navigate to the dashboard after submission
    }, 2000);
  };

  return (
    <div className="container mt-5">
    <form>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Assessment: {type}</h2>
              <PieChart sections={sections} />

              {assessment.map((section, index) => (
                <QuestionSection key={index} section={section} onChange={handleChange} />
              ))}
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit Assessment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};
const sections = [
  { title: 'Access Controls', totalMarks: 40, color: 'red' },
  { title: 'Surveillance', totalMarks: 30, color: 'yellow' },
  { title: 'Perimeter Security', totalMarks: 20, color: 'green' },
  { title: 'Intrusion Detection', totalMarks: 10, color: 'blue' },
];



export default AssessmentPage;
