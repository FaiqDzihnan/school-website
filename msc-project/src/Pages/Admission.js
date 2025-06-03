import React from 'react';
import './Admission.css';
import { Link } from 'react-router-dom';

const Admission = () => {
  return (
    <div className="admission-container">
      <section className="admission-description">
        <h2>Admission to MI Kuningan</h2>
        <p>Welcome to MI Kuningan, where we offer a comprehensive and enriching education experience. Our admission process is designed to be transparent and straightforward, ensuring that each student finds the right path to success. We offer various admission categories to cater to different student needs, including academic, non-academic, and regular students.</p>
        <p>Our mission is to nurture knowledgeable, ethical, and compassionate leaders who strive for excellence and contribute positively to society. We provide a holistic education that integrates Islamic teachings with contemporary knowledge, fostering a strong foundation in faith, character, and academic excellence.</p>
      </section>

      <section className="admission-timeline">
        <h2>Admission Timeline</h2>
        <div className="timeline-columns">
          <div className="timeline-column">
            <h3>Academic Students</h3>
            <ul>
              <li>Application Period: 1st January - 31st March</li>
              <li>Entrance Exam: 10th April</li>
              <li>Results Announcement: 20th April</li>
              <li>Enrollment: 1st May - 15th May</li>
            </ul>
            <br></br>
            <h4>Requirements</h4>
            <ol>
              <li>File/Photo Size 3X4, 1 sheet for those who do not have an account</li>
              <li>NISN (National Student Identification Number)</li>
              <li>NIK (National Identity Number)</li>
              <li>Photo of report card grades from the last 3 semesters of 5th and 6th grade with a minimum score of 85 for the subjects Indonesian Language, Mathematics, and Science (image format/jpg maximum 250 kb)</li>
              <li>Photo of certificates/awards for 1st, 2nd, and 3rd place at the City/Regency level and 1st, 2nd, and 3rd place at the provincial level (image format/jpg maximum 250 kb)</li>
              <li>Participate in the CBT academic test for the subjects Indonesian Language, Mathematics, Science, and Islamic Religious Education</li>
              <li>Participate in the competency test according to the certificate/award</li>
            </ol>
          </div>
          <div className="timeline-column">
            <h3>Non-Academic Students</h3>
            <ul>
              <li>Application Period: 1st February - 30th April</li>
              <li>Talent Assessment: 15th May</li>
              <li>Results Announcement: 25th May</li>
              <li>Enrollment: 1st June - 15th June</li>
            </ul>
            <br></br>
            <h4>Requirements</h4>
            <ol>
              <li>File/Photo Size 3X4, 1 sheet for those who do not have an account</li>
              <li>NISN (National Student Identification Number)</li>
              <li>NIK (National Identity Number)</li>
              <li>Photo of report card grades from the last 3 semesters of 5th and 6th grade with a minimum score of 85 for the subjects Indonesian Language, Mathematics, and Science (image format/jpg maximum 250 kb)</li>
              <li>Photo of certificates/awards for 1st, 2nd, and 3rd place at the City/Regency level and 1st, 2nd, and 3rd place at the provincial level (image format/jpg maximum 250 kb)</li>
              <li>Participate in the CBT academic test for the subjects Indonesian Language, Mathematics, Science, and Islamic Religious Education</li>
              <li>Participate in the competency test according to the certificate/award</li>
            </ol>
          </div>
          <div className="timeline-column">
            <h3>Regular Students</h3>
            <ul>
              <li>Application Period: 1st March - 31st May</li>
              <li>Interview and Orientation: 10th June</li>
              <li>Results Announcement: 20th June</li>
              <li>Enrollment: 1st July - 15th July</li>
            </ul>
            <br></br>
            <h4>Requirements</h4>
            <ol>
              <li>File/Photo Size 3X4, 1 sheet for those who do not have an account</li>
              <li>NISN (National Student Identification Number)</li>
              <li>NIK (National Identity Number)</li>
              <li>Photo of report card grades from the last 3 semesters of 5th and 6th grade with a minimum score of 85 for the subjects Indonesian Language, Mathematics, and Science (image format/jpg maximum 250 kb)</li>
              <li>Participate in the CBT academic test for the subjects Indonesian Language, Mathematics, Science, and Islamic Religious Education</li>
            </ol>
          </div>
        </div>
      </section>
      <div style={{textAlign:'center'}}><button className="register-button" style={{width: "100px"}}><Link to="/admission-form">Register</Link></button></div>
    </div>
  );
};

export default Admission;