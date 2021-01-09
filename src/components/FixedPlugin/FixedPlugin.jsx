import React, { Component } from "react";
import Toggle from "react-toggle";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown open",
      bg_checked: true,
      bgImage: this.props.bgImage
    };
  }
  handleClick = () => {
    this.props.handleFixedClick();
  };
  onChangeClick = () => {
    this.props.handleHasImage(!this.state.bg_checked);
    this.setState({ bg_checked: !this.state.bg_checked });
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
        
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
