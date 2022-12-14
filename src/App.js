import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Aboutus from './pages/about/Aboutus';
import Blogs from './pages/blog/Blogs';
import Contact from './pages/contact/Contact';
import Faqg from './pages/faq/Faqg';
import Feature from './pages/features/Feature';
import Home from './pages/home/Home';
import Priceing from './pages/pricing/Priceing';

function App() {
  const router = createBrowserRouter([
      {
        path:'/', element:<Main></Main>,children:[
        {
         path:'/', element:<Home></Home>
        },
        {
         path:'/about',element:<Aboutus></Aboutus>
        },
        {
         path:'/features',element:<Feature></Feature>
        },
        {
          path:'/pricing',element:<Priceing></Priceing>
         },
         {
          path:'/faq',element:<Faqg></Faqg>
         },
         {
          path:'/blog',element:<Blogs></Blogs>
         },
         {
          path:'/contact',element:<Contact></Contact>
         }
        ]
      }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>


      </RouterProvider>
    </div>
  );
}

export default App;
