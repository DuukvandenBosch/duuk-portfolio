"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-surface-900 to-surface-800 text-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.img
          src="/profile.jpg"
          alt="Duuk van den Bosch"
          className="w-28 h-28 rounded-full object-cover border-3 border-primary/60 shadow-lg mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary/80 to-sky-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Duuk van den Bosch
        </motion.h1>

        <motion.p
          className="text-base text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          HBO-ICT Student • Software Developer • 19 Years Old
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <ContactItem icon={<Mail className="w-4 h-4" />} text="duukvandenbosch@gmail.com" />
          <ContactItem icon={<Phone className="w-4 h-4" />} text="+31 6 22291749" />
          <ContactItem icon={<MapPin className="w-4 h-4" />} text="Velsen Noord, NL" />
          <ContactLink icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/duukvandenbosch" text="LinkedIn" />
          <ContactLink icon={<Github className="w-4 h-4" />} href="https://github.com/duukvandenbosch" text="GitHub" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 text-gray-500 text-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          ↓ Scroll to explore
        </motion.div>
      </section>

      {/* About Section */}
      <Section title="About Me">
        <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
          I’m an ambitious and driven HBO-ICT student at the Hogeschool van Amsterdam with a passion
          for technology, problem-solving, and continuous learning. Alongside my studies, I work as a
          delivery driver at IKEA, gaining real-world experience while developing my software skills.
        </p>
      </Section>

      {/* Experience Section */}
      <Section title="Work Experience" bg="bg-gradient-to-b from-surface-800 to-surface-900">
        <ExperienceCard
          title="Home Delivery Driver"
          company="IKEA Haarlem"
          period="April 2024 – Present"
          points={[
            "Delivery van routes throughout North Holland",
            "Customer assistance and furniture moving",
          ]}
        />
        <ExperienceCard
          title="Internship Software Developer"
          company="Novagraaf Amsterdam"
          period="Nov 2023 – Mar 2024"
          points={[
            "Development using PHP, HTML, CSS, SQL and JavaScript",
            "Collaborated with team on company projects",
          ]}
        />
        <ExperienceCard
          title="Employee"
          company="VRCafe Haarlem"
          period="Mar 2023 – Sep 2023"
          points={[
            "Customer service and VR experience guidance",
            "Maintaining café facilities",
          ]}
        />
        <ExperienceCard
          title="Crew Member"
          company="McDonald's Beverwijk"
          period="Jun 2021 – Dec 2023"
          points={[
            "Kitchen operations and drive-thru service",
            "Inventory management and food preparation",
          ]}
        />
      </Section>

      {/* Education Section */}
      <Section title="Education">
        <TimelineItem
          degree="HBO-ICT"
          school="Hogeschool van Amsterdam"
          period="2024 - Present"
          description="Specializing in software development with Bootspring Java and Vue.js."
        />
        <TimelineItem
          degree="Software Developer MBO 4"
          school="Nova College, Haarlem"
          period="2022 - 2024"
          description="Completed accelerated program with strong focus on programming and app design."
        />
        <TimelineItem
          degree="MAVO"
          school="Vellesan, IJmuiden"
          period="2018 - 2022"
          description="Secondary education with technical focus."
        />
      </Section>

      {/* Skills Section */}
      <Section title="Skills" bg="bg-surface-900">
        <SkillCategory
          title="Technical Skills"
          skills={["Java", "PHP", "TypeScript", "JavaScript", "HTML/CSS", "Git", "SQL", "OOP"]}
        />
        <SkillCategory
          title="Soft Skills"
          skills={[
            "Problem Solving",
            "Team Collaboration",
            "Time Management",
            "Customer Service",
            "Self-motivated",
            "Quick Learner",
          ]}
        />
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Duuk van den Bosch — References available upon request
      </footer>
    </main>
  );
}

// ------------------ Components ------------------

function Section({
  title,
  children,
  bg,
}: {
  title: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section className={`${bg || "bg-surface-800/60"} py-20 px-6`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-sky-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <div className="max-w-5xl mx-auto space-y-8">{children}</div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm bg-surface-700/70 px-3 py-1 rounded-full border border-surface-600 hover:bg-primary/20 transition">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function ContactLink({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm bg-surface-700/70 px-3 py-1 rounded-full border border-surface-600 hover:bg-primary/20 transition"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  points,
}: {
  title: string;
  company: string;
  period: string;
  points: string[];
}) {
  return (
    <motion.div
      className="bg-surface-800/70 border border-surface-600 shadow-lg rounded-2xl p-6 hover:shadow-primary/30 transition"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-gray-400 mb-3">{company} • {period}</p>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function TimelineItem({
  degree,
  school,
  period,
  description,
}: {
  degree: string;
  school: string;
  period: string;
  description: string;
}) {
  return (
    <motion.div
      className="border-l-4 border-primary pl-4"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
    >
      <h4 className="text-lg font-semibold text-primary">{degree}</h4>
      <p className="text-gray-400">{school} • {period}</p>
      <p className="text-gray-300 mt-1">{description}</p>
    </motion.div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="text-center">
      <h4 className="text-xl font-semibold mb-6 text-primary">{title}</h4>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <motion.span
            key={s}
            className="px-5 py-2 bg-surface-700/70 rounded-full text-sm text-gray-200 border border-surface-600 hover:border-primary hover:text-primary transition"
            whileHover={{ scale: 1.1 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
