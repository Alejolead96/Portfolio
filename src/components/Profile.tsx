import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

const Profile = () => {
  const contactInfo = [
    {
      icon: <IconMail size={25} />,
      label: "EMAIL",
      text: "alejandroagudelo@gmail.com",
    },
    {
      icon: <IconPhone size={25} />,
      label: "TELEFONO",
      text: "(+57) 3206210155",
    },
    {
      icon: <IconMapPin size={25} />,
      label: "DIRECCIÓN",
      text: "Bogota, Colombia",
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-6 py-6 border-b dark:border-b-primary-border-dark">
      {contactInfo.map((item) => (
        <div className="flex gap-3">
          <p className="flex items-center justify-center text-blue-400 dark:bg-third-dark p-2 rounded-md">
            {item.icon}
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[12px]">{item.label}</p>
            <p className="text-sm">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
