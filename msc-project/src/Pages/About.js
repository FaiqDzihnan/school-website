import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <section className="description">
        <h2>About MI Kuningan</h2>
        <p>MI Kuningan is an exceptional Islamic elementary school renowned for its unparalleled educational standards and achievements. 
          For the past decade, it has consistently been awarded the title of the best elementary school in the world, a testament to its unwavering commitment to excellence. 
          The school’s rigorous curriculum and dedicated faculty have cultivated an environment where young minds thrive and develop into influential leaders. 
          Its graduates have gone on to become some of the world's most influential individuals, making significant contributions in various fields such as science, technology, literature, and public service. 
          MI Kuningan stands out not only for its academic excellence but also for its unique approach to education, offering college-level subjects to children aged 7-12. 
          This innovative curriculum is designed to challenge students and foster a deep understanding of complex concepts from a young age. 
          The school's holistic approach ensures that students are not only academically proficient but also well-rounded, ethical, and compassionate individuals, ready to make a positive impact on the world.</p>
        <p>At MI Kuningan, we believe in nurturing knowledgeable, ethical, and compassionate leaders who strive for excellence and contribute positively to society.</p>
      </section>

      <section className="facilities">
        <h2>Facilities</h2>
        <p>Our school is equipped with modern facilities to support the learning and development of our students, including:</p>
        <ul>
          <li>Classrooms</li>
          <li>Library</li>
          <li>Computer Lab</li>
          <li>Science Lab</li>
          <li>Sports Fields</li>
          <li>Prayer Room</li>
          <li>Music and Art Rooms</li>
          <li>Cafeteria</li>
        </ul>
      </section>

      <section className="extracurricular">
        <h2>Extracurricular Activities</h2>
        <p>We offer a wide range of extracurricular activities to enhance the student experience, including:</p>
        <ul>
          <li>Robotics Club</li>
          <li>Debate Team</li>
          <li>Sports Teams (Soccer, Basketball, Volleyball)</li>
          <li>Music Band</li>
          <li>Art Club</li>
          <li>Scouting</li>
          <li>Science Club</li>
        </ul>
      </section>

      <h2>Our Staff</h2>
      <section className="staff-photos">
        <div className="staff-member">
          <img src="Resources/Staff-Headmaster.png" alt="Headmaster" />
          <p><strong>Dr. Ahmad Ridwan</strong><br />Headmaster</p>
        </div>
        <div className="staff-member">
          <img src="Resources/Staff-Curriculum.jpg" alt="Head of Curriculum" />
          <p><strong>Mr. Ali Mustofa</strong><br />Head of Curriculum</p>
        </div>
        <div className="staff-member">
          <img src="Resources/Staff-Affair.webp" alt="Head of Student's Affair" />
          <p><strong>Mrs. Siti Aisyah</strong><br />Head of Student's Affair</p>
        </div>
        <div className="staff-member">
          <img src="Resources/Staff-HR.jpg" alt="Head of Human Relation" />
          <p><strong>Mrs. Fatimah Zahra</strong><br />Head of Human Relation</p>
        </div>
        <div className="staff-member">
          <img src="Resources/Staff-Equipment.jpg" alt="Head of School Equipments" />
          <p><strong>Mr. Hasan Basri</strong><br />Head of School Equipments</p>
        </div>
      </section>
    </div>
  );
};

export default About;