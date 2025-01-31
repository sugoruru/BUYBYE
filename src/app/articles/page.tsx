import ArticleCard from "@/components/articleCard";
import articles from "@/data/articles";

const Page = () => {
  return (
    <div className="mt-4 max-lg:max-w-80 max-lg:mx-auto">
      <h1 className="text-2xl text-center font-bold">募金ブログ</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-4 lg:justify-center">
        {articles.map((article, index) => (
          <ArticleCard key={`article_list_${index}`} name={article.title} image={article.image} id={article.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
