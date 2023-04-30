import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MetaHeader } from "../components/common/metaHeader";


const ErrorPage = () => {

    return <main className="min-h-[80vh] grid place-items-center">
        <MetaHeader title="404 | Page not found" description="Oops! The page you are looking for could not be found. It may have been moved, deleted, or never existed. Please check the URL or use the search function to find what you're looking for." />
        <h1 className="text-center max-w-4xl text-4xl leading-normal">404 | Oops! The page you are looking for could not be found. </h1>
    </main>
}
export default ErrorPage;
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});