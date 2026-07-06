import Layout from "./components/Layout";
import Header from "./components/Header";
import DashboardCards from "./components/DashboardCards";
import WordOfDay from "./components/WordOfDay";

export default function Home() {
  return (
    <Layout>
      <Header />

      <DashboardCards />

      <WordOfDay />
    </Layout>
  );
}