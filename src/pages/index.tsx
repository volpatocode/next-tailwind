import Head from "next/head";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Instructions from "../components/Instructions";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFThink</title>
      </Head>
      <div className="flex flex-col justify-between">
        <Navbar />
        <div className="container mx-auto w-full min-h-[90vh] flex flex-col justify-around">
          <div className=" flex flex-row justify-between">
            <div className=" w-1/3 flex flex-col gap-6">
              <h1 className="font-extrabold text-6xl">
                Collect and Sell your{" "}
                <span className="text-pink-700">awesome</span> NFTs
              </h1>
              <p className="text-md text-white-600">
                Welcome to the future, you can buy and sell awesome artwork to
                enjoy.
              </p>
              <div className="flex flex-row gap-5">
                <button className="w-1/2 px-4 py-2 bg-purple-600 hover:bg-purple-500 transition-all duration-300">
                  Explore Now
                </button>
                <button
                  className="w-1/2 px-4 py-2 bg-transparent border-white-900 hover:bg-white-900 hover:text-black-900 hover:border-white-900  transition-all duration-300"
                  style={{ border: "1px solid" }}
                >
                  Create
                </button>
              </div>
              <div className="flex flex-row gap-2 pt-4 justify-between items-center">
                <div>
                  <h4 className="text-5xl font-semibold">50K+</h4>
                  <p className="text-lg text-white-700">Artwork</p>
                </div>
                <div>
                  <h4 className="text-5xl font-semibold">100K+</h4>
                  <p className="text-lg text-white-700">Auction</p>
                </div>
                <div>
                  <h4 className="text-5xl font-semibold">10K+</h4>
                  <p className="text-lg text-white-700">Creator</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">carrousel</div>
          </div>
          <Instructions />
        </div>
        <Footer />
      </div>
    </>
  );
}
