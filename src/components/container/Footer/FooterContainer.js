import React from "react";
import TextBlock from '../../presentational/TextBlock';

class FooterContainer extends React.PureComponent {
    render() {
        const {footerClassName, contextClassName} = this.props;
        return (
          <footer className={footerClassName}>
              <div className={contextClassName}>
                  <TextBlock className="title" text="netflixroulette"/>
              </div>
          </footer>
        );
    }
}

export default FooterContainer;