import React from 'react'
import { LayersControl, TileLayer } from 'react-leaflet'


// link choose layer map
// https://leaflet-extras.github.io/leaflet-providers/preview/
const BaseMap = () => {
    return (
        <LayersControl position='topright'>

            <LayersControl.BaseLayer name="ພື້ນຖານ" checked>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="ດາວທຽວ" >
                {/* <TileLayer url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'/> */}
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="ດຳ">
                <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' />
            </LayersControl.BaseLayer>

        </LayersControl>
    )
}

export default BaseMap