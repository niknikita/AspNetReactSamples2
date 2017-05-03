import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import AppBar from 'material-ui/AppBar';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';



class ExampleComponent extends React.Component {
    //static propTypes = {
    //    serverSideScreenClass: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    //};

    //static childContextTypes = {
    //    serverSideScreenClass: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    //    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    //    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    //    gutterWidth: React.PropTypes.number,
    //};

    //    getChildContext = () => ({
    //        serverSideScreenClass: this.props.serverSideScreenClass,
    //    });

    //    styleFunction = (screenClass) => {
    //        if (screenClass === 'xl') return { fontSize: '60px' };
    //        if (screenClass === 'lg') return { fontSize: '40px' };
    //        if (screenClass === 'md') return { fontSize: '30px' };
    //        if (screenClass === 'sm') return { fontSize: '20px' };
    //        return { fontSize: '10px' };
    //    };

    render = () => (
        <div>
            <h1>Responsive grid example</h1>
            
          <Container fluid={true}>
            <h1>Responsive grid example</h1>

            <Row>
              <Col sm={5}>
                One of three columns1
              </Col>
              <Col sm={5}>
                One of three columns2
              </Col>
              <Col sm={6}>
                One of three columns3
              </Col>
            </Row>

            <h1>Responsive utilties example</h1>

            <p>
              <span>Your current screen class is </span>
              <Visible xs><strong>xs</strong></Visible>
              <Visible sm><strong>sm</strong></Visible>
              <Visible md><strong>md</strong></Visible>
              <Visible lg><strong>lg</strong></Visible>
              <Visible xl><strong>xl</strong></Visible>
              <span>.</span>
            </p>

            <Visible xs sm>
              <p>Paragraph visible on extra small and small.</p>
            </Visible>
            <Hidden xs sm>
              <p>Paragraph hidden on extra small and small.</p>
            </Hidden>
            <Visible md lg>
              <p>Paragraph visible on medium and large.</p>
            </Visible>
            <Hidden md lg>
              <p>Paragraph hidden on medium and large.</p>
            </Hidden>

            <ScreenClassRender style={this.styleFunction}><p>Some text which font size depends on the screen class.</p></ScreenClassRender>
            <Row>
                <Col sm={2}>
                <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                </Col>
            </Row>

          </Container>
          </div>
        );
}



const MyAwesomeReactComponent = () => ( 
    <div>
    <ExampleComponent/>
    
    </div>
);

export default MyAwesomeReactComponent;