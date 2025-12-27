import React from "react";
import ProductCard from "./ProductCard";
import pickleimg from "../assets/images/pickle.png";
import waterBottle from "../assets/images/waterBottles.png";
import { toast } from "react-toastify";

const NewArrivalsProduct = () => {
  const productData = [
    {
      id: 1,
      productImage: pickleimg,
      productName: "Chicken Pickle",
      originalPrice: "150",
      discountPresents: "20",
    },
    {
      id: 2,
      productImage: waterBottle,
      productName: "Water Bottle",
      originalPrice: "100",
      discountPresents: "20",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productData.map((item) => (
          <ProductCard
            key={item.id}
            imageSrc={item.productImage}
            productName={item.productName}
            originalPrice={item.originalPrice}
            discountPresents={item.discountPresents}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => toast.info("Not implemented At")}
          className="border px-6 py-2 rounded-full">
          View All
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsProduct;
