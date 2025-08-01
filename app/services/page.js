import { auth } from "@/auth";

async function page() {
  const session = await auth();
  //console.log(session);
  console.log(
    "pro",
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET
  );
  return <div>Our Services</div>;
}

export default page;
