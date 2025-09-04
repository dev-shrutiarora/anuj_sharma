import HeroSection from '@/components/section/heroSection';
import AwardsSetion from '@/components/section/awardsSetion';
import Journal from '@/components/section/Journal ';
import AcademicRoles from '@/components/section/academic-roles';
import PhdSection from '@/components/section/PhdSection';

import BookSection from '@/components/section/bookSection';
import HomePage from '@/components/section/news';

export default function ProfessorPage() {
  return (
    <main className="container mx-auto py-8 px-6 md:px-12">
      <HeroSection />
      <HomePage />
      <AwardsSetion />
      <Journal />
      <PhdSection />
      <AcademicRoles />
      <BookSection />
    </main>
  );
}
