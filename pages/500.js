import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MetaHeader } from "../components/common/metaHeader";


const ErrorPage = () => {

    return <main className="min-h-[80vh] grid place-items-center">
        <MetaHeader title="500 | Internal Server Error" description="Oops! Something went wrong. The server encountered an internal error and was unable to complete your request. Please try again later or contact the website administrator for assistance." />
        <h1 className="text-center max-w-4xl text-4xl leading-normal" >500 |  Internal Server Error</h1>
    </main>
}
export default ErrorPage;
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});