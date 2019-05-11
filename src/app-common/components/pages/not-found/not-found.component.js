import React, {Component} from "react";
import './not-found.scss';

class NotFound extends Component {

    render() {
        return (
          <div className="not-found-container">
              <div className='not-found-text'>
                  Page Not Found :(
              </div>
          </div>
        );
    }
}

export default NotFound;