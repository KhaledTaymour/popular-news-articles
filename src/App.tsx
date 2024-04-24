import NewsList from "src/components/NewsList/NewsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const newsIntervalOptions = {
  day: "day",
  week: "week",
  month: "month",
} as const;

function App() {
  return (
    <section className="app flex flex-col gap-0 items-center bg-white">
      <div className="flex gap-4 items-center text-3xl font-semibold p-4 w-[100%] tracking-tighter ps-8 bg-amber-300 text-neutral-900 border-4 border-solid border-b-neutral-600">
        <img src="./public/favicon.svg" className="w-8 h-8" />
        Popular News Articles From NY Times
      </div>

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
