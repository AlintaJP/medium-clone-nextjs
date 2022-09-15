import { GetStaticProps } from "next";
import React from "react";
import Header from "../../components/Header";
import { sanityClient } from "../../sanity";
import { Post } from "../../typings";
import Article from "../../components/Article";
import Comments from "../../components/Comments";
import Form from "../../components/Form";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  return (
    <main>
      <Header />
      <Article post={post} />
      <Form post={post} />
      <Comments post={post} />
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
      name,
      image
    },
    'comments': *[
      _type == "comment" &&
      post._ref == ^._id &&
      approved == true
    ],
    description,
    mainImage,
    slug,
    body
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
