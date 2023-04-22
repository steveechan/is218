import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PageLayout } from "../../components/layout";
import Head from "next/head";

const AcademicArticlesPage = () => {

    return <>
    <Head>
        <title>Academic Articles</title>
    </Head>
    <PageLayout>
        <h1 className="text-4xl font-black leading-normal mx-auto">
          Academic Articles
        </h1>
        
    </PageLayout>
    </>

}

export default AcademicArticlesPage;

export const getStaticProps= async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },

})