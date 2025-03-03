import Skills from './Skills';
import Projects from './Projects';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 flex flex-col items-center">
      {/* Main Content */}
      <main className="max-w-3xl w-full text-center">
        <div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Highly skilled Software Engineer with a proven track record in
            enterprise-level software solutions, full-stack development, cloud
            solutions, and system architecture.
          </p>
          {/* Contact Information */}
          <section className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              📍 <strong>West Palm Beach, FL</strong>
            </p>
            <p>
              📧{' '}
              <a
                href="mailto:caneslarry@gmail.com"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                caneslarry@gmail.com
              </a>
            </p>
            <p>
              🔗{' '}
              <a
                href="https://www.linkedin.com/in/larryhussey/"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <p>
              🖥{' '}
              <a
                href="https://github.com/caneslarry"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </p>
          </section>
          <Projects />
          <Skills />
        </div>
        <h2 className="text-4xl font-bold text-center mb-6">My Resume</h2>

        {/* Work Experience Section */}
        <section className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
            Work Experience
          </h2>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Senior Software Engineer / Team Lead
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Agora Data, LLC • June 2024 - Present
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Leading AI-driven dashboard development with React, Next.js, and
              GraphQL. Implementing CI/CD pipelines in CircleCI and optimizing
              full-stack applications.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Senior Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              WDG - The Web Development Group • April 2023 - April 2024
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Led large-scale PHP, JavaScript, and Python projects, integrated
              WordPress with Salesforce, and managed CI/CD pipelines.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Senior Software Engineer / Team Lead
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Model B • March 2021 - March 2023
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Developed AI-driven marketing automation tools, integrating Google
              Analytics, ActiveCampaign, AWS, and Google Cloud.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Senior Software Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              ApparelMagic.com • November 2018 - March 2021
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Created API integrations with Amazon S3, Google Calendar, ZenDesk,
              and Slack. Led Agile development as a Scrum Master.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
            Education
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            <strong>Bachelors in Computer Science</strong> <br />
            Florida Atlantic University (1998 - 2002)
          </p>
        </section>

        {/* Certifications Section */}
        <section className="mt-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2 border-gray-300 dark:border-gray-700">
            Certifications
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            <strong>Certified ScrumMaster (CSM)</strong> (2018 - Present)
          </p>
        </section>
      </main>
    </div>
  );
}
