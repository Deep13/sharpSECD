import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import Screen from './screen.png'
import Screen1 from './screen1.jpg'
import Screen3 from './screen3.jpg'


// class Threedanm extends Component {
    
//   render() {
//     const params = {
//         effect: 'coverflow',
//         grabCursor: true,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         coverflowEffect: {
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true
//         },
//         pagination: {
//           el: '.swiper-pagination'
//         }
//       }
//       return (
        
//       <div  >
//           <Swiper {...params}>
//               <div>
//               <img style={{marginTop:'30px',  height:"300px", width:"450px"}} src={Screen3} />
//               </div>
              
//       {/* <div style={{ backgroundImage: `url(${Screen})`}} /> */}
//        {/* <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
//         <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
//         <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
//         <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} /> */}
//       </Swiper>
//       </div>
//       );
//   }
// }

// export default Threedanm;







  const Threedanm = () => {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }
    return (
      <Swiper {...params}>
           {/* <div style={{marginTop:'30px',  height:"300px", width:"450px"}} src={Screen3}/> */}
              <img style={{marginTop:'30px',  height:"300px", width:"450px"}} src={Screen3} /> 
              {/* <img style={{marginTop:'30px',  height:"300px", width:"450px"}} src={Screen3} /> */}
             {/* </div> */}
             {/* <div>
              <img style={{marginTop:'30px',  height:"300px", width:"450px"}} src={Screen3} />
             </div> */}
        {/* <div style={{ backgroundImage:'url(https://www.ionos.co.uk/digitalguide/fileadmin/DigitalGuide/Teaser/url-hijacking-t.jpg)' }} /> */}
        {/* <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} /> */}
      </Swiper>
    )
  };
  export default Threedanm;