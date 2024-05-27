import Heading2Description from '../reusables/Heading2Description';
import Heading2 from '../reusables/Heading2';
import Heading3 from '../reusables/Heading3';
import SecureFinancialMgtImage from './SecureFinancialMgtImage';

const SecureFinancialManagement = () => {
  return (
    <section className="flex flex-col space-y-8 px-6 md:px-12 lg:px-[120px]">
      {/* --------HEADING-------- */}
      <div className="mb-6 flex flex-col space-y-2 lg:mb-8 lg:space-y-4 ">
        <Heading2
          heading="Secure Financial Management"
          className="text-center"
        />
        <Heading2Description
          text="Keep your finances safe with Finowise"
          className=""
        />
      </div>
      {/* --------CONTENT BOX-------- */}
      <div className="mx-auto flex w-full max-w-[358px] flex-col space-y-16 rounded-3xl bg-fino-green-100 px-8 py-10 md:max-w-[500px] lg:max-w-full lg:flex-row lg:items-center lg:justify-between lg:px-[60px]">
        {/* --------TEXT-------- */}
        <div className="flex flex-col space-y-6 lg:w-1/2 lg:max-w-[512px] lg:py-6">
          <Heading3 heading="Safeguarding users financial data" className="" />
          <p className="font-Urbanist text-xs leading-4 text-white lg:text-xl lg:leading-9">
            The platform prioritises the safeguarding of users' financial
            information through encryption, multi-factor authentication, and
            secure servers.
          </p>
          <p className="font-Urbanist text-xs leading-4 text-white lg:text-xl lg:leading-9">
            Users can confidently manage their finances, knowing their sensitive
            data is secure and shielded from unauthorized access.
          </p>
        </div>
        {/* --------IMAGE-------- */}
        <SecureFinancialMgtImage />
      </div>
    </section>
  );
};

export default SecureFinancialManagement;
