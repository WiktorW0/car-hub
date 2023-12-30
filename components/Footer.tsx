import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-center gap-6">
          <Image
            src='/logo.svg'
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 
            <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map(link=>{ 
            return (
              <div key={link.title} className="footer__link">
                <h3 className="font-bold">
                  {link.title}
                </h3>
                {link.links.map(item=>{
                  return (
                    <div key={item.title} className="flex">
                      <Link href={item.url} className="text-gray-500">
                        {item.title}
                      </Link>
                      {link.title==='Socials' && (
                        <Image
                          src={item.src}
                          alt="social-logo"
                          width={24}
                          height={24}
                          className="object-contain ml-4"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>
          @2023 Carhub. All Rights Reserved
        </p>
        <div className="footer__copyrights-link">
          <Link href='/' className="text-gray-500">
            Privacy policy
          </Link>
          <Link href='/' className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer