import HeroSection from '@/components/section/heroSection';
import AwardsSetion from '@/components/section/awardsSetion';
import Journal from '@/components/section/Journal ';
import AcademicRoles from '@/components/section/academic-roles';
import TeachingSection from '@/components/section/teachingSection';
import PhdSection from '@/components/section/PhdSection';
import LeadershipSection from '@/components/section/LeadershipSection';
import SpiritualitySection from '@/components/section/SpiritualitySection';
import BookSection from '@/components/section/bookSection';
import MajorContributions from '@/components/section/MajorContributions';



export default function ProfessorPage() {
  return (
    <main className="container mx-auto py-8 px-6 md:px-12">
      <HeroSection />

      <AwardsSetion />

      <Journal />

      <PhdSection />

      <AcademicRoles />

      <BookSection />

      <TeachingSection />

      <MajorContributions />

      <LeadershipSection />

      <SpiritualitySection />
    </main>
  );
}
