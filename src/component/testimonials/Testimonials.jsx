import React from 'react';
import "./testimonials.scss"

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Dapo Gati",
      title: "Senior Developer",
      img:
        "assets/22.jpg",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Joke Tomi",
      title: "Co-Founder of DELKA",
      img:
        "assets/44.jpg",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Felix Okon",
      title: "CEO of ALBI",
      img:
        "assets/88.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
         {data.map(data=>(
          <div className={data.featured ? "card featured" : "card"}>
          <div  key={data.id} className="top">
             <img src="assets/right-arrow.png" className='left' alt="" />
             <img src={data.img} alt="" className='user'/>
             <img src={data.icon} alt="" className='right'/>
          </div>
          <div className="center">
           {data.desc}
          </div>
          <div className="bottom">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}

export default Testimonials