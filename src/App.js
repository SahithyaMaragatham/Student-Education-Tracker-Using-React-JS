import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IoPeopleCircleOutline } from "react-icons/io5";
import { SiNginxproxymanager } from "react-icons/si";
import { PiSealPercentBold } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { LuFileBarChart2 } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { FaUser, FaBook, FaEnvelope, FaClinicMedical, FaCalendarAlt } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import './index.css';
import image from './logo.png';

const App = () => {
  const [regularStudents, setRegularStudents] = useState(8);
  const [remedialStudents, setRemedialStudents] = useState(13);
  const [inPaidClubs, setInPaidClubs] = useState(0);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo" style={{ padding: "10px" }}>
          <img src={image} alt='image' style={{ height: "150px", marginLeft: "50px" }} />
        </div>
        <ul className="menu">
          <li><IoPeopleCircleOutline className='nbar' /><br /> Management</li>
          <li><SiNginxproxymanager className='nbar' /><br /> Financial Management</li>
          <li><PiSealPercentBold className='nbar' /><br /> Quality Control</li>
          <li><TbReport className='nbar' /><br /> Report Delivery</li>
          <li><LuFileBarChart2 className='nbar' /><br /> Attendance</li>
          <li><FaRegQuestionCircle className='nbar' /><br /> Help</li>
          <li><IoMdSettings className='nbar' /><br /> Settings</li>
          <li><IoIosLogOut className='nbar' /><br /> Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h2 style={{ padding: "10px" }}> Student Management</h2>
        </div>
        <div className="stats">
          <div className="stat-item red">
            <FaUser className='logo11' />
            <h3>{regularStudents}</h3>
            <p style={{ fontSize: "20px" }}>Regular Students</p>
          </div>
          <div className="stat-item purple">
            <GiTeacher className='logo11' />
            <h3>{remedialStudents}</h3>
            <p style={{ fontSize: "20px" }}>Remedial Students </p>
          </div>
          <div className="stat-item green">
            <MdSchool className='logo11' />
            <h3>{inPaidClubs}</h3>
            <p style={{ fontSize: "20px" }}>In Paid Clubs</p>
          </div>
        </div>
        <div className="menu-grid">
          <div className="menu-item" onClick={() => setRegularStudents(regularStudents + 1)}>
            <FaUser />
            <p style={{ fontSize: "20px" }}>Regular Enrollment</p>
          </div>
          <div className="menu-item" onClick={() => setRemedialStudents(remedialStudents + 1)}>
            <FaBook />
            <p style={{ fontSize: "20px" }}>Remedial Enrollment</p>
          </div>
          <div className="menu-item" onClick={() => setInPaidClubs(inPaidClubs + 1)}>
            <MdSchool />
            <p style={{ fontSize: "20px" }}>Club Management</p>
          </div>
          <div className="menu-item">
            <GiTeacher />
            <p style={{ fontSize: "20px" }}>Classroom Management</p>
          </div>
          <div className="menu-item">
            <FaEnvelope />
            <p style={{ fontSize: "20px" }}>SMS / EMAIL</p>
          </div>
          <div className="menu-item">
            <FaCalendarAlt />
            <p style={{ fontSize: "20px" }}>Attendance</p>
          </div>
          <div className="menu-item">
            <FaClinicMedical />
            <p style={{ fontSize: "20px" }}>Clinic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
