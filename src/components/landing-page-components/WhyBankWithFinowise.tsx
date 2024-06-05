import { LayoutGrid2 } from '../reusables';
import Heading2 from '../reusables/text/Heading2';
import Heading2Description from '../reusables/text/Heading2Description';
import Heading3 from '../reusables/text/Heading3';
const data = [
  {
    title: 'Simplified Budgeting',
    content:
      'Empower users with intuitive tools for budgeting and financial tracking.',
    bGColor: 'bg-fino-orange',
  },
  {
    title: 'One-Click Insights',
    content:
      'Instant insights for informed financial decisions with one-click convenience.',
    bGColor: 'bg-fino-blue-70',
  },
  {
    title: 'Secure Finances',
    content:
      'Advanced security ensures users financial data protection and peace of mind.',
    bGColor: 'bg-fino-purple',
  },
];

const WhyBankWithFinowise = () => {
  return (
    <section className="py-14">
      <div className="mb-6 flex flex-col space-y-2 lg:mb-12 lg:space-y-4">
        <Heading2 className="text-center">Why bank with Finowise?</Heading2>
        <Heading2Description>
          Services that makes us stand out
        </Heading2Description>
      </div>
      <LayoutGrid2 className="gap-6 lg:grid-cols-3">
        {data.map((data) => (
          <div
            className="mx-auto w-full max-w-[292px] space-y-4 lg:mx-0 lg:max-w-[400px]"
            key={data.title}
          >
            {/* ---------- TOP BAR ---------- */}
            <div className={`h-2.5 w-full rounded-full ${data.bGColor}`}></div>
            {/* ---------- BOX ---------- */}
            <div
              className={`flex aspect-[1.123/1] w-full flex-col space-y-3 rounded-3xl p-6 pt-[25%] ${data.bGColor}`}
            >
              <Heading3 variant="small"> {data.title}</Heading3>
              {/* ---------- BOTTOM BAR ---------- */}
              <p className="font-Urbanist text-base leading-4 text-white md:text-xl">
                {data.content}
              </p>
            </div>
            <div className={`h-2.5 w-full rounded-full ${data.bGColor}`}></div>
          </div>
        ))}
      </LayoutGrid2>
    </section>
  );
};

export default WhyBankWithFinowise;
