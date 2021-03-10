import React, { useEffect } from "react";

import "./style.scss";

export const News = ({ getDatas, dispatch, newsData }) => {

  useEffect(() => {
    dispatch(getDatas());
  }, []);

  const printDatas = newsData.map(({id, lastName, description, phone, email}) => {
    return (
      <div key={id}>
        <li>
          Description: <br />
          nema {lastName} {description}{" "}
        </li>
        <li>
          contacts:{" "}
          <b>
            {phone} {email}
          </b>
        </li>
        <br />
      </div>
    );
  });

  return <div className="news content">{printDatas}</div>;
};
