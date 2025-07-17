import Card from "../Card.jsx";

import store from "../../assets/store.jpg";


const Store = () => {
  return (
    <Card title="Hardware Specialist & Small Business Owner" image={store}>
      <ul className="techStack">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li>Engineered and fabricated over 100 custom-tuned competitive gaming controllers, achieving an average of 5/5 rating across 76 customer reviews</li>
        <li>Performed intricate hardware modifications, including desoldering components and soldering onto custom-designed PCBs to enable advanced functionality like stick-profile tuning and button remapping</li>
        <li>Delivered exceptional customer service and technical support, expertly guiding clients through complex tuning processes to tailor device performance to their unique preferences</li>
        <li>Optimized device hardware through precision shell modifications, enabling users to achieve specific input values critical for high-level competitive play</li>
        <li>Managed all aspects of the business, from sourcing components and manufacturing to client communication and quality assurance, consistently praised for product quality and responsiveness</li>
      </ul>
      <div className="cardBtns">
        <a href="https://www.etsy.com/shop/CadraWorks?ref=profile_header#reviews" rel="noreferrer" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16z" /><path fill="currentColor" d="m12 15l1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z" /></svg>
          Reviews
        </a>
      </div>
    </Card>
  );
};

export default Store;
