import Client from "./client";

const Page = async ({ params }: { params: Promise<{ itemID: string }> }) => {
  const { itemID: strItemID } = await params;
  return <Client params={{ strItemID }} />;
};

export default Page;
