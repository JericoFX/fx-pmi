import { IconCar, IconShield, IconSos, IconUser } from '@tabler/icons-solidjs';
import { Component } from 'solid-js';
import { ImageRoot, ImageFallback, Image } from '@/components/ui/image';
import { useNavigate } from '@solidjs/router';
const Navbar: Component<{}> = () => {
  const navigate = useNavigate();

  return (
    <div
      id='navbar'
      class='w-[4vw] h-full absolute left-0 rounded bg-foreground ring-offset-1 ring-1 '
    >
      <div class='h-full flex flex-col justify-evenly items-center'>
        <ImageRoot>
          <Image src='' />
          <ImageFallback>JFX</ImageFallback>
        </ImageRoot>
        <IconShield
          onClick={() => navigate('/')}
          class='hover:cursor-pointer'
          color='white'
        ></IconShield>
        <IconCar
          onClick={() => navigate('/vehicles')}
          class='hover:cursor-pointer'
          color='white'
        ></IconCar>
        <IconSos color='white'></IconSos>
        <IconUser color='white'></IconUser>
      </div>
    </div>
  );
};

export default Navbar;
