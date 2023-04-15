import React, { useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import './Tab.css'
export default function SeatSelection() {
    const [name, setName] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber, setSeatnumber] = useState([])
    // const [passengers, setPassengers] = useState([])
    // useEffect(()=>{
    //     let bId = localStorage.getItem('selectedBusId')
    //     if(bId){
    //         getSeatArray(bId)            
    //     }
    //     else return
    // },[localStorage])
    // const getSeatArray = async bId => {
    //     const baseURL = "http://localhost:8080/booking/"
    //     await axios.get(baseURL, bId)
    //     .this(response=>response.data)
    //     .this(data=>{
    //         setReservedSeat(data)
    //         console.log(reservedSeat)
    //     })
    // }
    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber)
        let newSeat = e.target.value
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            }
        } else {
            setSeatnumber([...seatNumber, newSeat])
            setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender(gender.concat(value))
        // console.log(value)
        // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName("name is required"))
        } else {
            setName(name.concat(value))
            // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        setArrowDown(true)
        localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
        localStorage.setItem("nameData", JSON.stringify(name))
        console.log(name)
        console.log(gender)
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <form key={idx} className="form seatfrm">
                    <p class="text-capitalize text-center">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    </div>
                </form>)

        })
    }
    return (
        <div className="ss">
            <div className="row">
                <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                              
                                    
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox"  value="2A" id="2A" />
                                            <label htmlFor="2A">1C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2B" id="2B" />
                                            <label htmlFor="2B">2B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="2C" id="2C" />
                                            <label htmlFor="2C">1A</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="3A" id="3A" />
                                            <label htmlFor="3A">3A</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="3B" id="3B" />
                                            <label htmlFor="3B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3C" id="3C" />
                                            <label htmlFor="3C">2A</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox"  value="4A" id="4A" />
                                            <label htmlFor="4A">3C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4B" id="4B" />
                                            <label htmlFor="4B">3B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4C" id="4C" />
                                            <label htmlFor="4C">3A</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">4C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">4B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox"  value="5C" id="5C" />
                                            <label htmlFor="5C">4A</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="5A" id="5A" />
                                            <label htmlFor="5A">5C</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5B" id="5B" />
                                            <label htmlFor="5B">5B</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="5C" id="5C" />
                                            <label htmlFor="5C">5A</label>
                                        </li>

                                    </ol>
                                </li>
                               
                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2">
                    <div className="seatInfo">
                        <form className="form-group">
                            {renderPassengerData(seatNumber)}
                        </form>
                        <div>
                            <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
                                Confirm Details
                            </button>
                        </div>
                        <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                            <FaAngleDoubleDown />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
