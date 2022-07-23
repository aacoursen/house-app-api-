import React from "reaact";
import {house} from "./House";
import {houseApi} from '../rest/HouseApi.js';

export default class HouseList extends React.Component {
    state = {
        houses = []
    };
    
    componentDidMount (){
        this.fetchhouses ();
    }

    fetchHouses= async () => {
        const houses = await houseApi.get ();
        this.setState({ houses });
    }

    updateHouse=async (updatHouse)=> {
        await HouseApu.put (updateHouse):
    };
    
    render (){
        return (
            <div className="house-list">
            {this.state.house.map((house))}=> (
                <House
                house={house}
                key= {house._id}
                updateHouse={this.updateHouse}
                />
            )
            </div>
        )
    }
}