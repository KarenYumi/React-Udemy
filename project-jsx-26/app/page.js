import fs from "node:fs/promises";
import UsePromiseDemo from "@/components/UsePromisesDemo";

export default async function Home() {
    const data = await fs.readFile("dummy-db.json", "utf-8");
    const users = JSON.parse(data);
  return (
    <main>
      <UsePromiseDemo users={users}/>
    </main>
  );
}
