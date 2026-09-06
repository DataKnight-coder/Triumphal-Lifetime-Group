import { createCmsPage } from "@/components/cms/create-cms-page";
const route = createCmsPage("disclaimer", "/disclaimer");
export const generateMetadata = route.generateMetadata;
export default route.Page;
