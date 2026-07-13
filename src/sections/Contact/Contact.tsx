import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import ContactForm from "../../components/forms/ContactForm";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >
      <Container>
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left Side */}

          <div>

            <h3 className="text-4xl font-bold">
              Let's Build Something Amazing 🚀
            </h3>

            <p className="text-gray-400 mt-6 leading-8 max-w-lg">
              I'm always open to discussing new opportunities,
              freelance projects, collaborations, or innovative ideas.
              Feel free to reach out anytime.
            </p>

            <div className="space-y-5 mt-10">

              {/* Email */}

              <a
                href="mailto:pradeepsisodia639855@gmail.com"
                className="
                  flex
                  items-center
                  gap-5
                  p-5
                  rounded-2xl
                  bg-white/5
                  border
                  border-cyan-500/20
                  backdrop-blur-lg
                  hover:bg-cyan-500/10
                  hover:border-cyan-400
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope className="text-cyan-400 text-3xl" />

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    pradeepsisodia639855@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/pradeep-525186251/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-5
                  p-5
                  rounded-2xl
                  bg-white/5
                  border
                  border-cyan-500/20
                  backdrop-blur-lg
                  hover:bg-cyan-500/10
                  hover:border-cyan-400
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin className="text-cyan-400 text-3xl" />

                <div>
                  <h4 className="font-semibold">
                    LinkedIn
                  </h4>

                  <p className="text-gray-400">
                    linkedin.com/in/pradeep-525186251
                  </p>
                </div>
              </a>

              {/* GitHub */}

              <a
                href="https://github.com/Pradeepsalary4sure"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-5
                  p-5
                  rounded-2xl
                  bg-white/5
                  border
                  border-cyan-500/20
                  backdrop-blur-lg
                  hover:bg-cyan-500/10
                  hover:border-cyan-400
                  transition-all
                  duration-300
                "
              >
                <FaGithub className="text-cyan-400 text-3xl" />

                <div>
                  <h4 className="font-semibold">
                    GitHub
                  </h4>

                  <p className="text-gray-400">
                    github.com/Pradeepsalary4sure
                  </p>
                </div>
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/916398551858"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-5
                  p-5
                  rounded-2xl
                  bg-white/5
                  border
                  border-cyan-500/20
                  backdrop-blur-lg
                  hover:bg-green-500/10
                  hover:border-green-400
                  transition-all
                  duration-300
                "
              >
                <FaWhatsapp className="text-green-400 text-3xl" />

                <div>
                  <h4 className="font-semibold">
                    WhatsApp
                  </h4>

                  <p className="text-gray-400">
                    +91 63985 51858
                  </p>
                </div>
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div
            className="
              bg-white/5
              border
              border-cyan-500/20
              backdrop-blur-xl
              rounded-3xl
              p-8
              shadow-2xl
            "
          >
            <ContactForm />
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Contact;