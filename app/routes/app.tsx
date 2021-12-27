import { TwitterIcon, TwitterShareButton } from "next-share";
import { LoaderFunction, redirect, useLoaderData, useTransition } from "remix";
import { BarSeries, ChartProvider, Tooltip, XAxis, YAxis } from "rough-charts";
import { Article } from "~/types/articleData";
import { ArticleProcessedData } from "~/types/articleProcessedData";
import { cookie } from "~/utils/cookie.server";
import {
  articlesMapByMonth,
  findMonthWithHeighestArticles,
  processArticlesStats,
} from "~/utils/processArticles";

export const loader: LoaderFunction = async ({ request, params }) => {
  const value = request.headers.get("Cookie");

  const cookieHeader = await cookie.parse(value);

  console.log(`Cookie ${cookieHeader}`);

  if (cookieHeader === null) {
    // todo: redirect and show error to user

    return redirect("/", {});
  } else {
    const { apiKey } = cookieHeader;

    const response = await fetch(
      "https://dev.to/api/articles/me/published?per_page=1000",
      {
        headers: {
          "api-key": apiKey,
        },
      }
    );

    const data = await response.json();

    const articles: Article[] = data;

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
  }
};

export default function AppRoute() {
  const articleProcessedData = useLoaderData<ArticleProcessedData>();
  const transition = useTransition();

  if (transition.state === "loading") {
    return (
      <div className="text-center py-4 underline decoration-cyan-300 text-2xl mb-4 font-semibold">
        Dev.to Wrapped 2021
        <div>Loading!</div>
      </div>
    );
  }

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
        <div className="text-xl underline decoration-sky-500 decoration-2">
          {`You have written more articles in the month of ${articleProcessedData.monthHighArticles}`}
        </div>
      </div>

      <h4 className="text-center py-4 underline decoration-cyan-300 text-xl mb-4">
        These are a few stats of your articles which you have written in 2021
      </h4>

      <div className="flex flex-row justify-between">
        <StatsContainer title={`Views`} value={`${stats.totalViews}`} />
        <StatsContainer title={`Comments`} value={`${stats.totalComments}`} />
        <StatsContainer title={`Reactions`} value={`${stats.totalReactions}`} />
        <StatsContainer title={`Articles`} value={`${stats.totalArticles}`} />
        <StatsContainer
          title={`Reading minutes`}
          value={`${stats.totalReadingTime} min`}
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

      <div className="my-2 flex flex-row-reverse">
        <div className="prose ml-4">Share it if you like it :D </div>
        <TwitterShareButton
          url={"https://devto-wrapped.netlify.app/"}
          title={
            "Generate a report of your articles in 2021 and share it with your friends"
          }
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
}
interface StatsContainerProps {
  title: string;
  value: string;
}
const StatsContainer: React.FC<StatsContainerProps> = ({ title, value }) => {
  return (
    <div className="border-solid rounded-lg bg-lime-200 shadow-lime-200/50 p-4 w-1/6 flex flex-col text-center">
      <div className="my-2">{title}</div>
      <div className="font-bold underline decoration-pink-500 decoration-2">
        {value}
      </div>
    </div>
  );
};
