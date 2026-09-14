// icons
import { HiMiniArrowLongLeft } from "react-icons/hi2";


export default function Articles() {
  return (
    <>
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#111418] dark:text-text-main-dark">
              مجله شغلی و آموزشی
            </h2>
            <span className="text-primary flex items-center gap-1 hover:gap-2 transition-all">
              <a href="#">مشاهده همه</a>
              <span>
                <HiMiniArrowLongLeft />
              </span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
            {/* article 1 */}
            <article className="flex flex-col group">
              <div className="mb-4 h-56 overflow-hidden rounded-xl">
                <img
                  src="./article.jpg"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex gap-2 mb-2">
                <span className="font-semibold text-xs text-primary bg-primary/10 py-1 px-2 rounded">
                  مصاحبه شغلی
                </span>
                <span className="text-xs text-gray-500 dark:text-text-secondary mt-1">
                  5 دقیقه مصالعه
                </span>
              </div>

              <h3 className="font-bold text-xl mb-2 text-[#111418] dark:text-text-main-dark group-hover:text-primary transition-colors">
                سوالات متداول در مصاحبه های استخدامی 1404
              </h3>
              <p className="text-sm text-gray-500 dark:text-text-secondary line-clamp-2">
                در این مقاله به بررسی مهمترین سوالاتی که کارفرمایان در سال جدید
                می پرسند می پردازیم و بهترین پاسخ هارا بررسی میکنیم.
              </p>
            </article>

             {/* article 2 */}
            <article className="flex flex-col group">
              <div className="mb-4 h-56 overflow-hidden rounded-xl">
                <img
                  src="./article.jpg"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex gap-2 mb-2">
                <span className="font-semibold text-xs text-purple-500 bg-purple-500/10 py-1 px-2 rounded">
                  مصاحبه شغلی
                </span>
                <span className="text-xs text-gray-500 dark:text-text-secondary mt-1">
                  5 دقیقه مصالعه
                </span>
              </div>

              <h3 className="font-bold text-xl mb-2 text-[#111418] dark:text-text-main-dark group-hover:text-primary transition-colors">
                سوالات متداول در مصاحبه های استخدامی 1404
              </h3>
              <p className="text-sm text-gray-500 dark:text-text-secondary line-clamp-2">
                در این مقاله به بررسی مهمترین سوالاتی که کارفرمایان در سال جدید
                می پرسند می پردازیم و بهترین پاسخ هارا بررسی میکنیم.
              </p>
            </article>

             {/* article 3 */}
            <article className="flex flex-col group">
              <div className="mb-4 h-56 overflow-hidden rounded-xl">
                <img
                  src="./article.jpg"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex gap-2 mb-2">
                <span className="font-semibold text-xs text-green-500 bg-green-500/10 py-1 px-2 rounded">
                  مصاحبه شغلی
                </span>
                <span className="text-xs text-gray-500 dark:text-text-secondary mt-1">
                  5 دقیقه مصالعه
                </span>
              </div>

              <h3 className="font-bold text-xl mb-2 text-[#111418] dark:text-text-main-dark group-hover:text-primary transition-colors">
                سوالات متداول در مصاحبه های استخدامی 1404
              </h3>
              <p className="text-sm text-gray-500 dark:text-text-secondary line-clamp-2">
                در این مقاله به بررسی مهمترین سوالاتی که کارفرمایان در سال جدید
                می پرسند می پردازیم و بهترین پاسخ هارا بررسی میکنیم.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}