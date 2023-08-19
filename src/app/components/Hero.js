import { BsGithub, BsLinkedin } from 'react-icons/bs'
import TechStack from './TechStack'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className="grid bg-white h-screen gap-4 content-center justify-items-center text-center md:px-32">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hi, I&#39;m Gabriel Noe Napiere</h1>
    <p className="text-1xl font-medium text-gray-900 dark:text-white">I&#39;m A Full Stack Web Developer. I bring ideas to life through elegant code and intuitive designs. My goal is to deliver seamless, responsive, and scalable web applications that not only meet the clients needs but also exceed their expectations.</p>
    <div className='grid grid-cols-2 gap-4 text-3xl'>
      <Link href={'https://github.com/riellll'} target="_blank">
    <BsGithub/>
      </Link>
      <Link href={'https://www.linkedin.com/in/gabriel-noe-napiere-88009525a/'} target="_blank">
    <BsLinkedin/>
      </Link>
    </div>
    <div className='pt-16'>
      <TechStack/>
    </div>
  </div>
  )
}

export default Hero