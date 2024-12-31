import React from 'react';
 import Image from 'next/image';
import Project from '/public/assets/Images/Project.jpg';
    import Link from 'next/link';
 const ProjectShowcase = () => { 
    return ( 
<div className="text-white mt-12">
 <h2 className="text-2xl font-bold">FEATURED <span className="text-orange-500">PROJECT</span></h2> 
 <div className="mt-6 flex flex-col items-center">
     <Image src={Project} alt="Project Screenshot" width={800} height={450} className="object-cover rounded-lg shadow-lg" /> 
 <Link href="https://bazzie781.github.io/Coffe/" className="mt-4 px-6 py-3 bg-[#28bccf] text-white font-light rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"> Visit Project 
   </Link>
 <p className="text-sm text-gray-400 mt-2 px-4 text-center">A Next.js showcase project. </p>
  </div>
   </div>
    );
 };
  export default ProjectShowcase;