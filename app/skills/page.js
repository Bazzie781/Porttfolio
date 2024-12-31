import React from 'react';
 import { SiNextdotjs, SiReact, SiFigma, SiHtml5, SiBootstrap, SiJavascript } from 'react-icons/si'; 
 const SkillsShowcase = () => { 
const skills = [ { icon: <SiNextdotjs size={32} className="text-white" />, 
    percentage: '60%',
     name: 'NEXT.JS' },
      { icon: <SiReact size={32} className="text-blue-500" />,
       percentage: '70%',
        name: 'REACT' },
         { icon: <SiFigma size={32} className="text-purple-500" />,
         percentage: '60%',
          name: 'FIGMA' },
    { icon: <SiHtml5 size={32} className="text-orange-500" />,
 percentage: '80%', 
 name: 'HTML/CSS' },
  { icon: <SiJavascript size={32} className="text-yellow-500" />,
   percentage: '80%',
    name: 'JavaScript' },
     { icon: <SiBootstrap size={32} className="text-purple-700" />,
      percentage: '60%', name: 'Bootstrap' },
     ];
      return ( <div className="text-white mt-12"> <h2 className="text-2xl font-bold"> MY <span className="text-orange-500">SKILLS</span> </h2> <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"> {skills.map((skill, index) => ( <div key={index} className="flex flex-col items-center p-6 border border-white rounded-full"> {skill.icon} <p className="text-orange-500 mt-2">{skill.percentage}</p> <p className="text-white mt-1 hidden md:block">{skill.name}</p> </div> ))} </div> </div> ); }; export default SkillsShowcase;