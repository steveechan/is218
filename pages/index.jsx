import Head from "next/head";
import { Button } from "../components/common/button";
import { useRef, useEffect } from "react";
import createGlobe from "cobe";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MetaHeader } from "../components/common/metaHeader";
export const getStaticProps= async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
      'homepage'
    ])),
  },
})

export default function Home(props) {
  const canvasRef = useRef();
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0.8,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 4,
      opacity: 0.3,
      baseColor: [0.3, 0.4, 0.3],
      markerColor: [1.2, 1.2, 1.25],
      glowColor: [0.3, 0.4, 0.3],
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
   const {t} = useTranslation();

  return (
    <>
    <MetaHeader
        title="MyWebclass.org"
        description={t("homepage:description")}
    />
      <main className="container mx-auto my-12  h-[80vh] grid place-items-center relative">
        <section className="flex justify-between items-center w-full  relative">
          <div className="max-w-2xl space-y-8 p-4 2xl:text-left xl:text-left lg:text-left md:text-left text-center">
            <h1 className="2xl:text-7xl xl:text-7xl lg:text-6xl text-4xl font-black break-words ">
              <span className=" text-sage-accent1 leading-normal">
                {t("homepage:heroHighlighted")}
              </span>{" "}
              <span className="leading-normal">{t("homepage:heroText")}</span>
            </h1>
            <p
              className="leading-relaxed text-sage-accent3/60 
            2xl:text-base xl:text-base lg:text-base text-sm
            "
            >
              {t("homepage:description")}
            </p>
            <Button text={t("homepage:heroButton")} />
          </div>
             <img src="/images/pattern.png" className="absolute w-full -z-10 bottom-0 top-0 h-full" />
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

