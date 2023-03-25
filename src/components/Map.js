import React from 'react'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import BaseMap from './layer/BaseMap';
// import CSVFilelocal from './layer/CSVFilelocal';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet'

const MapConponent = () => {

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <MapContainer
            style={{ width: '100%', height: '100vh' }}
            center={[17, 102]}
            zoom={6}
            scrollWheelZoom={true}>

            <BaseMap />
            {/* <CSVFilelocal/> */}
            <Marker position={[21.170186, 101.125391]}>
                <Popup>
                <img src='./profile.jpeg' style={{ width: 150, height: 200, textAlign:'center'}}></img> 
                    <h2 style={{ color: 'teal' , }}>ຂ້ອຍຊື້ ທ້າວ ຮືວ່າງ ຊົ່ງປໍ</h2>  <hr></hr>
                    <p style={{fontSize:18}}>ດຽວນີ້ຂ້ອຍແມ່ນກຳລັງສືກສາຢູ່ທີມະຫາໄລແຫ່ງຊາດປີທີ້4</p>
                </Popup>
            </Marker>
            <Marker position={[18.039551365182998, 102.63192880600278]}>

                <Popup>
                    <img src='./profile.jpeg' style={{ width: 150, height: 200, textAlign:'center'}}></img> 
                    <h2 style={{ color: 'teal' , }}>ຂ້ອຍຊື້ ທ້າວ ຮືວ່າງ ຊົ່ງປໍ</h2>  
                    ສະບາຍດີ! ທຸກທ່ານນີ້ແມ່ນ ໂຮງຮຽນຂອງຂ້ອຍ <h1 style={{color:'teal'}}>Nation University of Lao</h1>
                 <hr />
                    <p style={{fontSize:18}}>ດຽວນີ້ຂ້ອຍແມ່ນກຳລັງສືກສາຢູ່ທີມະຫາໄລແຫ່ງຊາດປີທີ້4 ຂ້ອຍຮຽນສາຍພັດທະນາເວັດໄຊໃນມະຫາໄລ </p>
                    
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapConponent;