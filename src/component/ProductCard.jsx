import { toast } from "react-toastify";

export default function ProductCard({
  imageSrc = "https://via.placeholder.com/300",
  productName,
  originalPrice,
  discountPresents,
}) {
  // 🔢 Discount calculation
  const discountedPrice = Math.round(
    originalPrice - (originalPrice * discountPresents) / 100
  );

  return (
    <div
      className="
        border rounded-xl p-4 bg-white
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-xl
      ">
      {/* Image */}
      <img
        src={imageSrc}
        alt={productName}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Title */}
      <h3 className="font-semibold text-lg">{productName}</h3>

      {/* Rating */}
      <p className="text-sm text-yellow-500">⭐⭐⭐⭐☆</p>

      {/* Price */}
      <div className="mt-2 flex gap-2 items-center">
        <span className="font-bold text-lg text-green-700">
          ₹{discountedPrice}
        </span>

        <span className="line-through text-gray-400">₹{originalPrice}</span>

        <span className="text-red-500 text-sm font-medium">
          -{discountPresents}%
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => toast.success("Comming soon!")}
        className="
          mt-4 w-full bg-green-600 text-white py-2 rounded-lg
          transition-all duration-200
          hover:bg-green-700 hover:scale-[1.02]
          active:scale-95
        ">
        Add to Cart
      </button>
    </div>
  );
}
