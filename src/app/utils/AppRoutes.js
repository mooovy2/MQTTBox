import React from 'react';
import {Route} from 'react-router';

import Main from '../components/Main';
import AddEditBrokerForm from '../components/AddEditBrokerForm';
import BrokerView from '../components/BrokerView';
import About from '../components/About';
import ComingSoon from '../components/ComingSoon';
import MqttLoadView from '../components/loadtest/MqttLoadView';


const AppRoutes = (
    <Route path="/" component={Main}>
        <Route path="/addedit" component={AddEditBrokerForm}/>
        <Route path="/addedit/:bsId" component={AddEditBrokerForm}/>
        <Route path="/broker/:bsId" component={BrokerView}/>
        <Route path="/aboutapp" component={About}/>
        <Route path="/comingsoon" component={ComingSoon}/>
        <Route path="/mqttload" component={MqttLoadView}/>
        <Route path="/mqttload/:bsId" component={MqttLoadView}/>
    </Route>
);
export default AppRoutes;
