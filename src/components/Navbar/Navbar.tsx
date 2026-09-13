// icons
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <>
     <nav className="fixed top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-border dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* logo */}
            <div className="flex items-center gap-2">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <MdOutlineWorkOutline />
              </div>
              <span className="text-xl font-bold text-text-main dark:text-text-main-dark">
                Opply
              </span>
            </div>

            {/* menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium text-text-main dark:text-text-main-dark hover:text-primary dark:hover:text-primary"
              >
                فرصت‌های شغلی
              </a>
              <a
                href="#"
                className="text-sm font-medium text-text-main dark:text-text-main-dark hover:text-primary dark:hover:text-primary"
              >
                شرکت‌ها
              </a>
              <a
                href="#"
                className="text-sm font-medium text-text-main dark:text-text-main-dark hover:text-primary dark:hover:text-primary"
              >
                وبلاگ
              </a>
            </div>

            {/* call to action */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hidden sm:block text-sm font-medium text-text-main dark:text-text-main-dark hover:text-text-secondary dark:hover:text-text-secondary cursor-pointer"
              >
                ورود | ثبت‌نام
              </a>

              <button className="bg-primary hover:bg-primary-dark text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md text-white">
                <IoIosAddCircleOutline className="text-[20px]" />
                <span>ثبت آگهی</span>
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
