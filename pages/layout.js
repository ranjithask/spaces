import React, {useState} from 'react';
import fetch from 'isomorphic-unfetch';

const Layout = (props) => {
    return (
        <div>
            {
                props.spaces.map( spaceData => {
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 10 }}>
                        <div>
                            <img src="/w3images/mountains.jpg" alt="Mountains" style="width:100%"/>
                            <h4>{spaceData.mission_name}</h4>
                            <p>Mission Ids: {spaceData.mission_id}</p>
                            <p>Launch Year: {spaceData.launch_year}</p>
                            <p>sucessfull Launch: {spaceData.launch_success}</p>
                            <p>sucessfull Launch: {spaceData.launch_success}</p>
                            <p>sucessfull Landing: {spaceData.land_success}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export const getStaticProps = async () => {
    const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100')
    const spaces = await res.json()
    return {
        props: {
            spaces
        },
    }
  }


export default Layout;