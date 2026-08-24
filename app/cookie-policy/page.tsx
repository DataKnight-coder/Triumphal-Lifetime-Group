import { redirect } from "next/navigation";

// Redirect the duplicate /cookie-policy route to the canonical /cookies page
export default function CookiePolicyRedirect() {
  redirect("/cookies");
}
