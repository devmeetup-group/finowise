import one from '../../assets/images/client_images/1.png';
import two from '../../assets/images/client_images/2.png';
import three from '../../assets/images/client_images/3.png';
import four from '../../assets/images/client_images/4.png';

const Clients = () => {
  const clients = [
    { img: one, translate: 'translate-x-[15px]' },
    { img: two, translate: 'translate-x-[55px]' },
    { img: three, translate: 'translate-x-[95px]' },
    { img: four, translate: 'translate-x-[125px]' },
  ];
  return (
    <div className="flex items-center space-x-6">
      <div className="justify-right flex h-16 w-[184px] -space-x-4">
        {clients.reverse().map((client, index) => (
          <div key={index} className={`absolute ${client.translate}`}>
            <img src={client.img} alt='client' className="w-16" />
          </div>
        ))}
      </div>
      <div className="-space-y-1/2 flex w-fit flex-col justify-center lg:-space-y-2">
        <p className="font-Urbanist text-sm font-bold lg:text-2xl">Over 1k+</p>
        <p className="font-Urbanist text-xs text-black/50 lg:text-lg">
          Active users
        </p>
      </div>
    </div>
  );
};

export default Clients;
