import Footer from "./Footer";
import { getGlobalSettings } from "@/lib/wordpress/client";

export default async function ServerFooter() {
  const settings = await getGlobalSettings();

  return <Footer initialSettings={settings} />;
}
