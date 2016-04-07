import React        from 'react';
import classNames   from 'classNames';

import './_navTabs.less';

class NavTabs extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { activeTab: this.props.activeTab };
    }

    static propTypes = {
        activeTab: React.PropTypes.number,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element
        ]).isRequired
    };

    static defaultProps = {
        activeTab: 0
    };

    setActiveTab (index, e) {
        this.setState({ activeTab: index });
    }

    renderTabs () {
        if (!Array.isArray(this.props.children)) {
            this.props.children = [this.props.children];
        }

        let tabs = this.props.children
            .map((tabPanel, index) => {
                let classes = classNames(
                    { active: this.state.activeTab === index },
                    'nav-tabs-item'
                );
                return (
                    <li key={index} className={classes}>
                        <a onClick={this.setActiveTab.bind(this, index)}>
                            {tabPanel.props.title}
                        </a>
                    </li>
                );
            });

        return (
            <nav>
                <ul className="nav nav-tabs">{tabs}</ul>
            </nav>
        );
    }

    renderTabPanel () {
        let index = this.state.activeTab,
            tabPanel = this.props.children[index];

        return (
            <article>
                {tabPanel}
            </article>
        );
    }

    render() {
        return (
            <div>
                {this.renderTabs()}
                {this.renderTabPanel()}
            </div>
        );
    }
}

export default NavTabs;