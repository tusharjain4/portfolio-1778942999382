'use client';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4"><div className="max-w-5xl mx-auto"><h2 className="text-3xl font-bold text-white mb-8">Projects</h2><div className="grid md:grid-cols-2 gap-6">
            <div key="AccessAI - CodeQuest (MERN)" className="bg-gray-800 rounded-lg p-6"><h3 className="text-xl font-semibold text-white">AccessAI - CodeQuest (MERN)</h3><p className="text-gray-400 mt-2">Developed an innovative, AI-powered gamified platform designed to enhance programming language acquisition. This comprehensive solution offered educational content, interactive coding challenges, and real-time AI assistance via Gemini's API, supporting languages like Solidity, JavaScript, CSS, and React.</p></div>
            <div key="Chess.com Backend Clone (MERN)" className="bg-gray-800 rounded-lg p-6"><h3 className="text-xl font-semibold text-white">Chess.com Backend Clone (MERN)</h3><p className="text-gray-400 mt-2">Engineered a robust, full-fledged backend clone of Chess.com using the MERN stack to replicate real-time chess gameplay. Implemented Socket.IO WebSockets for seamless synchronization of moves, clocks, and game states (resign/draw). Designed secure RESTful Express APIs for managing users, games, moves, and sessions, incorporating JWT (access+refresh), RBAC, rate limiting, and CORS.</p></div>
          </div></div></section>
  );
}
