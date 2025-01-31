import Client from "./client";

const Page = async ({ params }: { params: Promise<{ articleID: string }> }) => {
  const { articleID: strArticleID } = await params;
  return <Client params={{ strArticleID }} />;
};

export default Page;
