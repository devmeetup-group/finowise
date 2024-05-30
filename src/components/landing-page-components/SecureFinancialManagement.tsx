import Heading2Description from '../reusables/Heading2Description';
import Heading2 from '../reusables/Heading2';
import Heading3 from '../reusables/Heading3';
import SecureFinancialMgtImage from './SecureFinancialMgtImage';
import { LayoutGrid2 } from '../reusables';

const SecureFinancialManagement = () => {
  return (
    <section className=" space-y-12 py-14">
      {/* --------HEADING-------- */}
      <div className="mb-6 space-y-2 lg:mb-8 lg:space-y-4 ">
        <Heading2 className="text-center">Secure Financial Management</Heading2>
        <Heading2Description>
          Keep your finances safe with Finowise
        </Heading2Description>
      </div>
      {/* --------CONTENT BOX-------- */}
      <LayoutGrid2 className="mx-auto w-full max-w-[358px] space-y-16 rounded-3xl bg-fino-green-100 px-8 py-12 md:max-w-[500px] lg:max-w-full lg:space-y-0 lg:py-16 lg:px-[60px]">
        {/* --------TEXT-------- */}
        <div className="justify-center space-y-6 lg:flex lg:max-w-[512px] lg:flex-col">
          <Heading3 variant="default">
            Safeguarding users financial data
          </Heading3>
          <p className="font-Urbanist text-base leading-4 text-white md:text-xl lg:leading-9 xl:pb-4 xl:text-2xl">
            The platform prioritises the safeguarding of users' financial
            information through encryption, multi-factor authentication, and
            secure servers.
          </p>
          <p className="font-Urbanist text-base leading-4 text-white md:text-xl lg:leading-9 xl:text-2xl">
            Users can confidently manage their finances, knowing their sensitive
            data is secure and shielded from unauthorized access.
          </p>
        </div>
        {/* --------IMAGE-------- */}
        <SecureFinancialMgtImage />
      </LayoutGrid2>
    </section>
  );
};

export default SecureFinancialManagement;
