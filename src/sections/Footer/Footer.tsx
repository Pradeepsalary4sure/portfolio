import Container from "../../components/Common/Container";

import {
  FaGithub,
  FaLinkedin,
  FaHeart
} from "react-icons/fa";


const Footer = () => {

  return (

    <footer className="border-t border-cyan-500/20 py-10">

      <Container>

        <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-5
        ">


          <p className="text-gray-400 flex items-center gap-2">

            © {new Date().getFullYear()} Pradeep.
            Made with
            <FaHeart className="text-cyan-400"/>

          </p>



          <div className="flex gap-6 text-2xl">

            <a
            href="#"
            className="hover:text-cyan-400 transition"
            >
              <FaGithub/>
            </a>


            <a
            href="#"
            className="hover:text-cyan-400 transition"
            >
              <FaLinkedin/>
            </a>


          </div>


        </div>


      </Container>


    </footer>

  );

};


export default Footer;