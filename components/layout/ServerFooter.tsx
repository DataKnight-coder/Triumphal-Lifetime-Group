import Footer from "./Footer";
import { getGlobalSettings, getLocations, getPageContent } from "@/lib/wordpress/client";

export default async function ServerFooter() {
  const [settings, footer, locations] = await Promise.all([getGlobalSettings(), getPageContent("site-footer"), getLocations()]);
  return <Footer settings={settings} footer={footer} locations={locations} />;
}
