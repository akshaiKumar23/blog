import prisma from "@/lib/db";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const PostDetailPage = async ({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    return notFound();
  }
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default PostDetailPage;
