import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa"

import { Tooltip } from "@material-tailwind/react";

import { MdApi } from "react-icons/md"



export default function About() {

    const icons = [
        { icon: FaHtml5, color: "text-[red]", content: "HTML" },
        { icon: FaCss3Alt, color: "text-[blue]", content: "CSS" },
        { icon: FaJs, color: "text-[yellow]", content: "JAVASCRIPT" },
        { icon: FaReact, color: "text-[blue]", content: "React" },
        { icon: FaGitAlt, color: "text-[red]", content: "Git" },
    ]

    const tools = [
        { name: 'vscode', icon: './assets/vscode.png', },
        { name: 'firebase', icon: './assets/firebase.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },
        { name: 'figma', icon: './assets/figma.png', },
        { name: 'git', icon: './assets/git.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML , JavaScript',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    {/* <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div> */}
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I’m a passionate fresher web developer with hands-on experience in HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy building clean, responsive, and user-friendly interfaces, and I love turning ideas into real, working web applications.

                        As a beginner in the industry, I focus on writing simple,maintainable code and continuously improving my skills by building projects and learning modern frontend practices. I’m comfortable working with components, state, APIs, and responsive layouts, and I’m eager to grow in a real-world development environment.

                        I’m motivated, quick to learn, and excited to contribute to a team where I can gain experience, solve problems, and evolve into a professional full-stack developer.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Skills</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {icons.map((item, index) => {

                            const Icon = item.icon

                            return (
                                <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">

                                    <Tooltip className="text-[green]" content={item.content} placement="top">
                                        <span className="flex items-cente justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 transition-all">
                                            <Icon size={50} className={`${item.color}`} />
                                        </span>
                                    </Tooltip>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}