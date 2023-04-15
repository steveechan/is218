import { PageLayout } from "../../components/layout";
import { AiOutlineSwapRight } from "react-icons/ai";

const PartnershipsAndAffiliations = () => {


    return <PageLayout>
        <div className="max-w-4xl space-y-8 mx-auto p-4">
       <div>
         <p className="text-sage-accent1">Partnerships and Affiliations</p>
        <h1 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-3xl 2xl:leading-relaxed xl:leading-relaxed lg:leading-relaxed md:leading-relaxed sm:leading-relaxed leading-snug">A Strong Network of Trusted Experts Who Share Our Vision for Agile and Lean Excellence</h1>
       </div>
        <p className="leading-loose">Our partnerships and affiliations are a vital part of our commitment to providing top-notch agile and lean solutions. We are proud to work with a network of trusted experts who share our values and help us deliver exceptional services to our students.</p>
         <div className="mt-8 ">
          <button className="flex items-center gap-2 text-sm  bg-sage-main px-8 py-4 rounded-full">
                Join our network <AiOutlineSwapRight />{" "}
              </button>
         </div>
         <div className="space-y-4">
            <h4 className="font-bold">Trusted by:  </h4>
            <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
                <li><img src={"/images/sample-logo.webp"} width={100} height={100} /></li>
                 <li><img src={"/images/sample-logo.webp"} width={100} height={100} /></li>
                  <li><img src={"/images/sample-logo.webp"} width={100} height={100} /></li>
                   <li><img src={"/images/sample-logo.webp"} width={100} height={100} /></li>
            </ul>
         </div>
        </div>
    </PageLayout>
}
export default PartnershipsAndAffiliations;