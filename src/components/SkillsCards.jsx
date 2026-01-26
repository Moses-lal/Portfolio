import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiCloudinary,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", level: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", level: 90 },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400", level: 80 },
  { name: "React", icon: FaReact, color: "text-cyan-400", level: 75 },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400", level: 85 },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: 70 },
  { name: "Express", icon: SiExpress, color: "text-gray-300", level: 70 },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400", level: 65 },
  { name: "Git", icon: FaGitAlt, color: "text-red-500", level: 80 },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-400", level: 70 },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-400", level: 75 },
];

export default function SkillsCards() {
  return (
    <div
      className="min-h-screen bg-black
bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,128,128,0.22)_70%,rgba(0,0,0,1)_100%)]"
    >
      <div className="max-w-6xl mx-auto px-4 pt-21 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -4, 4, 0],
              }}
              className="group relative rounded-2xl p-[1px]
              bg-gradient-to-br from-[#008080]/40 via-transparent to-transparent"
            >
              {/* Card body */}
              <div className="relative rounded-2xl bg-[#0b0f14]/90 backdrop-blur-xl p-6 overflow-hidden">
                
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                  bg-[radial-gradient(circle_at_top,rgba(0,128,128,0.25),transparent_60%)]"
                />

                {/* Icon aur hover ring */}
                <div className="relative z-10 mb-6">
                  <div className="relative w-fit">
                    <div
                      className="absolute inset-0 rounded-full border border-[#008080]/50
                      scale-75 opacity-0 group-hover:scale-125 group-hover:opacity-100
                      transition-all duration-500"
                    />
                    <div
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10
                      flex items-center justify-center"
                    >
                      <Icon className={`text-xl ${skill.color}`} />
                    </div>
                  </div>
                </div>

                {/* Skill */}
                <h3 className="relative z-10 text-sm font-semibold tracking-wide text-gray-200 mb-4">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="relative z-10">
                  <div className="flex justify-between text-xs mb-2 text-gray-400">
                    <span>Expertise</span>
                    <span className="text-[#008080] font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#008080] to-teal-300"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, delay: index * 0.05 }}
                    />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[1px]
                  bg-gradient-to-r from-transparent via-[#008080]/60 to-transparent
                  opacity-0 group-hover:opacity-100 transition duration-500"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
