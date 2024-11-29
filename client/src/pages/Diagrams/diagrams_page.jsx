import React from 'react';
import BufersDiagram from "./1_Block/bufersDiagram";
import RegionDiagram from "./2_Block/regionDiagram";

const DiagramsPage = () => {
    return (
        <div style={{margin:"20px",display:"flex"}}>
            <BufersDiagram/>
            <RegionDiagram/>
        </div>
    );
};

export default DiagramsPage;