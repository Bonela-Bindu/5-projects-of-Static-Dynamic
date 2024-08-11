import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" A Social Media Clone is a replica or imitation of an existing social media platform, built to mimic its features, design, and functionality. The purpose of creating a social media clone can vary—it might be for learning, experimentation, or as a foundation to build a new, unique platform."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" 
An E-commerce Website is an online platform that allows businesses to sell products or services to customers over the internet. These websites provide a digital storefront where users can browse products, add items to a shopping cart, and complete purchases through secure payment systems."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" A Chatting App is a software application designed to enable real-time communication between users via text, voice, or video. These apps allow users to send instant messages, share multimedia files, create group chats, and make voice or video calls."
          src={projectThree}
        />
     
      </div>
    </section>
  );
}

export default Projects