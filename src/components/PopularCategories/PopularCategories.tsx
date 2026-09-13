// icons
import { FaCode } from "react-icons/fa6";
import { LiaSalesforce } from "react-icons/lia";
import { VscSymbolColorCompact } from "react-icons/vsc";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { MdBackup } from "react-icons/md";
import { IoIosMan } from "react-icons/io";

export default function PopularCategories() {
  return (
    <>
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-bold mb-8 text-2xl text-text-main dark:text-text-main-dark">
            دسته بندی های محبوب
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* category card 1 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110">
                  <FaCode />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors">
                برنامه نویسی
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1400 موقعیت شغلی</p>
            </a>

            {/* category card 2 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-orange-400/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-orange-400/10 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110">
                  <LiaSalesforce />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-orange-400 transition-colors">
                مارکتینگ و فروش
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1100 موقعیت شغلی</p>
            </a>

            {/* category card 3 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-purple-400/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-purple-400/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110">
                  <VscSymbolColorCompact />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-purple-400 transition-colors">
                طراحی و هنر
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1000 موقعیت شغلی</p>
            </a>

            {/* category card 4 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-pink-400/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-pink-400/10 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110">
                  <FaRegMoneyBillAlt />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-pink-400 transition-colors">
                مالی و حساب داری
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1200 موقعیت شغلی</p>
            </a>

            {/* category card 5 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-red-400/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-red-400/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110">
                  <FaChalkboardTeacher />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-red-400 transition-colors">
                آموزش
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1500 موقعیت شغلی</p>
            </a>

            {/* category card 6 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-yellow-400/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110">
                  <MdEngineering />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-yellow-400 transition-colors">
                مهندسی
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1600 موقعیت شغلی</p>
            </a>

            {/* category card 7 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-cyan-400/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110">
                  <MdBackup />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-cyan-400 transition-colors">
                پشتیبانی مشتریان
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1600 موقعیت شغلی</p>
            </a>

            {/* category card 8 */}
            <a
              href="#"
              className="group flex flex-col p-6 bg-white dark:bg-card-dark rounded-xl border border-border dark:border-border-dark hover:border-emerald-400/50 hover:shadow-lg transition-all"
            >
              <div>
                <span className="size-12 rounded-lg bg-blue-50 dark:bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110">
                  <IoIosMan />
                </span>
              </div>

              <h3 className="font-bold text-lg mb-1 text-text-main dark:text-text-main-dark group-hover:text-emerald-400 transition-colors">
                منابع انسانی
              </h3>

              <p className="text-sm text-gray-400 dark:text-text-secondary">1600 موقعیت شغلی</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}