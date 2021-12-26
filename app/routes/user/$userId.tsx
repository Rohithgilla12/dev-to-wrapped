import { useParams } from "react-router-dom";
import { LoaderFunction, useLoaderData } from "remix";
import { Article } from "../../types/articleData";
import { mockResponse } from "../../mocks/mock-response";
import { ArticleStats } from "~/types/articleStats";
import { ArticleProcessedData } from "~/types/articleProcessedData";

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = params.userId;
  console.log(userId);
  const articles: Article[] = mockResponse;

  // filter article that are in 2021
  // this is a bit hacky, since the dates are in string format we can
  // just check if the year is 2021

  const filteredArticles = articles.filter((article) => {
    const year = article.published_at.slice(0, 4);
    return year === "2021";
  });
  const totalViews = filteredArticles.reduce((acc, article) => {
    return acc + article.page_views_count;
  }, 0);
  const totalReactions = filteredArticles.reduce((acc, article) => {
    return acc + article.public_reactions_count;
  }, 0);

  const totalComments = filteredArticles.reduce((acc, article) => {
    return acc + article.comments_count;
  }, 0);

  const totalReadingTime = filteredArticles.reduce((acc, article) => {
    return acc + article.reading_time_minutes;
  }, 0);

  const stats: ArticleStats = {
    totalViews,
    totalReactions,
    totalComments,
    totalReadingTime,
  };

  const articleProcessedData: ArticleProcessedData = {
    stats,
  };

  return articleProcessedData;
};

export default function JokeRoute() {
  const articleProcessedData = useLoaderData<ArticleProcessedData>();
  const stats = articleProcessedData.stats;
  return (
    <div>
      <h1 className="text-center py-4 text-2xl font-bold">Stats</h1>
      <div className="flex flex-row justify-between">
        <p>Total Views: {stats.totalViews}</p>
        <p>Total Reactions: {stats.totalReactions}</p>
        <p>Total Comments: {stats.totalComments}</p>
        <p>Total Reading Time: {stats.totalReadingTime}</p>
      </div>
    </div>
  );
}
