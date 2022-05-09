import React, { useState, useEffect } from "react";
import SidebarAside from "./SidebarAside";
import Card from "./Card";
import Tag from "./Tag";
import useFetch from "../hooks/useFetch";

const Lay = () => {
  const [data, setData] = useState([]);
  const [teenTag, setTeenTag] = useState([]);

  const { loading, error, datos } = useFetch(
    "https://api-test-ln.herokuapp.com/articles"
  );

  useEffect(() => {
    if (datos) {
      const res = datos?.articles;
      setData(res);
      const ArticleBySubtype = [];
      const taxonomy = [];
      res.map((article) => {
        if (article.subtype === "7") {
          ArticleBySubtype.push(article);
          taxonomy.push(article.taxonomy.tags[0]);
        }
      });

      function SortArray(x, y) {
        if (x.text < y.text) {
          return -1;
        }
        if (x.text > y.text) {
          return 1;
        }
        return 0;
      }
      let taxonomySort = taxonomy.sort(SortArray);
      const teenData = [];
      for (let index = 0; index < 10; index++) {
        teenData.push(taxonomySort[index]);
      }
      setTeenTag(teenData);
    }
  }, [datos]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <h2
              style={{
                borderBottom: "4px solid #000",
                fontFamily: "sans-serif",
              }}
            >
              Acumulado Grilla
            </h2>
          </div>

          <div className="d-flex flex-wrap">
            {teenTag
              ? teenTag.map((item, i) => (
                  <div key={i}>
                    {i != 0 ? (
                      <>
                        <span
                          style={{
                            content: "·",
                            color: "#006998",
                          }}
                        >
                          •
                        </span>
                       <Tag slug={item.slug} text={item.text}/>
                      </>
                    ) : (
                      <Tag slug={item.slug} text={item.text}/>
                    )}
                  </div>
                ))
              : null}
          </div>
          <div>
            <div className="row row-cols-1 row-cols-md-3">
              {data ? (
                data.map((item, i) =>
                  item.subtype === "7" ? <Card key={i} article={item} /> : null
                )
              ) : (
                <>Loading...</>
              )}
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
