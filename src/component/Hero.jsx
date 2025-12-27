export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-8 items-center">
        <div>
          <h2 className="text-5xl font-black leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h2>

          <p className="text-gray-600 mt-4">
            Browse through our diverse range of meticulously crafted garments.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
            Shop Now
          </button>

          <div className="flex gap-10 mt-10">
            <Stat value="200+" label="International Brands" />
            <Stat value="2,000+" label="High-Quality Products" />
            <Stat value="30,000+" label="Happy Customers" />
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}
