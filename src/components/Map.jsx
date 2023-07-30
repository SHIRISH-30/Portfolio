import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                center: [72.8777, 19.0760],
                scale: 1250
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <ZoomableGroup center={[72.8777, 19.0760]} zoom={1}>
                <Geographies
                    geography="/features.json"
                    fill="#2C065D"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                >
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
                <Annotation
                    subject={[72.8777, 19.0760]}
                    dx={-90}
                    dy={-30}
                    connectorProps={{
                        stroke: "#FF5533",
                        strokeWidth: 3,
                        strokeLinecap: "round"
                    }}
                >
                    <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                        {"Mumbai"}
                    </text>
                </Annotation>
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default Map;
