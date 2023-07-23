import React from "react";
import Image1 from "../../assests/logo1.jpg";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex bg-zinc-900">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 ml-14 flex items-center justify-between">
        <div className="flex flex-col items-start gap-8">
          <h1 className="md:text-5xl sm:text-6xl text-4xl font-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AF7AF2] via-[#A5F7A8] to-[#AF7AF2]">
            Developers Club
          </h1>
          <div className="text-left md:text-lg sm:text-lg text-base text-white">
            <p className="pl-6 md:pl-0">
              Join our College Developers Club for an inclusive community where students collaborate and learn diverse technologies. Engage in workshops, hackathons, and social meetups to enhance your skills and connect with like-minded individuals. Let's create, innovate, and succeed together. Our club hosts a wide range of activities and events aimed at enhancing your learning experience. We organize regular workshops and coding sessions led by industry professionals and experienced mentors. These sessions cover various programming languages, frameworks, and tools, enabling you to gain hands-on experience and build practical skills.&nbsp;<br/>
            </p>
            <div className="mt-8">
              <button className="button-sparkling h-12 w-48"onClick={handleGetStartedClick}>Get Started</button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end fixed right-10 top-8 bottom-0">
          <img
            src={Image1}
            alt="img"
            className="w-72 h-62"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
