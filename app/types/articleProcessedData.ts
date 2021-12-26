import { Article } from "./articleData";
import { ArticleStats } from "./articleStats";
export interface ArticleProcessedData {
  stats: ArticleStats;
  monthWiseGraphData: GraphPoint[];
  monthHighArticles: string;
  filteredArticles: Article[];
}

export interface GraphPoint {
  month: string;
  articles: number;
}
