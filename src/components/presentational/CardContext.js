import React, {Fragment} from "react";

const CardTitle = ({titleClassName, subtitleClassName, title, subtitle}) => (
  <Fragment>
      <div className={titleClassName}>{title}</div>
      <div className={subtitleClassName}>{subtitle}</div>
  </Fragment>
);

export default CardTitle;