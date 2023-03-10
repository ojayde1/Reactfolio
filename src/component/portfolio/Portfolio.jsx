import React, { useEffect, useState } from 'react';
import "./portfolio.scss"
import PortfolioList from '../portflioList/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

function Portfolio() {
  const [selected,setSelected] =useState("featured");
  const [data,setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
        setData(webPortfolio);
        break;
        case "mobile":
        setData(mobilePortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;
        case "content":
        setData(contentPortfolio);
        break;
    
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected])
  
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {/* <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li> */}
        {list.map((item)=>(
          <PortfolioList
          key={item.id}
          title={item.title}
          active={selected === item.id}
          id={item.id}
           setSelected={setSelected}/>
        ))}
      </ul>
      <div className="container">
      {data.map(d=>(
        <div className="item" key={d.id}>
          <img src= {d.img}
          alt="" />
          <h3>{d.title}</h3>
         </div>
      ))}
       </div> 
    </div>
    
  )
}

export default Portfolio
