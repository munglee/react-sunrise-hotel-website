import React from "react"
import { Link } from "react-router-dom";

// Display room items available for reservation
function RoomRow({ room, showForm, onShowFormChange }) {
    return (
        <tr className="roomTable">
            <td>
                <img src={room.imgPath} style={{ width: 200, height: 200 }} />  {/* photo */}
            </td>
            <td style={{ verticalAlign: "top", textAlign: "left" }}>
                <b>{room.name}</b><br />         {/* name */}
                {room.category} <br />           {/* category */}
                {room.starRate} Star <br />
            </td>
            <td style={{ verticalAlign: "bottom", textAlign: "right" }}>
                CAD$
                <b style={{ color: "red" }}>{room.price} </b>    <br></br>         {/* price */}
                <Link to={"/form"}><button onClick={(e) => onShowFormChange(true)} >Reserve</button></Link>
            </td>
        </tr>
    );
}

function Room({
    roomData,
    isAvaliableOnly,
    isStandardSizeOnly,
    isKingSizeOnly,
    isQueenSizeOnly,
    budgetMin,
    budgetMax,
    starRateFive,
    starRateFour,
    starRateThree,
    showForm,
    onShowFormChange
}) {
    const rows = [];

    console.log("create room");
    roomData.forEach((room) => {    // Loop the room array to check each row record 
        let showSize = false;
        let showRoom = false;

        if (isAvaliableOnly && !room.stocked) { // Check whether the Avaliable box checkbox is clicked or not
            return;
        }

        if (isStandardSizeOnly || isKingSizeOnly || isQueenSizeOnly) {
            if (isStandardSizeOnly && room.category === "Standard Size") { // check whether the Standard Size checkbox is clicked or not
                showSize = true;
            }
            if (isKingSizeOnly && room.category === "King Size") { // check whether the King Size checkbox is clicked or not
                showSize = true;
            }
            if (isQueenSizeOnly && room.category === "Queen Size") { // check whether the Queen Size checkbox is clicked or not
                showSize = true;
            }

            if (!showSize) {
                return;
            }
        }

        if (room.price < budgetMin || room.price > budgetMax) { // check the price range
            return;
        }

        if (starRateFive || starRateFour || starRateThree) {

            if (starRateFive && room.starRate === 5) {
                showRoom = true;
            }
            if (starRateFour && room.starRate === 4) {
                showRoom = true;
            }
            if (starRateThree && room.starRate === 3) {
                showRoom = true;
            }
            if (!showRoom) {
                return;
            }
        }

        rows.push(<RoomRow room={room} showForm={showForm} onShowFormChange={onShowFormChange} />);

    });

    return (
        <div>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default Room;