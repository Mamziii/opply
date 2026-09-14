// icons
import { IoLogoBitbucket } from "react-icons/io";
import { IoLogoSkype } from "react-icons/io";
import { IoLogoFlickr } from "react-icons/io";
import { IoLogoChrome } from "react-icons/io5";
import { IoLogoMedium } from "react-icons/io5";
import { IoLogoVenmo } from "react-icons/io5";



export default function TopEmployers() {
  return (
    <>
       <section className="py-12 bg-white dark:bg-background-dark border-y border-gray-100 dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-bold text-center text-gray-500 dark:text-text-secondary text-xl ">
            شرکت های برتری که به ما اعتماد دارن
          </h2>

          <div className="flex items-center gap-12 px-4 justify-center flex-wrap opacity-70 dark:opacity-60 text-sm mt-4">
            <div className="flex items-center mt-4 gap-1 text-text-main dark:text-text-main-dark">
              <span>
                <IoLogoBitbucket />
              </span>
              <span>DigiKala</span>
            </div>

             <div className="flex items-center mt-4 gap-1 text-text-main dark:text-text-main-dark">
              <span>
                <IoLogoSkype />
              </span>
              <span>Snapp</span>
            </div>

             <div className="flex items-center mt-4 gap-1 text-text-main dark:text-text-main-dark">
              <span>
                <IoLogoFlickr />
              </span>
              <span>Filimo</span>
            </div>

             <div className="flex items-center mt-4 gap-1 text-text-main dark:text-text-main-dark">
              <span>
                <IoLogoChrome />
              </span>
              <span>CafeBazaar</span>
            </div>

             <div className="flex items-center mt-4 gap-1 text-text-main dark:text-text-main-dark">
              <span>
                <IoLogoMedium />
              </span>
              <span>AliBaba</span>
            </div>

             <div className="flex items-center mt-4 gap-1 text-text-main dark:text-text-main-dark">
              <span>
                <IoLogoVenmo />
              </span>
              <span>Divar</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}