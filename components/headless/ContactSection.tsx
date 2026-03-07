import { ContactView } from "@/components/ui/ContactView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { data } from "@/data/data";

export function ContactSection() {
  return (
    <SectionContainer id="contact" spacing="default">
      <SectionShell title="Contact">
        <ContactView
          email={data.cv.email}
          phone={data.cv.phone}
          social={data.cv.social_networks}
        />
      </SectionShell>
    </SectionContainer>
  );
}
