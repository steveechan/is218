import Head from "next/head";
// import Card from "@/components/card";
// import { getSortedPostsData } from "../lib/posts";
import { useRef, useEffect } from "react";
import createGlobe from "cobe";
// import { posts } from "@/lib/data";

// export async function getStaticProps() {
//   const posts = getSortedPostsData();
//   return { props: { posts: posts } };
// }

export default function Home({ posts }) {
  const canvasRef = useRef();
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 4,
      opacity: 1,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1.5, 1.5, 1.5],
      glowColor: [0.2, 0.2, 0.2],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.03 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });
    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <>
      <Head>
        <title>MyWebclass.org</title>
        <meta
          name="description"
          content="Here you will learn Math from yours truly, MyWebclass.org"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container mx-auto my-12  h-[80vh] grid place-items-center relative">
        <section className="flex justify-between items-center w-full  relative">
          <div className="max-w-2xl space-y-8 p-4 2xl:text-left xl:text-left lg:text-left md:text-left text-center">
            <h1 className="2xl:text-7xl xl:text-7xl lg:text-6xl text-4xl font-black break-words ">
              <span className=" text-sage-accent1 leading-normal">
                Empowering
              </span>{" "}
              <span className="leading-normal">the future of education</span>
            </h1>
            <p
              className="leading-relaxed text-sage-accent3/60 
            2xl:text-base xl:text-base lg:text-base text-sm
            "
            >
              Revolutionizing education by incorporating Agile and Lean
              principles into the classroom, fostering a culture of continous
              improvement, collaboration, and adaptability
            </p>
            <button className="bg-sage-main py-4 px-8 rounded-full text-sm font-bold text-sage-accent3 border border-sage-accent1">
              Volunteer Now!
            </button>
          </div>
          <div className="2xl:relative xl:relative lg:relative md:relative absolute -z-10 right-0 mx-auto w-fit">
            <canvas
              ref={canvasRef}
              style={{
                width: 600,
                height: 600,
                maxWidth: "100%",
                aspectRatio: 1,
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

