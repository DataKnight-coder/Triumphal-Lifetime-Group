import { createCmsPage } from "@/components/cms/create-cms-page";
const route = createCmsPage("cookies", "/cookies");
export const generateMetadata = route.generateMetadata;
export default route.Page;
