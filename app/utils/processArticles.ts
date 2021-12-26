import { Article } from "~/types/articleData";
import { ArticleStats } from "~/types/articleStats";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const processArticlesStats = (filteredArticles: Article[]) => {
  // filter article that are in 2021
  // this is a bit hacky, since the dates are in string format we can
  // just check if the year is 2021
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
    totalArticles: filteredArticles.length,
  };

  return stats;
};

// This function we use to get the articles per month
// hacky way to do is to check the month and add it to the array
// initially we have an empty array of 12 0's
export const articlesMapByMonth = (filteredArticles: Article[]) => {
  const articlesPerMonth = Array(12).fill(0);
  filteredArticles.forEach((article) => {
    const month = article.published_at.slice(5, 7);
    articlesPerMonth[parseInt(month) - 1] += 1;
  });

  // map of months to their respective number
  // the articlesPerMonth array is indexed by the month
  // now we need to create array of json maps [{month: 1, value: 2}, {month: 2, value: 3}]

  const graphData = articlesPerMonth.map((articles, index) => {
    return {
      month: months[index],
      articles,
    };
  });

  return graphData;
};

export const findMonthWithHeighestArticles = (filteredArticles: Article[]) => {
  const articlesPerMonth = Array(12).fill(0);

  filteredArticles.forEach((article) => {
    const month = article.published_at.slice(5, 7);
    articlesPerMonth[parseInt(month) - 1] += 1;
  });

  const max = Math.max(...articlesPerMonth);
  const index = articlesPerMonth.indexOf(max);
  return months[index];
};
