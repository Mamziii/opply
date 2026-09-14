// icons
import { FaRegUserCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function RecentJobsList() {
  return (
    <>
      <section>
        <div className="bg-background-light dark:bg-background-dark py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-text-main dark:text-text-main-dark">
              جدیدترین آگهی ها
            </h2>

            <div className="flex flex-col gap-4">
              {/* item 1 */}
              <div className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-xl border border-gray-100 dark:border-border-dark shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="bg-gray-100 dark:bg-background-dark size-16 flex justify-center items-center rounded-lg text-xl shrink-0 border border-gray-200 dark:border-border-dark">
                  <FaRegUserCircle />
                </div>

                <div className="grow">
                  <h3 className="font-bold text-lg text-[#111418] dark:text-text-main-dark mb-1">
                    کارشناس محتوا
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm items-center text-gray-500 dark:text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span>
                        <GoHome />
                      </span>
                      <span>شرکت دیجی تک</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <span>
                        <CiLocationOn />
                      </span>
                      <span>تهران</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <span>
                        <CiClock2 />
                      </span>
                      <span>3 ساعت پیش</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                  <span className="text-gray-700 dark:text-text-main-dark font-medium">
                    12 - 15 میلیون
                  </span>

                  <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-lg transition-colors w-full md:w-auto text-sm cursor-pointer">
                    ارسال سریع
                  </button>
                </div>
              </div>

              {/* item 2 */}
              <div className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-xl border border-gray-100 dark:border-border-dark shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="bg-gray-100 dark:bg-background-dark size-16 flex justify-center items-center rounded-lg text-xl shrink-0 border border-gray-200 dark:border-border-dark">
                  <FaRegUserCircle />
                </div>

                <div className="grow">
                  <h3 className="font-bold text-lg text-[#111418] dark:text-text-main-dark mb-1">
                    کارشناس محتوا
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm items-center text-gray-500 dark:text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span>
                        <GoHome />
                      </span>
                      <span>شرکت دیجی تک</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <span>
                        <CiLocationOn />
                      </span>
                      <span>تهران</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <span>
                        <CiClock2 />
                      </span>
                      <span>3 ساعت پیش</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                  <span className="text-gray-700 dark:text-text-main-dark font-medium">
                    12 - 15 میلیون
                  </span>

                  <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-lg transition-colors w-full md:w-auto text-sm cursor-pointer">
                    ارسال سریع
                  </button>
                </div>
              </div>

              {/* item 3 */}
              <div className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-xl border border-gray-100 dark:border-border-dark shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="bg-gray-100 dark:bg-background-dark size-16 flex justify-center items-center rounded-lg text-xl shrink-0 border border-gray-200 dark:border-border-dark">
                  <FaRegUserCircle />
                </div>

                <div className="grow">
                  <h3 className="font-bold text-lg text-[#111418] dark:text-text-main-dark mb-1">
                    کارشناس محتوا
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm items-center text-gray-500 dark:text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span>
                        <GoHome />
                      </span>
                      <span>شرکت دیجی تک</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <span>
                        <CiLocationOn />
                      </span>
                      <span>تهران</span>
                    </span>

                    <span className="flex items-center gap-1">
                      <span>
                        <CiClock2 />
                      </span>
                      <span>3 ساعت پیش</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                  <span className="text-gray-700 dark:text-text-main-dark font-medium">
                    12 - 15 میلیون
                  </span>

                  <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-6 py-2 rounded-lg transition-colors w-full md:w-auto text-sm cursor-pointer">
                    ارسال سریع
                  </button>
                </div>
              </div>
            </div>

             <div className="mt-9 flex items-center justify-center">
              <div className="flex items-center gap-1 text-gray-600 dark:text-text-secondary font-medium hover:text-primary transition-all hover:gap-2 cursor-pointer">
                <span>مشاهده همه آگهی ها</span>
                <span className="text-2xl">
                  <HiArrowLongLeft />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}