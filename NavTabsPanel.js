import React from 'react';

class NavTabsPanel extends React.Component {
    constructor(...args) {
        super(...args);
    }

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired
    };

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default NavTabsPanel;