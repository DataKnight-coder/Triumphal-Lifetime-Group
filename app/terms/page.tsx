import { createCmsPage } from "@/components/cms/create-cms-page";
const route = createCmsPage("terms", "/terms");
export const generateMetadata = route.generateMetadata;
export default route.Page;
