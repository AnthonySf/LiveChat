import React from 'react'

class RoomList extends React.Component {
    render () {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
        //console.log(this.props.rooms)
        return (
            <div className="rooms-list border border-primary border-3">
            <ul>
            <h3>Rooms:</h3>
            <hr></hr>
                {orderedRooms.map(room => {
                    const active = this.props.roomId === room.id ? "active" : "";
                    return (
                        <li key={room.id} className={"room " + active}>
                            <a onClick={() => this.props.subscribeToRoom(room.id)} href="#"># {room.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}

export default RoomList