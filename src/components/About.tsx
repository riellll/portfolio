import Image from "next/image";
import aboutMeGif from "../../public/about-me.gif";
import Link from "next/link";
import { BsFillFileEarmarkFontFill ,BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 h-full md:gap-10 pt-10 md:px-7 md:mb-20 max-w-5xl mx-auto min-[320px]:pb-48 sm:text-start sm:mb-20">
      <Image
        src={aboutMeGif}
        alt="project"
        width={500}
        height={500}
        className="w-full h-auto"
      />
      <div className="md:mt-14">
        <p className="text-2xl font-bold text-gray-900 dark:text-white pb-3">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-800 via-gray-900 to-gray-950 dark:to-emerald-600 dark:via-cyan-500 dark:from-cyan-400">
            About Me
          </span>
        </p>
        <p className="text-1xl font-medium text-gray-900 dark:text-gray-300 pb-3">
        Hello! I&#39;m Gabriel Noe Napiere, and I&#39;m passionate about programming and technology. I recently completed a coding bootcamp, where I gained solid skills in various programming languages and frameworks.
        </p>
        <p className="text-1xl font-medium text-gray-900 dark:text-gray-300 pb-3">
        I love turning ideas into real, user-friendly applications and staying updated with industry trends. I&#39;m excited to work in a diverse team to create innovative software solutions. Apart from coding, I also appreciate art and music for their creativity and problem-solving benefits.
        </p>
        <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          Thank you for taking the time to get to know me better. I invite you
          to explore my portfolio, where you can find examples of my work and
          projects. If you have any questions or would like to collaborate,
          please feel free to reach out. I look forward to connecting with you!
        </p>
        <div className="flex justify-center gap-4 pt-3 sm:pt-10 flex-wrap">
        <Link
              href={"https://drive.google.com/file/d/1ZfstMQchKYjGlDkFyk6Gr0WUvF1XUWkT/view?usp=sharing"}
              target="_blank"
              className="transition ease-in-out delay-100 duration-1000 flex gap-2 mt-4 font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-linear-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-linear-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950 dark:shadow-gray-950/80"
            >
              <span className='pt-1'>
              <BsFillFileEarmarkFontFill />
              </span>
              My Resume
            </Link>
        <Link
              href={"https://github.com/riellll"}
              target="_blank"
              className="transition ease-in-out delay-100 duration-1000 flex gap-2 mt-4 font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-linear-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-linear-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950 dark:shadow-gray-950/80"
            >
              <span className='pt-1'>
              <BsGithub />
              </span>
              My Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/gabriel-noe-napiere-88009525a/"}
              target="_blank"
              className="transition ease-in-out delay-100 duration-1000 flex gap-2 mt-4 font-semibold rounded-lg py-2 px-3 text-white bg-slate-900 shadow-lg shadow-slate-900/50 hover:shadow-xl hover:shadow-slate-900/40 dark:text-black hover:text-black hover:bg-white dark:shadow-lg dark:bg-linear-to-r dark:from-cyan-500 dark:via-cyan-400 dark:to-emerald-600 dark:hover:bg-linear-to-br dark:hover:bg-gray-300 dark:hover:shadow-xl dark:hover:shadow-gray-950 dark:shadow-gray-950/80"
            >
              <span className='pt-1'>
              <BsLinkedin />
              </span>
              My LinkedIn
            </Link>
          </div>
{/*         <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          With a keen interest in coding and its limitless possibilities, I
          embarked on a journey to learn programming. I recently completed a
          rigorous bootcamp, where I honed my skills and acquired a solid
          foundation in various programming languages and frameworks.
        </p>
        <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          One aspect I particularly enjoy about programming is the ability to
          transform ideas into tangible solutions. It&#39;s incredibly
          satisfying to witness lines of code come together and create
          functional, user-friendly applications. I am continually expanding my
          knowledge and keeping up with the latest industry trends to stay at
          the forefront of technological advancements. As I progress on my
          programming journey, I am excited about the prospect of working with a
          diverse team of professionals in a dynamic and challenging
          environment. I am eager to contribute my skills and dedication to
          building innovative software solutions that have a positive impact on
          people&#39;s lives.
        </p>
        <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          Aside from programming, I have a deep appreciation for art and music.
          I believe that exposure to various forms of creativity nurtures a
          well-rounded perspective and enhances problem-solving abilities.
        </p>
        <p className="text-1xl font-medium text-gray-900 dark:text-gray-300">
          Thank you for taking the time to get to know me better. I invite you
          to explore my portfolio, where you can find examples of my work and
          projects. If you have any questions or would like to collaborate,
          please feel free to reach out. I look forward to connecting with you!
        </p> */}
      </div>
    </div>
  );
};

export default About;
