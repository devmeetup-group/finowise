import Heading2 from '../reusables/Heading2';
import Heading2Description from '../reusables/Heading2Description';
import Heading3 from '../reusables/Heading3';
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
    <div className="">
      <div className="mb-6 flex flex-col space-y-2 lg:mb-12 lg:space-y-4">
        <Heading2 className="text-center">Why bank with Finowise?</Heading2>
        <Heading2Description text="Services that makes us stand out" />
      </div>
      <div className="flex flex-col justify-center space-y-6 md:mx-auto md:max-w-[700px] md:flex-row md:flex-wrap md:space-y-0 md:pt-0 lg:max-w-none lg:flex-row lg:flex-nowrap lg:space-x-6 lg:space-y-0">
        {data.map((data) => (
          <div
            className="mx-auto flex w-full max-w-[292px] flex-col space-y-4 lg:mx-0 lg:max-w-[400px]"
            key={data.title}
          >
            {/* ---------- TOP BAR ---------- */}
            <div
              className={`h-2.5 w-full rounded-full md:mt-8 lg:mt-0 ${data.bGColor}`}
            ></div>
            {/* ---------- BOX ---------- */}
            <div
              className={`flex aspect-[1.123/1] w-full flex-col justify-center space-y-3 rounded-3xl p-6 ${data.bGColor}`}
            >
              <Heading3 variant="small"> {data.title}</Heading3>
              {/* ---------- BOTTOM BAR ---------- */}
              <p className="font-Urbanist text-xs leading-4 text-white lg:text-xl">
                {data.content}
              </p>
            </div>
            <div className={`h-2.5 w-full rounded-full ${data.bGColor}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBankWithFinowise;
