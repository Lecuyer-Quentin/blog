import Link from 'next/link'
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'


export default function SocialLink() {
  return (
    <footer className="flex justify-center items-center h-16 bg-black text-white sticky bottom-0">
          
        <div className="flex justify-between items-center w-1/2">
            <Link 
                href="https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w" 
                target='_blank'
                className="mr-6 text-grey-800 hover:text-red-600">
                    <FaYoutube size={25} />
            </Link>
            <Link 
                href="https://twitter.com/DevNurAmin" 
                target='_blank'
                className="mr-6 text-grey-800 hover:text-red-600">
                    <FaTwitter size={25} />
            </Link>
            <Link 
                href="https://www.instagram.com/devnuramin/" 
                target='_blank'
                className="mr-6 text-grey-800 hover:text-red-600">
                    <FaInstagram size={25} />
            </Link>
            <Link 
                href="https://www.linkedin.com/in/devnuramin/" 
                target='_blank'
                className="mr-6 text-grey-800 hover:text-red-600">
                    <FaLinkedin size={25} />
            </Link>
          </div>
    </footer>


  )
}
