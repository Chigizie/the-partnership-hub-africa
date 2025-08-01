import { auth } from "@/auth";

async function page() {
  const session = await auth();
  console.log(session);
  return <div>Home page</div>;
}

export default page;
