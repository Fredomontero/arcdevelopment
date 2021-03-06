import React, {useState} from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/ui/footer';
import LandingPage from '../components/ui/landingpage';
import Services from '../components/ui/services';
import CustomSoftware from './ui/CustomSoftware';
import MobileApps from './ui/MobileApps';
import Websites from './ui/Websites';
import Revolution from './ui/Revolution';
import About from './ui/About';
import Contact from './ui/Contact';
import Estimate from './ui/Estimate';

function App() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" render={ (props) =>  <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/> }/>
          <Route exact path="/services" render={(props) => <Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/customsoftware" render={(props) => <CustomSoftware setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/mobileapps" render={(props) => <MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/websites" render={(props) => <Websites setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/revolution" render={(props) => <Revolution setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/aboutus" render={(props) => <About setValue={setValue}/>}/>
          <Route exact path="/contact" render={() => <Contact setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/estimate" render={() => <Estimate setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
