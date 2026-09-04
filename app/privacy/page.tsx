import { createCmsPage } from "@/components/cms/create-cms-page";
const route = createCmsPage("privacy", "/privacy");
export const generateMetadata = route.generateMetadata;
export default route.Page;
