import React from "react";
// import Image from "../../assests/logo2.png"

const Home = () => {
  return (
    <div className="min-h-screen flex bg-zinc-900">
      <div className="w-full max-w-4xl mx-auto px-8 md:px-8 ml-14 flex items-center">
        <div className="flex flex-col items-start gap-8 w-full relative">
          <h1 className="md:text-6xl sm:text-7xl text-4xl font-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AF7AF2] via-[#A5F7A8] to-[#AF7AF2]">
            Developers Club
          </h1>
          <div className="text-left md:text-xl sm:text-xl text-lg relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900 transform -skew-y-12"></div>
            <div className="relative p-4 rounded-md w-4/5 md:w-3/5 bg-gray-900 bg-opacity-80 animate-pulse-shadow">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3C4FB] via-[#D69BF3] to-[#F3C4FB]">
                Join our College Developers Club for an inclusive community where students collaborate and learn diverse technologies. Engage in workshops, hackathons, and social meetups to enhance your skills and connect with like-minded individuals. Let's create, innovate, and succeed together. Our club hosts a wide range of activities and events aimed at enhancing your learning experience. We organize regular workshops and coding sessions led by industry professionals and experienced mentors. These sessions cover various programming languages, frameworks, and tools, enabling you to gain hands-on experience and build practical skills.&nbsp;<br/>
              </p>
            </div>
          </div>
          {/* <div className="hidden md:block w-1/2">
            <img src={Image} alt="Animation" className="h-auto max-h-full" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
