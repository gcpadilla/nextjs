import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarAside from "./SidebarAside";
import Card from "./Card";

const Lay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://api-test-ln.herokuapp.com/articles"
        );
        const data = res.data.articles;
        setData(data);
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <h2
              style={{
                borderBottom: "4px solid #000",
                fontFamily:"sans-serif"
              }}
            >
              Acumulado Grilla
            </h2>
          </div>

          <div className="d-flex flex-row">
            <button type="button" className="btn btn-link">
              Platos principales
            </button>
            <button type="button" className="btn btn-link">
              Cerdo
            </button>
            <button type="button" className="btn btn-link">
              Papas
            </button>
            <button type="button" className="btn btn-link">
              Date un gustito
            </button>
            <button type="button" className="btn btn-link">
              La familia
            </button>
          </div>
          <div>
            <div className="row row-cols-1 row-cols-md-3">
              {data.map((item, i) => (
                <Card key={i} article={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="d-none d-sm-none d-md-block col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <SidebarAside />
        </div>
      </div>
    </div>
  );
};

export default Lay;
