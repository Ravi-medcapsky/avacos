export default function Newsletter() {
  return (
    <section className="bg-black text-white py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mr-10">
        <h3 className="text-2xl font-bold">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>

        <div className="flex gap-3">
          <input
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full text-black"
          />
          <button className="bg-white text-black px-5 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
