import React from "react";
import { compose } from "redux";

import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { text } from "./data";

import { Card } from "antd";
import "./style.scss";


const Main = () => {
  const { Meta } = Card;

  return (
    <div className="main content">
      <Card
      className="main__card"
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      {text.map(el=> el)}
    </div>
  );
};

export default compose(withAuthRedirect)(Main);
