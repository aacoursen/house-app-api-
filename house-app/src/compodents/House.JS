import React from 'reaact'
import { HouseList } from './HousesList';
import { NewRoomForm } from './NewRoomForm';

export const House = (props)=> {
    const {house, updateHouse} =props;

    const deleteRoom= (roomID)=> {
        const updateHouse = {
            ...house,
            rooms: house.rooms.filtter((x)=> x._id !== roomId)
        };
        updateHouse(updateHouse);
    }
    const addNewRoom= (room)=> updateHouse ({...HouseList, rooms: {...house.rooms, room}});

    const rooms =()=> (
        <ul>
            {houses.rooms.map((room, index))} => (
                <li key={(index)}>
                    <label> {'$room.name'} Area: ${room.area}''</label>
                    <button>
                        oneClick={(e)} => deleteRoom (room_id)>delete
                    </button>
                </li>
            )
        </ul>
    )
        return (
            <div>
            <h1>
                {house.name}</h1>
                rooms ({rooms, houseId: house._idm, deleteRoom})
            </div>
        );
    <NewRoomForm addNewRoom = {addNewRoom}
    }
