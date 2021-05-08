import React, { useEffect } from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
// import axios from 'axios';
import { WelcomePage, About } from '@/components/frontend';

// const request = async (): any => {
//   try {
//     const urlX = 'http://207.154.226.106/blog/get';
//     const response = await axios(urlX).then((res) => {
//       console.log('test', res.data);
//     });

//     return response;
//   } catch (error) {
//     console.log('test', error);
//   }
// };

const Home: React.FC<PageProps> = (): JSX.Element => {
  useEffect(() => {
    // request();
    console.log('test', 'radi');
  }, []);

  return (
    <>
      <WelcomePage />
      <About />
    </>
  );
};

export default Home;
