"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";
import CVHeader from "@/components/CVHeader";
import CVSection from "@/components/CVSection";
import EducationItem from "@/components/EducationItem";
import ExperienceItem from "@/components/ExperienceItem";
import SkillBadge from "@/components/SkillBadge";

import profilePicture from "@/public/profile.png";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <CVHeader
          name="Duuk van den Bosch"
          title="HBO-ICT Student | Software Developer"
          age={19}
          imageUrl={profilePicture}
        />

        {/* Contact */}
        <div className="px-12 py-6 bg-gray-50 border-b border-gray-200">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-4 h-4" />
              <span>duukvandenbosch@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>+31 6 22291749</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4" />
              <span>Velsen Noord, Netherlands</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://www.linkedin.com/in/duukvandenbosch"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                linkedin.com/in/duukvandenbosch
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Github className="w-4 h-4" />
              <a
                href="https://github.com/duukvandenbosch"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                github.com/duukvandenbosch
              </a>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-12 py-8 space-y-8">
          <CVSection title="Profile">
            <p className="text-gray-700 leading-relaxed">
              Ambitious and driven second-year HBO-ICT student at the Hogeschool van Amsterdam with a strong foundation in software development. Currently gaining practical experience as a delivery driver at IKEA while pursuing my degree. Passionate about technology, problem-solving, and continuous learning.
            </p>
          </CVSection>

          <CVSection title="Education">
            <EducationItem
              degree="HBO-ICT"
              institution="Hogeschool van Amsterdam (HvA)"
              location="Amsterdam"
              period="2024 - Present"
              description="Currently in second year, focusing on software development with bootspring java and vue.js."
              current
            />
            <EducationItem
              degree="Software Developer MBO 4"
              institution="Nova College"
              location="Haarlem"
              period="2022 - 2024"
              description="Completed accelerated program due to strong academic performance."
            />
            <EducationItem
              degree="MAVO"
              institution="Vellesan"
              location="IJmuiden"
              period="2018 - 2022"
              description="Secondary education with focus on preparing for technical vocational training."
            />
          </CVSection>

          <CVSection title="Work Experience">
            <ExperienceItem
              position="Home Delivery Driver"
              company="IKEA Haarlem"
              period="April 2024 - Present"
              responsibilities={[
                "Delivery van routes throughout North Holland",
                "Customer assistance and furniture moving",
              ]}
              current
            />
            <ExperienceItem
              position="Internship Software Developer"
              company="Novagraaf Amsterdam"
              period="Nov 2023 - Mar 2024"
              responsibilities={[
                "Development using PHP, HTML, CSS, SQL, JavaScript",
                "Collaborated with team on company projects",
              ]}
            />
            <ExperienceItem
              position="Employee"
              company="VRCafe Haarlem"
              period="Mar 2023 - Sep 2023"
              responsibilities={[
                "Customer service and VR experience guidance",
                "Maintaining café facilities",
              ]}
            />
            <ExperienceItem
              position="Crew Member"
              company="McDonald's Beverwijk"
              period="Jun 2021 - Dec 2023"
              responsibilities={[
                "Kitchen operations and drive-thru service",
                "Inventory management and food preparation",
              ]}
            />
          </CVSection>

          <CVSection title="Skills">
            <h4 className="text-gray-700 mb-3">Technical Skills</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Java", "PHP", "Typescript", "JavaScript", "HTML/CSS", "Git", "SQL", "Object-Oriented Programming"].map(
                (s) => (
                  <SkillBadge key={s} skill={s} />
                )
              )}
            </div>
            <h4 className="text-gray-700 mb-3">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Time Management",
                "Customer Service",
                "Self-motivated",
                "Quick Learner",
              ].map((s) => (
                <SkillBadge key={s} skill={s} />
              ))}
            </div>
          </CVSection>

          <CVSection title="Languages">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-900">Dutch</span>
                <span className="text-gray-600">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">English</span>
                <span className="text-gray-600">Fluent</span>
              </div>
            </div>
          </CVSection>
        </div>

        {/* Footer */}
        <div className="px-12 py-6 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-500 text-center text-sm">
            References available upon request
          </p>
        </div>
      </div>
    </div>
  );
}
