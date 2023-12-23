import { Charts } from "@/components/screens/charts/Charts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charts",
  description: "",
};

export default function Page() {
  return <Charts />;
}
