import './App.css';
import Header from './Header';
import Slider from './Slider';
import Tracker from './Tracker';
import ProductList from './ProductList';
import SliderImage1 from './svg_file/SliderImage1';
import SliderImage2 from './svg_file/SliderImage2';
import BlogSlider from './BlogSlider';
import SliderButton from './SliderButton';
import NavBar from './NavBar';

function App() {
  const images = [
    <SliderImage1 />,
    <SliderImage2 />
  ];

  const products = [
    {
      image: '/Rectangle 27656.png',
      name: 'Anti-ageing Combo',
      rating: 4.7,
      currentPrice: 999,
      originalPrice: 1598,
      wishlist: "true",
      discount: 40
    },
    {
      image: '/Rectangle 27656.png',
      name: 'Anti-ageing Combo',
      rating: 3,
      currentPrice: 999,
      originalPrice: 1598,
      wishlist: "false",
      discount: 40
    }
  ];

  const hair_care = [
    {
      image: '/Rectangle 27656 (1).png',
      name: 'Anti-ageing Combo',
      rating: 4.7,
      currentPrice: 999,
      originalPrice: 1598,
      wishlist: "false",
      discount: 40
    },
    {
      image: '/Rectangle 27656 (2).png',
      name: 'Anti-ageing Combo',
      rating: 3,
      currentPrice: 999,
      originalPrice: 1598,
      wishlist: "false",
      discount: 40
    }
  ];
  const cards = [
    {
      img: '/HairCare1.png',
      title: '',
      author: ''
    },
    {
      img: '/HairCare2.png',
      title: '',
      author: ''
    },
    {
        img: '/HairCare3.png',
        title: '',
        author: ''
      },
    {
        img: '/HairCare4.png',
        title: '',
        author: ''
    }
    // Add more cards as needed
  ];

  const skin_cards = [
    {
      img: '/SkinTalk1.png',
      title: '',
      author: ''
    },
    {
      img: '/SkinTalk2.png',
      title: '',
      author: ''
    },
    {
        img: '/SkinTalk3.png',
        title: '',
        author: ''
      },
    {
        img: '/SkinTalk5.png',
        title: '',
        author: ''
    }
    // Add more cards as needed
  ];

  const instagramSVG = (<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_455)">
    <path d="M28.3281 0H8.67188C3.88253 0 0 3.88253 0 8.67188V28.3281C0 33.1175 3.88253 37 8.67188 37H28.3281C33.1175 37 37 33.1175 37 28.3281V8.67188C37 3.88253 33.1175 0 28.3281 0Z" fill="url(#paint0_radial_0_455)"/>
    <path d="M28.3281 0H8.67188C3.88253 0 0 3.88253 0 8.67188V28.3281C0 33.1175 3.88253 37 8.67188 37H28.3281C33.1175 37 37 33.1175 37 28.3281V8.67188C37 3.88253 33.1175 0 28.3281 0Z" fill="url(#paint1_radial_0_455)"/>
    <path d="M18.5013 4.04688C14.5761 4.04688 14.0834 4.06407 12.5418 4.13417C11.0032 4.2047 9.95286 4.44824 9.03393 4.80566C8.0832 5.1748 7.27686 5.66866 6.47355 6.47225C5.66953 7.2757 5.17566 8.08204 4.80538 9.03234C4.44694 9.95155 4.20311 11.0023 4.13388 12.5403C4.06494 14.082 4.04688 14.5748 4.04688 18.5001C4.04688 22.4255 4.06422 22.9166 4.13417 24.4582C4.20499 25.9968 4.44853 27.0471 4.80566 27.9661C5.17509 28.9168 5.66895 29.7231 6.47254 30.5264C7.2757 31.3305 8.08204 31.8255 9.03205 32.1946C9.9517 32.5521 11.0022 32.7956 12.5405 32.8661C14.0823 32.9362 14.5745 32.9534 18.4996 32.9534C22.4252 32.9534 22.9163 32.9362 24.4579 32.8661C25.9965 32.7956 27.048 32.5521 27.9677 32.1946C28.918 31.8255 29.7231 31.3305 30.5262 30.5264C31.3302 29.7231 31.8239 28.9168 32.1943 27.9665C32.5496 27.0471 32.7936 25.9965 32.8658 24.4584C32.9351 22.9169 32.9531 22.4255 32.9531 18.5001C32.9531 14.5748 32.9351 14.0823 32.8658 12.5405C32.7936 11.0019 32.5496 9.9517 32.1943 9.03277C31.8239 8.08204 31.3302 7.2757 30.5262 6.47225C29.7223 5.66837 28.9182 5.17451 27.9668 4.80581C27.0454 4.44824 25.9945 4.20456 24.4558 4.13417C22.9141 4.06407 22.4233 4.04688 18.4968 4.04688H18.5013ZM17.2047 6.65147C17.5896 6.65089 18.019 6.65147 18.5013 6.65147C22.3604 6.65147 22.8177 6.66535 24.3417 6.73458C25.7508 6.79904 26.5157 7.03448 27.0252 7.23234C27.6997 7.49423 28.1806 7.80743 28.6861 8.31344C29.192 8.8193 29.505 9.30102 29.7677 9.97555C29.9655 10.4843 30.2013 11.2492 30.2654 12.6583C30.3347 14.182 30.3497 14.6396 30.3497 18.4968C30.3497 22.3541 30.3347 22.8118 30.2654 24.3353C30.201 25.7445 29.9655 26.5093 29.7677 27.0182C29.5058 27.6928 29.192 28.173 28.6861 28.6786C28.1803 29.1845 27.7 29.4975 27.0252 29.7596C26.5163 29.9583 25.7508 30.1932 24.3417 30.2576C22.818 30.3268 22.3604 30.3419 18.5013 30.3419C14.642 30.3419 14.1846 30.3268 12.6611 30.2576C11.2519 30.1926 10.487 29.9571 9.97714 29.7593C9.30275 29.4972 8.82089 29.1842 8.31503 28.6783C7.80917 28.1725 7.49611 27.6919 7.2335 27.0171C7.03564 26.5082 6.79991 25.7433 6.73573 24.3341C6.6665 22.8105 6.65263 22.3529 6.65263 18.4932C6.65263 14.6336 6.6665 14.1784 6.73573 12.6547C6.8002 11.2455 7.03564 10.4807 7.2335 9.97121C7.49554 9.29668 7.80917 8.81496 8.31517 8.3091C8.82103 7.80324 9.30275 7.49004 9.97728 7.22757C10.4868 7.02884 11.2519 6.79398 12.6611 6.72923C13.9944 6.66896 14.5111 6.65089 17.2047 6.64786V6.65147ZM26.2164 9.05127C25.2589 9.05127 24.482 9.8274 24.482 10.7851C24.482 11.7426 25.2589 12.5194 26.2164 12.5194C27.1739 12.5194 27.9508 11.7426 27.9508 10.7851C27.9508 9.82755 27.1739 9.05069 26.2164 9.05069V9.05127ZM18.5013 11.0777C14.4024 11.0777 11.079 14.4011 11.079 18.5001C11.079 22.5992 14.4024 25.921 18.5013 25.921C22.6004 25.921 25.9225 22.5992 25.9225 18.5001C25.9225 14.4012 22.6001 11.0777 18.501 11.0777H18.5013ZM18.5013 13.6823C21.162 13.6823 23.3191 15.8392 23.3191 18.5001C23.3191 21.1608 21.162 23.3179 18.5013 23.3179C15.8405 23.3179 13.6836 21.1608 13.6836 18.5001C13.6836 15.8392 15.8405 13.6823 18.5013 13.6823Z" fill="white"/>
    </g>
    <defs>
    <radialGradient id="paint0_radial_0_455" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.82812 39.8497) rotate(-90) scale(36.6697 34.1058)">
    <stop stop-color="#FFDD55"/>
    <stop offset="0.1" stop-color="#FFDD55"/>
    <stop offset="0.5" stop-color="#FF543E"/>
    <stop offset="1" stop-color="#C837AB"/>
    </radialGradient>
    <radialGradient id="paint1_radial_0_455" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.19764 2.6653) rotate(78.681) scale(16.3916 67.5666)">
    <stop stop-color="#3771C8"/>
    <stop offset="0.128" stop-color="#3771C8"/>
    <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="clip0_0_455">
    <rect width="37" height="37" fill="white"/>
    </clipPath>
    </defs>
    </svg>);
  

  return (
    <div className="App">
      <Header />
      <div className = "message">Welcome, <strong>June!</strong></div>
      <Tracker />
      <SliderButton title={"View all Trackers"}/>
      <Slider images={images} />
      <ProductList products={products} category={"BestSellers"} />
      <ProductList products={hair_care} category={"Hair Care"} />
      <BlogSlider cards={cards} category={"Understanding Hair"} />
      <ProductList products={products} category={"Skin Care"} />
      <BlogSlider cards={skin_cards} category={"Skin - Talk"} />
      <SliderButton instagramSVG={instagramSVG} title={"Join our 10K family on Instagram"}/>
      <NavBar/>
    </div>
  );
}

export default App;
