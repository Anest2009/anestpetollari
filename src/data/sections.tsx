import { motion } from 'framer-motion';
import { Project } from '../components/Project';
import shadowsImage from '../assets/images/shadows.png';
import nanoChatImage from '../assets/images/secret.png';
import artImage from'../assets/images/fotoja.png';

const projects = [
  {
    title: "ArtCoffe",
    description: "Order Tracking System with Admin Dashboard, Staff Dashboard and Client side",
    tech: [
      { name: "TypeScript", color: "blue", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "React", color: "cyan", className: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
      { name: "Context API", color: "yellow", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
      { name: " Supabase", color: "green", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { name: "Custom CSS", color: "blue", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { name: "Lucide React", color: "cyan", className: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
    ],
    link: "https://github.com/Anest2009/artcoffejunction",
    previewImage: artImage
  },
  {
    title: "Nano Chat <br/(WORKING ON IT)",
    description: "A private E2EE chat app that gives the user full privacy and security.",
    tech: [
      { name: "React", color: "cyan", className: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
      { name: "JavaScript", color: "yellow", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
      { name: "Node.js", color: "green", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { name: "Supabase", color: "emerald", className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
      { name: "Socket.IO", color: "orange", className: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
      { name: "Libsodium", color: "purple", className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
      { name: "Tailwind CSS", color: "blue", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    ],
    link: "",
    previewImage: nanoChatImage
  },
  {
    title: "Shadows",
    description: "The art of being free and the love for shadows never ends",
    tech: [
      { name: "React", color: "cyan", className: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
      { name: "TypeScript", color: "emerald", className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
      { name: "Vercel", color: "yellow", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
      { name: "FUN AND LOVE", color: "green", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
    ],
    link: "https://github.com/Anest2009/Shadows",
    previewImage: shadowsImage
  }
];

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "WebXPressAL",
              date: "2024 - Now",
              title: "Web Developer & Founder",
              description: ["creating amazing experiences"],
              dotColor: "bg-blue-500"
            },
            {
              company: "Don Bosco, Professional High School",
              date: "2024 - Now",
              title: "IT & CS",
              description: ["getting my degree to make my parents proud"],
              dotColor: "bg-amber-300"
            },
            {
              company: "PixUP",
              date: "2023 - 2023",
              title: "Full-Stack Web Developer",
              description: ["developing user-friendly and responsive websites to enhance the digital presence of different clients."],
              dotColor: "bg-green-500"
            },
            {
              company: "Arowwai Industries",
              date: "2022 - 2023",
              title: "Founder",
              description: ["built reselling community and developed tools"],
              dotColor: "bg-red-500"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    },
    {
      title: "Hobbies",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              title: "Cooking",
              description: "trying not to burn the kitchen down",
              stats: "13 fav recepies",
              color: "rose"
            },
            {
              title: "Filming",
              description: "love to film things from my life",
              stats: "223 videos",
              color: "blue"
            },
            {
              title: "Stocks and Crypto",
              description: "buying high and selling low is my top one",
              stats: "-$5,000 profit",
              color: "green"
            },
            {
              title: "Risking my life",
              description: "fun but will be the reason why im going to jail",
              stats: "4 crazy activities",
              color: "purple"
            },
          ].map((hobby) => (
            <motion.div
              key={hobby.title}
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className={`font-medium`}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {hobby.description}
                </p>
                <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                  {hobby.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ]
