import NewsList from "src/components/NewsList/NewsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "src/components/Header/Header";

const newsIntervalOptions = {
  day: "day",
  week: "week",
  month: "month",
} as const;

function App() {
  return (
    <section className="app flex flex-col gap-0 items-center bg-white">
      <Header />

      <Tabs defaultValue={newsIntervalOptions.day} className="w-[700px]">
        <TabsList className="grid w-full grid-cols-3 bg-white sticky top-0">
          <TabsTrigger value={newsIntervalOptions.day}>Last Day</TabsTrigger>
          <TabsTrigger value={newsIntervalOptions.week}>Last Week</TabsTrigger>
          <TabsTrigger value={newsIntervalOptions.month}>
            Last Month
          </TabsTrigger>
        </TabsList>
        <TabsContent value={newsIntervalOptions.day}>
          <NewsList period={1} />
        </TabsContent>
        <TabsContent value={newsIntervalOptions.week}>
          <NewsList period={7} />
        </TabsContent>
        <TabsContent value={newsIntervalOptions.month}>
          <NewsList period={30} />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default App;
