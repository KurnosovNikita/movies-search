import React, {Fragment} from "react";
import Footer from '../../../../common/footer/footer.component';

class Base extends React.Component {
    render() {
        const {data} = this.props;

        return (
          <Fragment>
              <div className="wrapper">
                  {data}
              </div>
              <Footer footerClassName="footer" contextClassName="footer-content"/>
          </Fragment>
        );
    }
}

export default Base;