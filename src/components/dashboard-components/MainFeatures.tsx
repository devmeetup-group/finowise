import { cn } from '@/lib/utils';
import { H2, LayoutGrid2 } from '../reusables';
import Card from './Card';
import home from '../../assets/icons/home.png';
import wallet from '../../assets/icons/credit-card.png';
import settings from '../../assets/icons/setting-2.png';
import transaction from '../../assets/icons/refresh.png';
import logout from '../../assets/icons/power-off.png';
import notification from '../../assets/icons/notification.png';

const cardDetails = [
  {
    title: 'dashboard',
    img: home,
    bgColor: 'bg-fino-green-100',
  },
  {
    title: 'wallet',
    img: wallet,
    bgColor: 'bg-fino-purple',
  },
  {
    title: 'settings',
    img: settings,
    bgColor: 'bg-fino-yellow',
  },
  {
    title: 'transaction',
    img: transaction,
    bgColor: 'bg-fino-blue-100',
  },
  {
    title: 'notification',
    img: notification,
    bgColor: 'bg-fino-blue-70',
  },
  {
    title: 'log out',
    img: logout,
    bgColor: 'bg-fino-orange',
  },
];

function MainFeatures() {
  return (
    <div className="py-14">
      <LayoutGrid2>
        <div className="flex items-center">
          <section>
            <H2 className="mb-12 ">Major features on your dashboard</H2>
            <p className=" font-Urbanist text-base md:text-2xl">
              <span className=" text-black  ">
                Our precisely-tailored features are designed to optimize user
                experience with Finowise, enhance smooth transaction and
                tracking and ensure utmost productivity.
              </span>
              <br />
              <span className="mt-6 block font-semibold text-fino-green-90">
                Hover each features on the right for more details
              </span>
            </p>
          </section>
        </div>

        <div className=" b space-y-6 rounded-2xl border-fino-green-100  py-6 md:border-4 md:border-dashed">
          {cardDetails.map((detail) => {
            return (
              <Card
                className={cn(
                  'm-auto flex items-center gap-4 px-4 md:py-12 py-14',
                  detail.bgColor,
                )}
                key={detail.title}
              >
                <img src={detail.img} alt="home page icon" />
                <p className="text-white capitalize">{detail.title}</p>
              </Card>
            );
          })}
        </div>
      </LayoutGrid2>
    </div>
  );
}

export default MainFeatures;
