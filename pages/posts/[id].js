// import Head from "next/head";
// import { getPostData, getAllPostIds } from "../../lib/posts";

// export async function getStaticProps(context) {
//   const slug = context.params.id;
//   const post = await getPostData(slug);

//   return { props: { post: post } };
// }

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export default function Post({ post }) {
//   return (
//     <>
//       <Head>
//         <title>{post.title}</title>
//         <meta name="description" content={post.description} />
//       </Head>
//       <main className="container mx-auto my-12 p-4   space-y-7 ">
//         <section className="prose prose-invert container mx-auto">
//           <div className="container mx-auto">
//             <p className="m-0">{post.author}</p>
//             <p className="mt-0">
//               {new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
//                 new Date(post.date)
//               )}
//             </p>
//           </div>
//           <div
//             dangerouslySetInnerHTML={{ __html: post.contentHtml }}
//             className=""
//           />
//         </section>
//       </main>
//     </>
//   );
// }

