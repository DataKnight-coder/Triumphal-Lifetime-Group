import { createCmsPage } from "@/components/cms/create-cms-page";
const route = createCmsPage("partners", "/partners");
export const generateMetadata = route.generateMetadata;
export default route.Page;
