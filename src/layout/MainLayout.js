import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';

const MainLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const firstSlashIndex = pathname.indexOf('/');
  const secondSlashIndex = pathname.indexOf('/', 1);
  const extractedPath = firstSlashIndex !== -1 && secondSlashIndex !== -1 ? pathname.substring(firstSlashIndex + 1, secondSlashIndex) : pathname.substring(firstSlashIndex + 1);
  const [title,setTitle] = useState('');
  // const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   function handleScroll() {
  //     setScrollTop(window.pageYOffset);
  //     console.log('scrollTop : ',scrollTop)
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(()=>{
    switch (extractedPath) {
      case 'project':
        setTitle('project | 디앤디모바일');
        break;
      case 'about':
        setTitle('about | 디앤디모바일');
        break;
      case 'recruit':
        setTitle('recruit | 디앤디모바일');
        break;
      case 'contact':
        setTitle('contact | 디앤디모바일');
        break;
      default:
        setTitle('디앤디모바일');
    }
  },[extractedPath])
  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;