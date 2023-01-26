import { getAllPosts, getPost } from "../../lib/api";
import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug);
  return {
    props: {
      postData: data.post,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Layout>
        <section className="section">
          <div className="post container">
            <Head>
              <title>{postData.title}</title>
            </Head>
            <main className="mb-5">
              <h1 className="mb-4">{postData.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: postData.content }} />
            </main>
            <Link href="/blog">Nazaj na vse prispevke</Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
