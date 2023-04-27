import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MetaHeader } from "../components/common/metaHeader";
import { PageLayout } from "../components/layout";
import { BsArrowReturnRight, BsArrowRight } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";

const ServicesPage = () => {
  return (
    <>
      <MetaHeader
        title="Services"
        description="Explore our range of expert services tailored to meet your unique needs. From customized training and support packages to collaboration and networking opportunities, we offer comprehensive solutions that can help you achieve your goals. Discover how we can help you succeed and take your next step forward today"
      />

     <PageLayout>
            <div className="space-y-4 min-w-[250px]">
                <p className="text-sage-accent3/60">Services</p>
                <h1 className="text-4xl">How we can help you</h1>
            </div>
        <section className="mt-12 flex w-full gap-12 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex-wrap">
            <div className=" relative ">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-wrap gap-12 2xl:max-w-sm xl:max-w-sm lg:max-w-sm w-full">
                <div className="flex gap-4 items-start ">
                    <p className="text-xl font-light break-keep mt-2">01 —</p>
                    <h3 className="text-3xl leading-relaxed">Overview of professional development opportunities</h3>             
                </div>
               <div className="flex gap-4 items-start ">
                    <p className="text-xl font-light break-keep mt-2">02 —</p>
                    <h3 className="text-3xl leading-relaxed">Customized training and support packages</h3>             
                </div>
                    <div className="flex gap-4 items-start ">
                    <p className="text-xl font-light break-keep mt-2">03 —</p>
                    <h3 className="text-3xl leading-relaxed">Collaboration and networking opportunities for educators and schools</h3>             
                </div>
            </div>
        </section>
     </PageLayout>
    </>
  );
};

export default ServicesPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
