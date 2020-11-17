import React,{useState} from 'react';
import './style/index.css';
import Header from './header.js';
import buttons from './buttons.json';
import 'lazysizes';

const Index = (props) => {

    const [spaces,filteredSpaces] = useState(props.spaces);
    const [isLaunch,sucessfulLaunch] = useState(false);
    const [isLanding,sucessfulLanding] = useState(false);
    const [yearSearch,updatedYear] = useState(null);
    let showSucessfulLaunch = () =>{
        sucessfulLaunch(true);

        if (isLaunch && isLanding && yearSearch === null) {
            fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true')
            .then(response => response.json())
            .then(data => filteredSpaces(data.filter(arr => arr.launch_success === true && arr.rocket.first_stage.cores[0].land_success === true)));
        } else if (isLaunch && isLanding && yearSearch !== null) {
            fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014')
            .then(response => response.json())
            .then(data => filteredSpaces(data.filter(arr => arr.launch_success === true && arr.rocket.first_stage.cores[0].land_success === true && arr.launch_year === yearSearch)));
        } else {
            fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true')
            .then(response => response.json())
            .then(data => filteredSpaces(data.filter(arr => arr.launch_success === true)));
        }  
    } 

    let showSucessfulLanding = () => {
        sucessfulLanding(true);

        if (isLaunch && isLanding && yearSearch === null) {
            fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true')
            .then(response => response.json())
            .then(data => filteredSpaces(data.filter(arr => arr.launch_success === true && arr.rocket.first_stage.cores[0].land_success === true)));
        } else if (isLaunch && isLanding && yearSearch !== null) {
            fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014')
            .then(response => response.json())
            .then(data => filteredSpaces(data.filter(arr => arr.launch_success === true && arr.rocket.first_stage.cores[0].land_success === true && arr.launch_year === yearSearch)));
        } else {
            filteredSpaces(props.spaces.filter(arr => arr.rocket.first_stage.cores[0].land_success === true));
        }
    }

    let showfalseLaunch = () => {
        filteredSpaces(props.spaces.filter(arr => arr.launch_success === false));
    }

    let showfalseLand = () => {
        filteredSpaces(props.spaces.filter(arr => arr.rocket.first_stage.cores[0].land_success === false));
    }

    let filterByYear = (year) => {
        updatedYear(year);

        if (isLaunch && isLanding && yearSearch === null) {
            fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true')
            .then(response => response.json())
            .then(data => filteredSpaces(data.filter(arr => arr.launch_success === true && arr.rocket.first_stage.cores[0].land_success === true)));
        } else if (isLaunch && isLanding && yearSearch !== null) {
            fetch('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014')
            .then(response => response.json())
            .then(data => filteredSpaces(data.filter(arr => arr.launch_success === true && arr.rocket.first_stage.cores[0].land_success === true && arr.launch_year === yearSearch)));
        } else {
            filteredSpaces(props.spaces.filter(arr => arr.launch_year === year));
        }
    }

    return (
        <div className="grid-container">
            <Header/>
            <br/>
            <div className="grid-container1">
                <div className="grid-item1">
                    <h2>Filter</h2>
                    <div className="content">
                        <p>Launch Year</p>
                        <div className="row">
                            {
                                buttons.buttonItem.map((groupedButton) => {       
                                    return (
                                        <div className="column">
                                            <button className="buttons" value={groupedButton.b_value} onClick={e => filterByYear(e.target.value)} key={groupedButton.b_id}>{groupedButton.b_name} </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p>Sucessful launch</p>
                        <div className="row">
                            <div className="column"><button className="buttons" onClick={showSucessfulLaunch}>true</button></div>
                            <div className="column"><button className="buttons" onClick={showfalseLaunch}>false</button></div>
                        </div>
                        <p>Sucessful landing</p>
                        <div className="row">
                            <div className="column"><button className="buttons" onClick={showSucessfulLanding}>true</button></div>
                            <div className="column"><button className="buttons" onClick={showfalseLand}>false</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-container2">
                {
                    spaces.map( spaceData => {
                        return  (
                            <div className="grid-item" key={spaceData.flight_number}>
                                <div className="content">
                                    <img src={spaceData.links.mission_patch_small}  className="lazyload"/>
                                    <h2>{spaceData.mission_name}</h2>
                                    <h6>Mission Ids: {spaceData.mission_id}</h6>
                                    <h6>Launch Year: {spaceData.launch_year}</h6>
                                    <h6>successful Launch: {spaceData.launch_success? 'true' : 'false'}</h6>
                                    <h6>successful Landing: {spaceData.rocket.first_stage.cores[0].land_success ? 'true' : false}</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
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

export default Index;