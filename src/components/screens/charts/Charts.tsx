import { Header } from "@/components/ui/header/Header";
import { MainSection } from "@/components/ui/main-section/MainSection";

interface ICharts {}

export function Charts({}: ICharts) {
  return (
    <div className="text-white h-[884px] -my-[230px] rounded-r-2xl overflow-hidden">
      <Header />
      <div className="p-10">
        <MainSection />
      </div>
    </div>
  );
}
