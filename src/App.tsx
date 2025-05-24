
import './App.css'
import { LinkComponent } from './componets/LinkComponent'
import { Resume } from './icons/Resume'
import { GitHub } from './icons/GitHub'
import { LinkdenIcon } from './icons/LinkedIn'
import { Mail } from './icons/Mail'
import { ProjectComponent } from './componets/ProjectComponent'
import { ToolComponents } from './componets/ToolComponent'
import { useState } from 'react'
import { Popup } from './componets/ProjectPopUp'
import GitHubCalendar from 'react-github-calendar'

function App() {

  const [showProject1, setShowProject1] = useState(false)
  const [showProject2, setShowProject2] = useState(false)
  const [showProject3, setShowProject3] = useState(false)
  return (
    <>
      <div className='w-screen h-screen'>
        <div className="bg-amber-200 h-48 w-full overflow-hidden">
          <img
            src="/cover.png"
            className="w-full h-full object-cover"
            alt="Cover"
          />
        </div>
        <h1 className='pl-28 text-3xl font-bold'>Pavankumar Khaire</h1>
        <div className='pl-28 pr-28 flex justify-around gap-2'>
          <div className='p-2'>I’m a final-year MSc in Computer Applications student with strong technical skills in full-stack development using the MERN stack, Java, and MySQL. I enjoy solving real-world problems through clean, efficient code and intuitive user experiences. With a solid grasp of both frontend and backend technologies, I’m passionate about creating scalable web applications and continuously expanding my knowledge. I’m currently seeking a software development role where I can apply my skills, collaborate with driven teams, and grow in a professional environment.</div>
          <div className='space-y-2'>
            <LinkComponent startIcon={<Resume />} linkName={'Resume'} link={'/Pavan-Resume.pdf'} // Path from public folder
              download />
            <LinkComponent startIcon={<GitHub />} linkName={'Git-Hub'} link={'https://github.com/pavankhairee'} />
            <LinkComponent startIcon={<LinkdenIcon />} linkName={'Linked'} link={'https://www.linkedin.com/in/pavankumar-khaire-95a592213/'} />
            <LinkComponent startIcon={<Mail />} linkName={'Mail'} link={'mailto:pavankhaire2002@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you'}
            />
          </div>
        </div>

        <div className='pl-28 pr-28 pt-2'>
          <h1 className='text-3xl bg-gray-300 p-2'>MY WORK</h1>
          <div className='flex justify-between gap-2 cursor-pointer'>

            <ProjectComponent onClick={() => setShowProject1(true)} name={'The Social Brain'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s'} />
            {showProject1 && (
              <Popup
                onClose={() => setShowProject1(false)}
                gitLink="https://github.com/pavankhairee/the-social-brain"
                description='Social Media Aggregation and Interaction Platform'
                tools='React, Node.js, Express, MongoDB, Tailwind CSS, JWT'
                features={[
                  "Built a dynamic user interface using functional components and state management with hooks.",
                  'JWT-based user authentication with secure access tokens and protected routes Generated access tokens upon successful login/signup to authorize user sessions.',
                  "Created a RESTful API to handle data fetching and user interactions.",
                  "Implemented client-side filtering. Allowed users to filter aggregated content based on platform,(image, text, link).",
                  "Developed a feature to generate shareable link with curated content, stored in the database with a uniqueID."
                ]}
              />)}

            <ProjectComponent onClick={() => setShowProject2(true)} name={'Hotel Room Service'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s'} />
            {showProject2 && (
              <Popup
                onClose={() => setShowProject2(false)}
                gitLink="https://github.com/pavankhairee/room-service-online"
                description="A system for hotel guests to order food via a responsive web app."
                tools="React.js, Tailwind CSS, Node.js, PostgreSQL, Express.js"
                features={[
                  "Built a responsive React.js hotel room service app with dynamic menu, cart, and order placement features.",
                  "Integrated secure API calls (Axios, JWT) for orders, billing, and history with localStorage-based cart management.",
                  "Created reusable TypeScript + Tailwind UI components for scalable and consistent design.",
                  "Designed and implemented a relational database schema using PostgreSQL with normalization and foreign keys.",
                  "Developed a secure auth system: guests log in using phone/room number, admins with credentials (JWT).",
                  "Built RESTful Express.js APIs (with TypeScript) to manage sign-up, orders, billing, and menu updates.",
                  "Handled complex SQL queries (JOINs) to retrieve real-time order and billing info per guest/admin view."
                ]}
              />)}

            <ProjectComponent onClick={() => setShowProject3(true)} name={'Chat Application'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s'} />
            {showProject3 && (
              <Popup
                onClose={() => setShowProject3(false)}
                gitLink="https://github.com/pavankhairee/xo-chat-room"
                description="A real-time chat application built using MERN and WebSockets."
                tools="MERN Stack, Tailwind CSS"
                features={[
                  "Developed a real-time chat app using WebSockets for two users to chat in a shared room.",
                  "Implemented room-based communication with Socket.IO for managing sessions and live message updates.",
                  "Built with MongoDB, Express.js, React.js, and Node.js using TypeScript for better type safety.",
                  "Integrated turn-based logic to support in-chat games or alternate actions."
                ]}
              />

            )}

          </div>
        </div>

        <div className='pl-28 pr-28 pt-2'>
          <h1 className='text-3xl bg-gray-300 p-2'>TOOLS AND TECHNOLOGY</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
            <ToolComponents name="React" image="/icons/react.png" />
            <ToolComponents name="Node.js" image="/icons/node.png" />
            <ToolComponents name="MongoDB" image="/icons/mongodb.png" />
            <ToolComponents name="JavaScript" image="/icons/javascript.png" />
            <ToolComponents name="JavaScript" image="/icons/typescript.png" />
            <ToolComponents name="MySQL" image="/icons/postgresql.png" />
            <ToolComponents name='Postgress' image='/icons/postgresql.png' />
            <ToolComponents name='Express' image='/icons/express.png' />
          </div>
        </div>

        <GitHubCalendar username='pavankhairee' />
      </div >
    </>
  )
}

export default App
