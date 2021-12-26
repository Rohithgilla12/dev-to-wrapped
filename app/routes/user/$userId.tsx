import { LoaderFunction, useLoaderData } from "remix";
import { ChartProvider, LineSeries, Tooltip, XAxis, YAxis } from "rough-charts";
import { ArticleProcessedData } from "~/types/articleProcessedData";
import { mockResponse } from "../../mocks/mock-response";
import { Article } from "../../types/articleData";
import {
  articlesMapByMonth,
  findMonthWithHeighestArticles,
  processArticlesStats,
} from "../../utils/processArticles";

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = params.userId;
  console.log(userId);
  const articles: Article[] = mockResponse;

  const filteredArticles = articles.filter((article) => {
    const year = article.published_at.slice(0, 4);
    return year === "2021";
  });

  const articleProcessedData: ArticleProcessedData = {
    stats: processArticlesStats(filteredArticles),
    monthWiseGraphData: articlesMapByMonth(filteredArticles),
    monthHighArticles: findMonthWithHeighestArticles(filteredArticles),
    filteredArticles,
  };

  return articleProcessedData;
};

export default function JokeRoute() {
  const articleProcessedData = useLoaderData<ArticleProcessedData>();
  const stats = articleProcessedData.stats;

  return (
    <div>
      <h1 className="text-center py-4 text-2xl mb-4 font-semibold">
        Dev.to Wrapped 2021
      </h1>
      <div className="text-xl">
        {`You have written a total of ${stats.totalArticles} articles in 2021`}
      </div>
      <div className="text-xl ">
        {`You have written more articles in the month of ${articleProcessedData.monthHighArticles}`}
      </div>
      <div className="flex flex-row justify-between">
        <p>Total Views: {stats.totalViews}</p>
        <p>Total Reactions: {stats.totalReactions}</p>
        <p>Total Comments: {stats.totalComments}</p>
        <p>Total Reading Time: {stats.totalReadingTime}</p>
      </div>

      <div className="my-2 flex flex-col">
        <div className="my-4">
          <ChartProvider
            data={articleProcessedData.monthWiseGraphData}
            height={400}
          >
            <XAxis dataKey="month" />
            <LineSeries dataKey="articles" />
            <YAxis dataKey="articles" format={(count) => `${count}`} />
            <Tooltip>
              {({ month, articles }) => `Articles in ${month}: ${articles}`}
            </Tooltip>
          </ChartProvider>
        </div>
        <div className="my-4">
          <ChartProvider
            data={articleProcessedData.monthWiseGraphData}
            height={400}
          >
            <XAxis dataKey="month" />
            <LineSeries dataKey="articles" />
            <YAxis dataKey="articles" format={(count) => `${count}`} />
            <Tooltip>
              {({ month, articles }) => `Articles in ${month}: ${articles}`}
            </Tooltip>
          </ChartProvider>
        </div>
      </div>
    </div>
  );
}
