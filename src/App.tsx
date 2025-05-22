
import './App.css'
import { LinkComponent } from './componets/LinkComponent'
import { Resume } from './icons/Resume'
import { GitHub } from './icons/GitHub'
import { LinkdenIcon } from './icons/LinkedIn'
import { Mail } from './icons/Mail'
import { ProjectComponent } from './componets/ProjectComponent'
import { ToolComponents } from './componets/ToolComponent'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='w-screen h-screen'>
        <div className='bg-amber-200 h-35'>cover page</div>
        <h1 className='pl-28 text-3xl'>pavankh</h1>
        <div className='pl-28 pr-28 flex justify-around gap-2'>
          <div className='p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            aspernatur vero. Error impedit sapiente consectetur
            aliquid eius aspernatur numquam obcaecati eos,
            laudantium alias, fugit officia, veritatis illo quidem sed sit.</div>
          <div className='space-y-2'>
            <LinkComponent startIcon={<Resume />} linkName={'Resume'} link={''} />
            <LinkComponent startIcon={<GitHub />} linkName={'Git-Hub'} link={''} />
            <LinkComponent startIcon={<LinkdenIcon />} linkName={'Linked'} link={''} />
            <LinkComponent startIcon={<Mail />} linkName={'Mail'} link={''} />
          </div>
        </div>

        <div className='pl-28 pr-28 pt-2'>
          <h1 className='text-3xl bg-gray-300 p-2'>MY WORK</h1>
          <div className='flex justify-between gap-2'>
            <ProjectComponent name={'The Social Brain'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s'} />
            <ProjectComponent name={'Hotel Room Service'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s'} />
            <ProjectComponent name={'Chat Application'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s'} />
          </div>
        </div>

        <div className='pl-28 pr-28 pt-2'>
          <h1 className='text-3xl bg-gray-300 p-2'>TOOLS AND TECHNOLOGY</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
            <ToolComponents name="React" image="/icons/react.png" />
            <ToolComponents name="Node.js" image="/icons/node.png" />
            <ToolComponents name="MongoDB" image="/icons/mongodb.png" />
            <ToolComponents name="Tailwind" image="/icons/tailwind.png" />
            <ToolComponents name="JavaScript" image="/icons/javascript.png" />
            <ToolComponents name="JavaScript" image="/icons/typescript.png" />
            <ToolComponents name="MySQL" image="/icons/postgresql.png" />
            <ToolComponents name="MySQL" image="/icons/mysql.png" />

          </div>
        </div>
      </div>
    </>
  )
}

export default App
