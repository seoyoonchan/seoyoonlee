import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12 font-sans">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Seoyoon Lee (이서윤)</h1>
        <p className="text-lg text-gray-700 mb-6">
          2L at Harvard Law School | Legal Intern at TMI Associates
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-800 leading-relaxed">
              Hello! I'm Seoyoon Lee (이서윤, ソユン), a second-year law student at Harvard Law School with a strong interest in international law, corporate governance, and regulatory compliance. Currently, I am gaining valuable experience as a legal intern at TMI Associates in Tokyo, focusing on cross-border M&A and competition law matters.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <ul className="list-disc list-inside text-gray-800">
              <li>Legal Intern, TMI Associates (Tokyo) – Jan. 2025 – Feb. 2025</li>
              <li>Research Assistant, PwC Consulting (Seoul) – Nov. 2023 – Jan. 2024</li>
              <li>Strategic Planning Intern, RUDDER – Jan. 2021 – Dec. 2021</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <div className="flex flex-col gap-2 text-gray-800">
              <a href="mailto:contact@seoyoonle.co" className="flex items-center gap-2 hover:underline">
                <Mail className="h-4 w-4" /> contact@seoyoonle.co
              </a>
              <a href="https://www.linkedin.com/in/seoyooninlaw" className="flex items-center gap-2 hover:underline">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="/SeoyoonLee_Resume.pdf" className="flex items-center gap-2 hover:underline">
                <FileText className="h-4 w-4" /> View Resume (PDF)
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-500">© 2025 Seoyoon Lee. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}