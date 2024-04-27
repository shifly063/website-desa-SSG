import Link from "next/link";

export async function getStaticProps() {
    try {
      // Panggil API untuk mendapatkan data HeroList
      const response = await fetch("https://agency.teamrabbil.com/api/HeroList");
  
      // Periksa apakah responsenya berhasil (kode status 200)
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
  
      // Ambil data JSON dari respons
      const data = await response.json();
      console.log(data);
      // Kembalikan data sebagai props
      return {
        props: {
          data // Menggunakan data dari respons API
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return {
        props: {
          posts: null, // Kembalikan null jika terjadi kesalahan
        },
      };
    }
  }
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
  if (!res.ok) {
    throw new Error("BrandList Calling Fail");
  }
  return res.json();
}


export default function Hero({ data }) {
  // const data = getData();

//   getStaticProps();

  console.log(data);
  // console.log(posts.id);
  return (
    <div>
      <section
        // style={{ backgroundImage: "url('/IMG_6453.JPG')" }}
        className=" bg-transparent h-screen"
      >
        <div className="relative pt-12 lg:pt-20 pb-20 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading grid">
                      <span className="text-[#4F6F52]">
                        Selamat Datang
                        {/* {data['title']} */}
                      </span>
                      <span className="text-green-600"> di Desa Kami</span>
                    </h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      {/* {data['description']} */}
                      Desa Wisata Sendangduwur, desa unik yang teletak diatas bukit dibagian pesisir utara Kabupaten Lamongan
                    </p>
                    <div>
                      <Link
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href=""
                      >
                        Get Started
                      </Link>
                      <Link
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-green-100 rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        How it works
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap lg:mb-4 lg:ml-6">
                  <img
                    className="hidden lg:grid w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover lg:rounded-xl rounded-br-none"
                    src={
                      "https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg"
                    }
                    alt=""
                  />
                  <img
                    className="hidden lg:grid w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover lg:rounded-xl rounded-bl-none"
                    src={
                      "https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                  <img
                    className="hidden lg:grid w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover lg:rounded-xl rounded-br-none"
                    src={
                      "https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg"
                    }
                    alt=""
                  />
                  <img
                    className="hidden lg:grid w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover lg:rounded-xl rounded-bl-none"
                    src={
                      "https://agency.teamrabbil.com/files/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



// export default Hero;
