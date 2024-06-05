import creditCard from '../../assets/images/secure_financial_management/creditcard.svg';
import barChart from '../../assets/images/secure_financial_management/barchat.svg';
import fileFolder from '../../assets/images/secure_financial_management/filefolder.svg';
import fingerPrint from '../../assets/images/secure_financial_management/fingerprint.svg';
import secureLock from '../../assets/images/secure_financial_management/securelock.svg';

const SecureFinancialMgtImage = () => {
  return (
    <div className="mx-auto w-full max-w-[350px] 2xl:max-w-[408px]">
      <div className="grid aspect-square w-full rotate-12 rounded-full border border-dashed">
        <div className="absolute top-0 aspect-square w-[26.32%] rounded-full lg:w-[28.83%]">
          <img src={barChart} alt="bar chart" />
        </div>
        <div className="absolute right-0 aspect-square w-[26.32%] rounded-full lg:w-[28.83%]">
          <img src={creditCard} alt="credit cart" />
        </div>
        <div className="absolute bottom-0 aspect-square w-[26.32%] rounded-full lg:w-[28.83%]">
          <img src={fingerPrint} alt="finger print" />
        </div>
        <div className="w- absolute bottom-0 right-0 aspect-square w-[26.32%] rounded-full lg:w-[28.83%]">
          <img src={fileFolder} alt="file folder" />
        </div>

        <div className="absolute left-1/2 top-1/2 aspect-square  w-[58.60%] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-full bg-fino-green-80/10 lg:w-full lg:bg-transparent">
          <img
            src={secureLock}
            alt="secure lock"
            className="absolute left-1/2 top-1/2 aspect-square  w-[56.29%] -translate-x-1/2 -translate-y-1/2 lg:w-[32.93%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SecureFinancialMgtImage;
