import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
const formatter = (value) => <CountUp end={value} separator="," />;
import { Statistic } from "antd";

// Fungsi untuk mengambil data dari API
const getData = async () => {
  const res = await fetch("https://agency.teamrabbil.com/api/BrandList");
  if (!res.ok) {
    throw new Error("BrandList Calling Fail");
  }
  return res.json();
};

// Komponen Brands
const Brands = () => {
  // State untuk menyimpan data
  const [data, setData] = useState([]);

  // Gunakan useEffect untuk memanggil getData saat komponen di-mount
  useEffect(() => {
    // Buat fungsi async di dalam useEffect untuk mengambil data
    const fetchData = async () => {
      try {
        const result = await getData(); // Panggil getData
        setData(result); // Set data ke state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Panggil fungsi fetchData
    fetchData();

    // Cleanup function tidak diperlukan karena tidak ada subscription atau listener yang perlu di-unsubscribe
  }, []); // Dependensi kosong agar useEffect hanya dijalankan sekali saat komponen di-mount

  // Render komponen
  return (
    <section className="lg:py-20 py-10 bg-cover bg-center" style={{ backgroundImage: "url('/bgSD.png')" }}>
      <div className="container mx-auto my-auto px-4 text-center lg:flex place-items-center">
        <div className="mx-auto lg:w-1/3 w-full">
          <h3 className="mb-10 text-4xl font-heading font-bold text-[#D2E3C8] text-end">
            Desa Wisata Sendangduwur
          </h3>
        </div>
        <div className="flex flex-wrap lg:w-2/3 w-full">
          {/* Lakukan mapping data setelah diambil */}
          {/* {data.map((item, i) => ( */}
          <div className="mb-12 lg:mb-0 w-full w-1/2 px-2">
            {/* <div className="lg:py-10 py-8 bg-gray-50 rounded-lg shadow-2xl"> */}
              <span className="text-white text-xl font-bold">
                JUMLAH PENDUDUK
                 <Statistic value={112893} formatter={formatter} className="text-white" />
              </span>
            {/* </div> */}
          </div>
          <div className="mb-12 lg:mb-0 w-full w-1/2 px-2">
            {/* <div className="lg:py-10 py-8 bg-gray-50 rounded-lg shadow-2xl"> */}
              <span className="text-white text-xl font-bold">LUAS DESA
                <Statistic value={112893}  formatter={formatter} className="text-white" />
              </span>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
