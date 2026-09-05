import { createCmsPage } from "@/components/cms/create-cms-page";
const route = createCmsPage("refund-policy", "/refund-policy");
export const generateMetadata = route.generateMetadata;
export default route.Page;
