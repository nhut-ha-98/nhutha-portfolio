import { HeroView } from "@/components/ui/HeroView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { data } from "@/data/data";

export function HeroSection() {
  const aboutItems = data.cv.sections["About Me"];

  return (
    <SectionContainer id="hero" spacing="hero">
      <HeroView
        name={data.cv.name}
        headline={data.cv.headline}
        location={data.cv.location}
        email={data.cv.email}
        phone={data.cv.phone}
        photo={data.cv.photo}
        social={data.cv.social_networks}
        about={aboutItems}
      />
    </SectionContainer>
  );
}
