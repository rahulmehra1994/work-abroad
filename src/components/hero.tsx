import Nav from "./nav";

export default function Hero() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl">
        <Nav />

        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:py-20 xl:py-48">
          <video
            autoPlay
            loop
            muted
            src="/videos/romanian_flag_video.mp4"
            className="absolute inset-0 h-full w-full object-cover object-center z-index-1"
          >
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-indigo-100 mix-blend-multiply z-index-0"></div>

          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl  text-shadow-lg">
              Easy Jobs Romania
            </h1>

            <p className="mb-4 text-center text-lg text-gray-100 sm:text-xl md:mb-8 text-shadow-lg">
              We specialize in providing complete immigration solutions for
              Romania—from securing your work permit to ensuring you settle in
              comfortably upon arrival. Our Total Immigration Package covers
              every step of the process, including legal formalities, job
              placement, and on-ground support in Romania.
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#CompetitiveEdge"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Explore
              </a>

              <a
                href="#Pricing"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
