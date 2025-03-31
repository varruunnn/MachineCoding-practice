"use client"
import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 5; // Number of images per page

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setImages(data.products);
    };

    fetchImages();

  }, []);
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Paginated Image Gallery</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
        {currentImages.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} style={{ width: "100px", height: "100px" }} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
