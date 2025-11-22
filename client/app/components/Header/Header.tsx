import "./Header.scss";

import { useState, useEffect } from "react";

interface Article {
  id: number;
  documentId: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ArticleResponse {
  data: Article[];
}

interface LoaderData {
  articlesData: ArticleResponse;
}


const Header = () => {
  const [data, setData] = useState<LoaderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
      const path = "/api/header-menus";
      const url = new URL(path, BASE_URL);

      const response = await fetch(url.href);
      const articlesData = await response.json();
      setData({ articlesData });
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <ul>
      {data.articlesData.data.map((item) => (
        <li key={item.id}>{item.content}</li>
      ))}
    </ul>
  );
};

export default Header;