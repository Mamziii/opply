// icons
import { VscStarEmpty } from "react-icons/vsc";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { CiWifiOn } from "react-icons/ci";

export default function FeaturedVipJobs() {
  return (
    <>
      <section className="bg-white dark:bg-background-dark py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="flex items-center gap-2 text-lg md:text-2xl font-bold text-text-main dark:text-text-main-dark">
              <span className="text-amber-500">
                <VscStarEmpty />
              </span>
              فرصت های شغلی ویژه
            </h2>

            <a
              href="#"
              className="text-primary text-sm font-bold flex gap-1 items-center hover:gap-2 transition-all"
            >
              مشاهده ی همه
              <span>
                <HiMiniArrowLongLeft />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* vip card 1 */}
            <div className="relative border dark:border-border-dark  bg-white dark:bg-card-dark rounded-lg p-6 border-amber-200 shadow-sm overflow-hidden group">
              <div className="absolute top-0 right-0 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                ویژه
              </div>
              <div className="flex items-start justify-between mb-4 mt-4">
                <div className="size-10 rounded-lg bg-gray-50 dark:bg-background-dark p-2 border border-gray-100 dark:border-border-dark flex justify-center items-center">
                  <RiGraduationCapFill />
                </div>

                <span className="bg-blue-50 dark:bg-primary/10 text-primary font-medium text-xs py-1 px-2 rounded">
                  تمام وقت
                </span>
              </div>

              <h3 className="font-bold text-lg text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors mb-2">
                برنامه نویس ارشد فرانت اند
              </h3>
              <p className="text-sm text-gray-500 dark:text-text-secondary mb-4">شرکت فناوری دادپرداز</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-text-secondary bg-gray-50 dark:bg-background-dark px-2 py-1 rounded">
                  <span>
                    <CiLocationOn />
                  </span>
                  <span>تهران</span>
                </span>

                <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-text-secondary bg-gray-50 dark:bg-background-dark px-2 py-1 rounded">
                  <span>
                    <GiMoneyStack />
                  </span>
                  <span>35 - 50 میلیون</span>
                </span>

                <span className="flex items-center gap-2 text-sm text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded">
                  <span>
                    <CiWifiOn />
                  </span>
                  <span>ترکیبی / هیبرید</span>
                </span>
              </div>

              <button className="w-full rounded-lg text-primary border border-primary font-bold py-2.5 hover:bg-primary hover:text-white transition-all text-sm cursor-pointer">
                مشاهده و ارسال رزومه
              </button>
            </div>

            {/* vip card 2 */}
            <div className="relative border dark:border-border-dark bg-white dark:bg-card-dark rounded-lg p-6 border-amber-200 shadow-sm overflow-hidden group">
              <div className="flex items-start justify-between mb-4 mt-4">
                <div className="size-10 rounded-lg bg-gray-50 dark:bg-background-dark p-2 border border-gray-100 dark:border-border-dark flex justify-center items-center">
                  <RiGraduationCapFill />
                </div>

                <span className="bg-blue-50 dark:bg-primary/10 text-primary font-medium text-xs py-1 px-2 rounded">
                  تمام وقت
                </span>
              </div>

              <h3 className="font-bold text-lg text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors mb-2">
                برنامه نویس ارشد فرانت اند
              </h3>
              <p className="text-sm text-gray-500 dark:text-text-secondary mb-4">شرکت فناوری دادپرداز</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-text-secondary bg-gray-50 dark:bg-background-dark px-2 py-1 rounded">
                  <span>
                    <CiLocationOn />
                  </span>
                  <span>تهران</span>
                </span>

                <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-text-secondary bg-gray-50 dark:bg-background-dark px-2 py-1 rounded">
                  <span>
                    <GiMoneyStack />
                  </span>
                  <span>35 - 50 میلیون</span>
                </span>

                <span className="flex items-center gap-2 text-sm text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded">
                  <span>
                    <CiWifiOn />
                  </span>
                  <span>ترکیبی / هیبرید</span>
                </span>
              </div>

              <button className="w-full rounded-lg text-primary border border-primary font-bold py-2.5 hover:bg-primary hover:text-white transition-all text-sm cursor-pointer">
                مشاهده و ارسال رزومه
              </button>
            </div>

            {/* vip card 3 */}
            <div className="relative border dark:border-border-dark bg-white dark:bg-card-dark rounded-lg p-6 border-amber-200 shadow-sm overflow-hidden group">
              <div className="flex items-start justify-between mb-4 mt-4">
                <div className="size-10 rounded-lg bg-gray-50 dark:bg-background-dark p-2 border border-gray-100 dark:border-border-dark flex justify-center items-center">
                  <RiGraduationCapFill />
                </div>

                <span className="bg-blue-50 dark:bg-primary/10 text-primary font-medium text-xs py-1 px-2 rounded">
                  تمام وقت
                </span>
              </div>

              <h3 className="font-bold text-lg text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors mb-2">
                برنامه نویس ارشد فرانت اند
              </h3>
              <p className="text-sm text-gray-500 dark:text-text-secondary mb-4">شرکت فناوری دادپرداز</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-text-secondary bg-gray-50 dark:bg-background-dark px-2 py-1 rounded">
                  <span>
                    <CiLocationOn />
                  </span>
                  <span>تهران</span>
                </span>

                <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-text-secondary bg-gray-50 dark:bg-background-dark px-2 py-1 rounded">
                  <span>
                    <GiMoneyStack />
                  </span>
                  <span>35 - 50 میلیون</span>
                </span>

                <span className="flex items-center gap-2 text-sm text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded">
                  <span>
                    <CiWifiOn />
                  </span>
                  <span>ترکیبی / هیبرید</span>
                </span>
              </div>

              <button className="w-full rounded-lg text-primary border border-primary font-bold py-2.5 hover:bg-primary hover:text-white transition-all text-sm cursor-pointer">
                مشاهده و ارسال رزومه
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}