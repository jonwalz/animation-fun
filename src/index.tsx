import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import styled from "react-emotion";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./components/sidebar";
import Contents from "./components/contents";

require("./index.css");

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    display: "flex"
};

const App = () => (
    <Container>
        <Sidebar>Sidebar</Sidebar>
        <Contents />
    </Container>
);

const Container = styled("div")`
    display: flex;
    min-height: 100vh;
`;

render(<App />, document.getElementById("root"));
