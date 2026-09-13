// icons
import { IoPersonOutline } from "react-icons/io5";


export default function HowItsWork() {
  return (
    <>
     <section className="py-16 bg-blue-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-12 text-[#111418] dark:text-text-main-dark font-bold">
            چگونه کار می کند؟
          </h2>

          <div className="grid gird-cols-1 md:grid-cols-3 gap-8 relative">
            {/* line connector desktop */}
            <div className="hidden md:block absolute top-12 right-[16%] left-[16%] h-0.5 border-t-2 border-dashed border-gray-300 dark:border-border-dark z-0"></div>

            {/* step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white dark:bg-card-dark rounded-full size-22 flex justify-center items-center shadow-lg border-3 border-blue-100 dark:border-border-dark mb-3">
                <span className="text-primary text-3xl">
                  <IoPersonOutline />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main dark:text-text-main-dark">1 . ساخت پروفایل</h3>
              <p className="text-gray-500 dark:text-text-secondary max-w-xs">
                رزومه خود را بسازید یا آپلود کنید و مهارت های خود را تکمیل کنید
              </p>
            </div>

             {/* step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white dark:bg-card-dark rounded-full size-22 flex justify-center items-center shadow-lg border-3 border-blue-100 dark:border-border-dark mb-3">
                <span className="text-primary text-3xl">
                  <IoPersonOutline />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main dark:text-text-main-dark">2 . ساخت پروفایل</h3>
              <p className="text-gray-500 dark:text-text-secondary max-w-xs">
                رزومه خود را بسازید یا آپلود کنید و مهارت های خود را تکمیل کنید
              </p>
            </div>

             {/* step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white dark:bg-card-dark rounded-full size-22 flex justify-center items-center shadow-lg border-3 border-blue-100 dark:border-border-dark mb-3">
                <span className="text-primary text-3xl">
                  <IoPersonOutline />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main dark:text-text-main-dark">3 . ساخت پروفایل</h3>
              <p className="text-gray-500 dark:text-text-secondary max-w-xs">
                رزومه خود را بسازید یا آپلود کنید و مهارت های خود را تکمیل کنید
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}