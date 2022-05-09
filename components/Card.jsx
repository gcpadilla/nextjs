import React, {useEffect} from "react";
import moment from "moment";
import "moment/locale/es";

const Card = (props) => {

   const {article} = props;
   
  return (
   <div className="col mb-4">
     <div className="card h-100">
       <img src={article?.promo_items?.basic?.url} className="img-fluid" alt="..."/>
       <div className="card-body">
         <p className="card-text">{article?.headlines?.basic}</p>
       </div>
        <div className="card-footer" style={{backgroundColor:"#ffffff" ,borderTop:"solid #ffffff"}}>
      <small className="text-muted" style={{backgroundColor:"#ffffff"}}>{moment(article?.display_date).format("LL")}</small>
    </div>
     </div>
   </div>
  );
};

export default Card;
