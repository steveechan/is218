import Head from "next/head";
import Card from "@/components/card";
import { getSortedPostsData } from "../lib/posts";
// import { posts } from "@/lib/data";

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts: posts } };
}

export default function Home({ posts }) {
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
      <main className="container mx-auto my-12 2xl:p-4 xl:p-4 lg:p-4 p-1">
        <div className=" mx-auto text-center whitespace-normal break-words space-y-4">
          <h1 className="text-6xl font-bold  2xl:leading-loose xl:leading-loose lg:leading-loose leading-normal">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-400 to-indigo-100 whitespace-normal">
              MyWebclass.org
            </span>
          </h1>
          <p className="text-lg text-neutral-300">
            Here you will learn the fundamentals of web development
          </p>
        </div>
        <section className="my-16 2xl:w-3/4 xl:w-3/4 lg:w-3/4 w-full mx-auto">
          <div className="my-4">
            <h2 className="text-xl font-bold text-white">Available Courses</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                description={post.description}
                link={`/posts/${post.slug}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

