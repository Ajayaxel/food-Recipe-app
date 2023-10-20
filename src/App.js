import Categories from './component/Categories';
import Delivery from './component/Delivery';
import Features from './component/Features';
import Footer from './component/Footer';
import Meals from './component/Meals';
import Newsletter from './component/Newsletter';
import TopNav from './component/TopNav'
import Toppicks from './component/Toppicks';

function App() {
  return (
    <div>
   <TopNav />
  <Features />
  <Delivery />
  <Toppicks />
  <Meals />
  <Categories />
  <Newsletter />
  <Footer/>
   </div>
  
  );
}

export default App;
