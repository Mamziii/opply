// icons
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { FaAppStoreIos } from "react-icons/fa";


export default function Footer() {
  return (
    <>
         <footer className="bg-background-light dark:bg-background-dark py-16 pt-16 border-t border-gray-200 dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* brand and descs*/}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <span>
                    <MdOutlineWorkOutline />
                  </span>
                </div>
                <span className="text-xl font-bold text-text-main dark:text-text-main-dark">opply</span>
              </div>

              <p className="text-gray-500 dark:text-text-secondary text-sm mb-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>

              <div className="flex items-center gap-3 text-gray-500 dark:text-text-secondary text-lg">
                <span className="hover:text-primary">
                  <FaTelegram />
                </span>
                <span className="hover:text-primary">
                  <FaSquareInstagram />
                </span>
                <span className="hover:text-primary">
                  <FaSquareTwitter />
                </span>
              </div>
            </div>

            {/* links col 1 */}
            <div>
              <h4 className="font-bold text-[#111418] dark:text-text-main-dark mb-6">کارجویان</h4>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-text-secondary">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    جستجو مشاغل
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    ساخت رزومه
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    شرکت های برتر
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    ماشین حساب حقوق
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    آزمون های شخصیت شناسی
                  </a>
                </li>
              </ul>
            </div>

            {/* links col 2 */}
            <div>
              <h4 className="font-bold text-[#111418] dark:text-text-main-dark mb-6">کارفرمایان</h4>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-text-secondary">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    درج آگهی استخدام
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    جستجو رزومه
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    تعرفه ها
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    نرم افزار جذب و استخدام
                  </a>
                </li>
              </ul>
            </div>

            {/* applications */}
            <div>
              <h4 className="font-bold text-[#111418] dark:text-text-main-dark mb-6">دانلود اپلیکیشن</h4>

              <div className="flex flex-col gap-y-5">
                <div className="bg-black flex gap-5 p-3 rounded-lg items-center">
                  <div className="text-white">
                    <span className="text-3xl">
                      <HiShoppingBag />
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white text-sm">get it from</span>
                    <span className="text-white font-bold">Cafe Bazaar</span>
                  </div>
                </div>

                <div className="bg-black flex gap-5 p-3 rounded-lg items-center">
                  <div className="text-white">
                    <span className="text-3xl">
                      <FaAppStoreIos />
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white text-sm">get it from</span>
                    <span className="text-white font-bold">App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-text-secondary">
            <div>
              <span>تمامی حقوق برای opply</span>
            </div>

            <div>
              <ul className="flex gap-3 items-center">
                <li>
                  <a href="#" className="hover:text-primary">قوانین و مقررات</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">حریم خصوصی</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">تماس با ما</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}