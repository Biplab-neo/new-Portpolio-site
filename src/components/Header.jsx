import { Typewriter } from "react-simple-typewriter"


export default function Header() {
    return (
        <div className="w-11/12 pt-24 md:pt-32 text-center mx-auto flex flex-col items-center justify-center gap-4">
            <img src="./assets/pengine.webp" alt="" className="rounded-full w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-cover object-top" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Biplab
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-2xl sm:text-6xl lg:text-[66px] font-Ovo">
                        I am a {""}
                        <Typewriter
                            words={["frontend developer","tech enthusiast","learner"]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
            </h1>
            <p className="max-w-2xl mx-auto font-Ovo">Frontend Developer (Fresher) focused on modern, responsive UI using HTML, React, JavaScript, and Tailwind CSS.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="./assets/current-cv_compressed.pdf" target="_blank"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}