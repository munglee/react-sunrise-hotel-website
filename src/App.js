import './App.css';
import Room from './Room';
import SearchBar from './SearchBar';
import { useState } from 'react';
import Form from './Form';
import { Nav, Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
import AboutUs from './AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Room data array
const RoomData = [
  { roomId: 1, starRate: 5, category: "King Size", price: 200, stocked: true, name: "Happy House by Elevate Rooms", imgPath: "./images/room1.jpg" },
  { roomId: 2, starRate: 5, category: "King Size", price: 160, stocked: true, name: "Very Good Quality by Wyndham Rooms", imgPath: "./images/room2.jpg" },
  { roomId: 3, starRate: 4, category: "Queen Size", price: 120, stocked: false, name: "Canada Airport Room", imgPath: "./images/room3.jpg" },
  { roomId: 4, starRate: 3, category: "Standard Size", price: 100, stocked: true, name: "Vancouver Hotel Room", imgPath: "./images/room1.jpg" },
  { roomId: 5, starRate: 3, category: "Standard Size", price: 80, stocked: false, name: "Luxury Homestay Room", imgPath: "./images/room2.jpg" },
  { roomId: 6, starRate: 3, category: "Standard Size", price: 60, stocked: true, name: "Beaty Hotel", imgPath: "./images/room3.jpg" }
];


// Display searchbar and room when users click the checkbox and to control display items
function ControlDisplay({ roomDataArray }) {
  const [isAvaliableOnly, setIsAvaliableOnly] = useState(false);
  const [isStandardSizeOnly, setIsStandardSizeOnly] = useState(false);
  const [isKingSizeOnly, setIsKingSizeOnly] = useState(false);
  const [isQueenSizeOnly, setIsQueenSizeOnly] = useState(false);

  const [budgetMin, setBudgetMin] = useState(0);
  const [budgetMax, setBudgetMax] = useState(200);
  const [starRateFive, setStarRateFive] = useState(false);
  const [starRateFour, setStarRateFour] = useState(false);
  const [starRateThree, setStarRateThree] = useState(false);

  const [showForm, setshowForm] = useState(false);

  return (
    /* create searchbar and room */
    <div>
      <header>
        <NavBar />
        <h2 className="header">Our Rooms</h2>
      </header>
      <table border="1px solid black" style={{ marginLeft: "auto", marginRight: "auto" }} >
        <tr style={{ verticalAlign: "top", textAlign: "left" }}>
          <td>
            <SearchBar
              isAvaliableOnly={isAvaliableOnly}
              isStandardSizeOnly={isStandardSizeOnly}
              isKingSizeOnly={isKingSizeOnly}
              isQueenSizeOnly={isQueenSizeOnly}

              budgetMin={budgetMin}
              budgetMax={budgetMax}
              starRateFive={starRateFive}
              starRateFour={starRateFour}
              starRateThree={starRateThree}
              onIsAvaliableOnlyChange={setIsAvaliableOnly}
              onIsStandardSizeOnlyChange={setIsStandardSizeOnly}
              onIsKingSizeOnlyChange={setIsKingSizeOnly}
              onIsQueenSizeOnlyChange={setIsQueenSizeOnly}

              onBudgetMinChange={setBudgetMin}
              onBudgetMaxChange={setBudgetMax}
              onStarRateFiveChange={setStarRateFive}
              onStarRateFourChange={setStarRateFour}
              onStarRateThreeChange={setStarRateThree}
            />
          </td>
          <td>
            <Room
              roomData={roomDataArray}
              isAvaliableOnly={isAvaliableOnly}
              isStandardSizeOnly={isStandardSizeOnly}
              isKingSizeOnly={isKingSizeOnly}
              isQueenSizeOnly={isQueenSizeOnly}

              budgetMin={budgetMin}
              budgetMax={budgetMax}
              starRateFive={starRateFive}
              starRateFour={starRateFour}
              starRateThree={starRateThree}

              showForm={showForm}
              onShowFormChange={setshowForm}
            />
          </td>
        </tr>
      </table>
      {showForm ? <Form /> : ''}
    </div>
  );
}

// Main program to pass the RoomData array to ControlDisplay() function 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/room" element={<ControlDisplay roomDataArray={RoomData} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;