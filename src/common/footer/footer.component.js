import React from "react";
import Text from '../../base/text/text.component';
import './footer.scss';

class Footer extends React.PureComponent {
    render() {
        const {footerClassName, contextClassName} = this.props;

        return (
          <footer className={footerClassName}>
              <div className={contextClassName}>
                  <Text className="title" text="netflixroulette"/>
              </div>
          </footer>
        );
    }
}

export default Footer;