import { createCmsPage } from "@/components/cms/create-cms-page";
const route = createCmsPage("accessibility", "/accessibility");
export const generateMetadata = route.generateMetadata;
export default route.Page;
