import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer."
            subTitle="Google Out Tech."
            result="USA"
            des="Google monetized its search engine capabilities through Google Adwords, an online platform that enables the company to earn revenue through pay-per-click advertising. "
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team"
            result="MALAYSIA"
            des="he company's Exceeds Expectations and Above and Beyond recognition programs encourage employees to go above their designated roles to make a positive impact."
          />
         
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike "
            result="oman"
            des="Responded to over 85 customer calls daily and solved 90% of their concerns. Served customers in a positive way, receiving two customer service awards in the past year."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College "
            result="CANADA"
            des="This fosters a culture of collaboration, innovation, and employee satisfaction within the company."
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
