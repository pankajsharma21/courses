import React from "react";
import {Jumbotron,Button,Container} from "reactstrap";


const Home=()=>{
return ( <div>
<Jumbotron className="text-center">
    <h1>The Course App</h1>
    <p>this app is devlop by me</p>
    <Container>
        <Button color="primary" outline>Start using</Button>
    </Container>
</Jumbotron>
</div>
);
};

export default Home;