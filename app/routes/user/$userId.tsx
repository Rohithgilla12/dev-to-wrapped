import { LoaderFunction, useLoaderData } from "remix";
import { BarSeries, ChartProvider, Tooltip, XAxis, YAxis } from "rough-charts";
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
      <h1 className="text-center py-4  underline decoration-cyan-300 text-2xl mb-4 font-semibold">
        Dev.to Wrapped 2021
      </h1>
      <div className="border-solid rounded-lg my-8 p-8 shadow-lg shadow-lime-100/50 bg-lime-100 flex flex-row justify-between">
        <div className="text-xl underline decoration-sky-500 decoration-2">
          {`You have written a total of ${stats.totalArticles} articles in 2021`}
        </div>
        <div className="text-xl underline decoration-pink-500 decoration-2">
          {`You have written more articles in the month of ${articleProcessedData.monthHighArticles}`}
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <StatsContainer title={`Total Views: ${stats.totalViews}`} />
        <StatsContainer title={`Total Comments: ${stats.totalComments}`} />
        <StatsContainer title={`Total Reactions: ${stats.totalReactions}`} />
        <StatsContainer title={`Total Articles: ${stats.totalArticles}`} />
        <StatsContainer
          title={`Total Reading time: ${stats.totalReadingTime} min`}
        />
      </div>

      <div className="my-2 flex flex-col">
        <div className="my-4">
          <ChartProvider
            data={articleProcessedData.monthWiseGraphData}
            height={300}
          >
            <XAxis dataKey="month" />
            <BarSeries dataKey="articles" />
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
interface StatsContainerProps {
  title: string;
}
const StatsContainer: React.FC<StatsContainerProps> = ({ title }) => {
  return (
    <div className="border-solid rounded-lg bg-lime-200 shadow-lime-200/50 p-8">
      {title}
    </div>
  );
};
