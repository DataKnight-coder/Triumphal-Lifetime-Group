import Footer from "./Footer";
import { getGlobalSettings } from "@/lib/content/settings";

export default async function ServerFooter() {
  const settings = await getGlobalSettings();

  return <Footer initialSettings={settings} />;
}
