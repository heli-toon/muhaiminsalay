import { useEffect } from "react";
import AOS from "aos";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "./skills/python.svg" },
        { name: "HTML 5", icon: "./skills/html.svg" },
        { name: "CSS 3", icon: "./skills/css.svg" },
        { name: "JavaScript", icon: "./skills/javascript.svg" },
        { name: "Typescript", icon: "./skills/typescript.svg" },
        { name: "C++", icon: "./skills/cpp.svg" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "./skills/reactjs.svg" },
        { name: "Bootstrap", icon: "./skills/bootstrap.svg" },
        { name: "TailwindCSS", icon: "./skills/tailwind.svg" },
        { name: "PostCSS", icon: "./skills/postcss.svg" },
      ],
    },
    {
      title: "Mobile & Desktop",
      skills: [
        { name: "Expo", icon: "./skills/expo.svg" },
        { name: "React Native", icon: "./skills/react-native.svg" },
        { name: "Tkinter", icon: "./skills/tkinter.png" },
        { name: "Flet", icon: "./skills/flet.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", icon: "./skills/django.svg" },
        { name: "Flask", icon: "./skills/flask.jpg" },
        { name: "Next.js", icon: "./skills/next.svg" },
      ],
    },
    {
      title: "Tooling",
      skills: [
        { name: "Git", icon: "./skills/git.svg" },
        { name: "npm", icon: "./skills/npm.svg" },
        { name: "PIP", icon: "./skills/pip.svg" },
        { name: "Vite", icon: "./skills/vite.svg" },
        { name: "Node.js", icon: "./skills/node.svg" },
        { name: "Prisma", icon: "./skills/prisma.svg" },
      ],
    },
    {
      title: "Hosting",
      skills: [
        { name: "Firebase", icon: "./skills/firebase.svg" },
        { name: "Netlify", icon: "./skills/netlify.svg" },
        { name: "Vercel", icon: "./skills/vercel.svg" },
        { name: "Supabase", icon: "./skills/supabase.svg" },
        { name: "Render", icon: "./skills/render.png" },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Arduino", icon: "./skills/arduino.svg" },
        { name: "NSIS", icon: "./skills/nsis.svg" },
        { name: "Inno Setup", icon: "./skills/innosetup.svg" },
        { name: "PostgreSQL", icon: "./skills/pgsql.svg" },
        { name: "SQLite", icon: "./skills/sqlite.svg" },
        { name: "MongoDB", icon: "./skills/mongo.svg" },
        { name: "VS Code", icon: "./skills/vscode.svg" },
        { name: "Light House", icon: "./skills/lighthouse.svg" },
        { name: "Shell", icon: "./skills/shell.svg" },
        { name: "GIMP", icon: "./skills/gimp.svg" },
        { name: "OpenShot", icon: "./skills/openshot.svg" },
        { name: "OBS Studio", icon: "./skills/obs-studio.jpg" },
        { name: "App Sheet", icon: "./skills/app-sheet.svg" },
        { name: "Github", icon: "./skills/github.svg" },
      ],
    },
  ];

  return (
    <>
      <section className="bg-black/40 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="container mx-auto">
          <div data-aos="fade-up" className="text-center mb-16">
            <header className="text-center mb-16">
              <div className="mb-6">
                <h1 className="text-5xl font-bold text-white mb-4">
                  Skills & Technologies
                </h1>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
                </div>
              </div>
              <p className="text-xl text-gray-400">
                  A comprehensive overview of my technical expertise
              </p>
            </header>
          </div>

          <div className="space-y-16">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                data-aos="fade-up"
                data-aos-delay={groupIndex * 100}
              >
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  {group.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      data-aos="zoom-in"
                      data-aos-delay={groupIndex * 100 + skillIndex * 50}
                      className="bg-gray-950/95 border-gray-900 border rounded-lg p-6 hover:bg-gray-900 transition-all duration-300 hover:scale-110 hover:border-orange-500 flex flex-col items-center justify-center text-center group"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 mb-3 group-hover:scale-125 transition-transform duration-300"
                      />
                      <p className="text-white font-semibold text-sm">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" className="mt-20 text-center">
            <div className="bg-gray-950/95 border-gray-900 border rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-400">
                I&apos;m constantly expanding my skillset and staying
                up-to-date with the latest technologies and industry best
                practices. The tech world moves fast, and so do I.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}