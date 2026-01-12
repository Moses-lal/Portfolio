import { Typewriter } from "react-simple-typewriter";

export default function BouncingAvatar() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-black to-[#008080]/90">
      <style jsx>{`
        @keyframes bounce-smooth {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes shadow-sync {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(1);
            filter: blur(10px);
          }
          50% {
            opacity: 0.15;
            transform: scale(0.7);
            filter: blur(18px);
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .bounce-avatar {
          animation: bounce-smooth 3s ease-in-out infinite;
        }
        .shadow-pulse {
          animation: shadow-sync 3s ease-in-out infinite;
          transform-origin: center;
        }
        .glow-effect {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative inset-0 mb-40">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[250px] h-[250px] bg-[#008080]/25 rounded-full blur-[90px] glow-effect"></div>
        </div>

        <div className="relative bounce-avatar">
          <img
            src="./photo4.jpg"
            alt="Avatar"
            className="w-48 h-48 rounded-full border-3 border-[#008080] object-cover"
          />
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-44 h-6 bg-black/40 rounded-full shadow-pulse"></div>

        <div className="mt-30">
          <p className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white font-bold text-lg whitespace-nowrap text-center">
            <span className="font-medium">Hi there!</span>
            <br />
            <span className="text-xl font-bold">
              <span className="text-[#008080]">
                <Typewriter
                  words={[
                    "I'm MERN Developer",
                    "with clean and fast code",
                    "unique ideas with creative design",
                    "Practical problem solver",
                    "lets build something together!",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
            <br />
            <hr className="w-6 mx-auto border-2 border-[#008080] mb-2" />
            I Make The <span className="text-[#008080]">Complex</span> Simple
            <br />
            <button className="border p-3 bg-[#008080] border-[#008080] text-white font-medium mt-6">
              Contact Me
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
