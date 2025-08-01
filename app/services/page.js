import { auth } from "@/auth";

async function page() {
  const session = await auth();
  console.log(session);
  return <div>Our Services</div>;
}

export default page;
