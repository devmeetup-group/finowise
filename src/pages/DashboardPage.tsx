import { Hero, MainFeatures, Setup } from '@/components/dashboard-components';

function DashboardPage() {
  return (
    <div className=" px-4 py-6 md:px-12 xl:px-[7.5rem] ">
      <Hero />
      <MainFeatures />
      <Setup />
    </div>
  );
}
export default DashboardPage;
