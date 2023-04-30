import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const ErrorPage = () => {

    return <main className="min-h-[80vh] grid place-items-center">

        <h1 className="text-center">404 | Something went wrong</h1>
    </main>
}
export default ErrorPage;
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});