"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/getproducts");
    setProducts(data);
  };

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plan"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {products.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
