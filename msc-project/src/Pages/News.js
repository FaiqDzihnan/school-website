import React from 'react';
import './News.css'; 

const News = () => {
  const events = [
    { name: "Graduation Ceremony 2024", photo: "Resources/graduation-ceremony.jpg", link: "#graduation" },
    { name: "10th School Anniversary", photo: "Resources/anniversary.jpg", link: "#anniversary" },
    { name: "Science Fair Winners", photo: "Resources/Science-fair.jpg", link: "/article/science-competition" },
    { name: "Sports Day 2024", photo: "Resources/sport-fair.jpg", link: "#sports-day" },
    { name: "Art Exhibition 2024", photo: "Resources/art-exhibition.jpg", link: "#art-exhibition" },
    { name: "Robotics Competition", photo: "Resources/robotic-competition.jpg", link: "#robotics" },
    { name: "Cultural Festival", photo: "Resources/culture-festival.jpg", link: "#cultural-festival" },
    { name: "Math Olympiad Winners", photo: "Resources/Math-Olymp.jpeg", link: "#math-olympiad" },
    { name: "Student Council Elections", photo: "Resources/student-council-election.jpg", link: "#student-council" },
  ];

  return (
    <div className="news-container">
      {events.map((event, index) => (
        <div className={`news-column ${index % 3 === 0 ? 'new-row' : ''}`} key={index}>
          <a href={event.link} className="news-link">
            <img src={event.photo} alt={event.name} className="news-photo" />
            <h3>{event.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;