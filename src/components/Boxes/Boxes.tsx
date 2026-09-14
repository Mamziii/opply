export default function Boxes() {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* box 1 */}
            <div className=" bg-linear-to-br from-primary to-green-700 rounded-2xl p-8 text-white relative flex flex-col justify-between h-80">
              <h2 className="text-3xl font-bold mb-4">کارجو هستید؟</h2>
              <p className="max-w-100 text-lg">
                با ساخت رزومه حرفه ای در کمتر از 5 دقیقه شانس استخدام خود را
                دوبرابر کنید
              </p>
              <button className="bg-white rounded-xl text-primary py-3 px-8 hover:bg-gray-100 font-bold cursor-pointer transition-colors max-w-1/2">
                ساخت رزومه آنلاین
              </button>
            </div>

            {/* box 2 */}
            <div className=" bg-white dark:bg-card-dark border border-gray-300 dark:border-border-dark rounded-2xl p-8 relative flex flex-col justify-between h-80">
              <h2 className="text-3xl font-bold mb-4 text-text-main dark:text-text-main-dark">
                کارفرما هستید؟
              </h2>
              <p className="max-w-100 text-lg text-gray-600 dark:text-text-secondary">
                به جمع 10000 شرکت بپیوندید و بهترین استعداد هارو در اختیار
                بگیرید
              </p>
              <button className=" bg-black dark:bg-primary rounded-xl text-white py-3 px-8 border font-bold cursor-pointer max-w-1/2">
                ثبت شرکت و آگهی
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
