import React, { Fragment, useEffect, useState } from "react";
import EmbedDashboard from "./components/EmbedDashboard/EmbedDashboard";

import "./App.css";



import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';




import { EmbedSDKInit } from "./components/common/EmbedInit";

import SSOUrlTester from "./components/SSOUrlTester/SSOUrlTester";



import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import AOS from 'aos';
import "aos/dist/aos.css"

import {Link} from 'react-router-dom';




import TopNav from './components/nav/TopNav.js';

import TopSection from './components/sections/TopSection.js';
import MiddleSection from './components/sections/MiddleSection.js';

import BottomSection from './components/sections/BottomSection.js';

import ToTopButton from './components/sections/ToTopButton.js';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [menuToggle, setMenuToggle] = React.useState(true);

  EmbedSDKInit();




  return (
<div>

<div className="main-page-wrapper">

<TopNav/>
<TopSection/>
<MiddleSection/>
<BottomSection/>


<ToTopButton/>

</div>
</div>

  );
}

export default App;
