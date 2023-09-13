// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         {/* <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p> */}
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import Posts from "./components/Posts";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//         <h1>Sagar Radadiya Flutter / iOS Developer</h1>
//         <h1><u>sagarradadiya55@gmail.com</u></h1>
//       </header>
//       <Posts />
//     </div>
//   );
// }

// export default App;



// *******************  Api Call working code   ****************************

// import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// function App() {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts') // Use HTTPS here
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Sagar Radadiya Flutter / iOS Developer</h1>
//         <h1>
//           <u>sagarradadiya55@gmail.com</u>
//         </h1>
//       </header>
//       <ul className="posts">
//         {posts.map((post) => (
//           <li className="post" key={post.id}>
//             <h4>{post.title}</h4>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// *******************  Resume code   ****************************


import React from 'react';
import './App.css';

const resumeData = {
  name: 'Sagar R. Radadiya',
  title: 'Sr. Mobile App Developer',
  email: 'sagarradadiya55@gmail.com',
  phone: '+91 8668659825 / 7028444036 (WhatsApp)',
  careerObjective:
    'Seeking an entry-level position in a dynamic and growth-oriented organization, where I can contribute my skills, knowledge, and enthusiasm to learn and grow in the industry.',
  technicalSkills: [
    'Mobile Development: Flutter, iOS, Android.',
    'Programming Skills: Core Java, Swift5, Dart, HTML, JavaScript, PHP.',
    'DBMS: SQLite Database, Firebase.',
    'Development Environment: Xcode, Android Studio.',
    'Repository (Version Control Software): Github, Bit Bucket.',
    'Design: UI, XML, Material Design.',
    'Backend Technology: API Integration, JSON, Alamofire',
    'Google Technologies: Google Cloud Platform, Firebase RealTime Database, App. Release and Monitor, Push notification and Messaging, Cloud Storage, GCM, Google Play Store (App. Publishing Life Cycle Management), Apple App Store (App. Publishing Life Cycle Management)',
  ],
  workExperience: [
    {
      position: 'Mobile App Developer Team Lead (6 Years)',
      company: 'WORK24 - Raidlayer Webhost Pvt. Ltd',
      description:
        'He Worked with our technical team to set out a vision for our mobile engineering. Design and build advanced applications for the Flutter/Android/iOS',
      brands: [
        'WORK24',
        'RAIDLAYER',
        'RAIDLAYER NETWORK',
        'TECHPOLICE',
        'APPSARA',
        'ZVAH',
        'HostingBLUE',
      ],
      projects: [
        {
          name: 'Hotel Booking App',
          client: 'COCOTEL International',
          country: 'Philippines (Asia)',
          techStack: '[Team Lead] IOS, Android, Firebase, xendit, PayMAYA, SQLite',
        },
        {
          name: 'Pedometer App',
          client: 'NRC',
          country: 'Abu Dabhi (UAE)',
          techStack: '[Team Lead] IOS, Android',
        },
        // Add more projects here
      ],
    },
    // Add more work experience here
  ],
  languages: ['English(Conversational)', 'Hindi(Professional)', 'Gujarati(Native)'],
  nationality: 'Indian',
  strengths: ['Good Coordination skill', 'Quick learner', 'Strong analytical skill'],
};

function App() {
  return (
    <div className="resume">
      <header className="header">
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <p>Email: {resumeData.email}</p>
        <p>Phone: {resumeData.phone}</p>
      </header>

      <section className="section">
        <h2>Career Objective</h2>
        <p>{resumeData.careerObjective}</p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <ul>
          {resumeData.technicalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        {resumeData.workExperience.map((experience, index) => (
          <div key={index} className="experience">
            <h3>{experience.position}</h3>
            <p>{experience.company}</p>
            <p>{experience.description}</p>
            <ul>
              {experience.brands.map((brand, brandIndex) => (
                <li key={brandIndex}>{brand}</li>
              ))}
            </ul>
            <h4>Projects:</h4>
            <ul>
              {experience.projects.map((project, projectIndex) => (
                <li key={projectIndex}>
                  <strong>{project.name}</strong>
                  <p>Client: {project.client}</p>
                  <p>Country: {project.country}</p>
                  <p>Tech Stack: {project.techStack}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Languages Known</h2>
        <ul>
          {resumeData.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <p>Nationality: {resumeData.nationality}</p>
      </section>

      <section className="section">
        <h2>Strengths</h2>
        <ul>
          {resumeData.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;

