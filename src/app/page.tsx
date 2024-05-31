import { Feed } from "./components/Feed/Feed";
import { Sidebar } from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-row">
      <Sidebar />
      <Feed />
    </main>
  );
}
