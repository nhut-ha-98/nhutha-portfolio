import { PageHeaderView } from "@/components/ui/PageHeaderView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { pageNavigation } from "@/data/data";

export function PageHeader() {
  return (
    <SectionContainer spacing="default">
      <PageHeaderView
        title={pageNavigation.title}
        navItems={pageNavigation.items}
      />
    </SectionContainer>
  );
}
