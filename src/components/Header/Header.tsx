// icons
import { IoSearch } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { PiCity } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { VscCircleSmallFilledCompact } from "react-icons/vsc";

export default function Header() {
  return (
    <>
      <header className="bg-white dark:bg-background-dark py-16 lg:py-24 overflow-x-hidden">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mt-5 mb-6 border border-green-200 dark:border-primary/20">
            <span className="relative flex size-2">
              <span className="animate-ping inline-flex size-full rounded-full bg-primary opacity-75 absolute"></span>
              <span className="bg-primary inline-flex rounded-full size-full"></span>
            </span>
            <span>بیش از ۱۰ هزار موقعیت شغلی فعال</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-text-main-dark mb-6">
            شغل رویایی‌تان را <span className="text-primary">همین امروز</span>
            پیدا کنید
          </h1>

          {/* Description */}
          <p className="text-lg text-text-secondary mb-10 max-w-7xl">
            بهترین فرصت‌های شغلی در معتبرترین شرکت‌های ایران را جستجو کنید و
            آینده شغلی خود را بسازید.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-7xl bg-white dark:bg-card-dark p-3 rounded-2xl shadow-xl border border-border dark:border-border-dark flex flex-col md:flex-row gap-3">
            {/* Job Title Input */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-text-secondary group-focus-within:text-primary">
                <IoSearch />
              </div>
              <input
                type="text"
                placeholder="عنوان شغلی یا شرکت"
                className="w-full h-12 pr-10 pl-4 bg-gray-50 dark:bg-background-dark border border-border dark:border-border-dark
                           focus:border-primary focus:ring-1 focus:ring-primary/30 
                           rounded-lg text-sm text-text-main dark:text-text-main-dark
                           placeholder:text-text-secondary outline-none transition-all"
              />
            </div>

            {/* Category Select */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-text-secondary group-focus-within:text-primary">
                <BiCategory />
              </div>

              <select
                className="w-full h-12 pr-10 pl-4 bg-gray-50 dark:bg-background-dark border border-border dark:border-border-dark
                           focus:border-primary focus:ring-1 focus:ring-primary/30 
                           rounded-lg text-sm text-text-main dark:text-text-main-dark
                           appearance-none outline-none transition-all"
              >
                <option value="" disabled selected>
                  دسته‌بندی شغلی
                </option>
                <option value="dev">برنامه‌نویس</option>
                <option value="graphic">گرافیک</option>
                <option value="markting">مارکتینگ</option>
                <option value="counting">حسابداری</option>
              </select>

              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-text-secondary">
                <IoIosArrowDown />
              </div>
            </div>

            {/* City Select */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-text-secondary group-focus-within:text-primary">
                <PiCity />
              </div>

              <select
                className="w-full h-12 pr-10 pl-4 bg-gray-50 dark:bg-background-dark border border-border dark:border-border-dark
                           focus:border-primary focus:ring-1 focus:ring-primary/30 
                           rounded-lg text-sm text-text-main dark:text-text-main-dark
                           appearance-none outline-none transition-all"
              >
                <option value="" disabled selected>
                  همه‌ی شهرها
                </option>
                <option value="tehran">تهران</option>
                <option value="mashhad">مشهد</option>
                <option value="shiraz">شیراز</option>
                <option value="qom">قم</option>
              </select>

              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-text-secondary">
                <IoIosArrowDown />
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-primary hover:bg-primary-dark font-bold h-12 rounded-lg text-white px-8 cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto transition-colors">
              <span>جستجو</span>
            </button>
          </div>

          {/* Popular Searches */}
          <div className="flex items-center mt-8 flex-wrap justify-center gap-4 text-sm text-text-secondary">
            <span>جستجوهای محبوب:</span>

            <div className="flex items-center gap-1">
              <a href="#" className="text-primary hover:underline">
                برنامه‌نویس React
              </a>
              <span className="text-gray-300 dark:text-gray-600">
                <VscCircleSmallFilledCompact />
              </span>
            </div>

            <div className="flex items-center gap-1">
              <a href="#" className="text-primary hover:underline">
                برنامه‌نویس Python
              </a>
              <span className="text-gray-300 dark:text-gray-600">
                <VscCircleSmallFilledCompact />
              </span>
            </div>

            <div className="flex items-center gap-1">
              <a href="#" className="text-primary hover:underline">
                حسابدار ارشد
              </a>
               <span className="text-gray-300 dark:text-gray-600">
                <VscCircleSmallFilledCompact />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
