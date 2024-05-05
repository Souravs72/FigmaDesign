import React, { useState } from 'react';
import './Header.css'

function Header() {
    const [selected, setSelected] = useState("recurring");

    return (
        <div className="Header">
            <div className="container">
                <div className="head">
                    <h2 className="heading">Write Task Name Here</h2>
                    <p className="help">Help Ticket</p>
                </div>
                <div className="toggleBar">
                    <label className={"onetime " + (selected === "onetime" ? "selected-color" : "")} onClick={() => {
                        setSelected("onetime")
                    }}>Onetime </label>
                    <label className={"recurring " + (selected === "recurring" ? "selected-color" : "")}
                        onClick={() => { setSelected("recurring") }}>
                        Recurring
                    </label>
                </div>
                <form className='form mt-5'>
                    <div className="assigned-to">
                        <label className="assignedTo">Assigned To</label>
                        <span className="value_one" style={{ color: "#66B2DF" }}>
                            <i class="fa-regular fa-circle-user"></i>
                            <span className='px-1'>Add Member</span>
                            <span className='px-1'><i className="fa-solid fa-angle-down"></i></span>
                        </span>
                    </div>
                    <hr />
                    <div className="assigned-to">
                        <label className="assignedTo">Frequency</label>
                        <span className="value_one" style={{ color: "#66B2DF" }}>Select Frequency
                            <span className='px-1'><i className="fa-solid fa-angle-down"></i></span>
                        </span>
                    </div>
                    <hr />
                    <div className="assigned-to">
                        <label className="assignedTo">Due Date & Time</label>
                        <span className="value_one" style={{ color: "#66B2DF" }}>
                            <i class="bi bi-calendar"></i>
                            <span className='px-2'>Select Date & Time</span>
                            <div className="datetext">If holidays fall on the due dates, mark it done on <span className="transparent bg-primary-subtle text-primary rounded-pill"><span>Next working day<i className="fa-solid fa-angle-down ps-1"></i></span>
                            </span></div>
                        </span>
                    </div>
                    <hr />
                    <div className="assigned-to">
                        <label className="assignedTo">Tags</label>
                        <span className="value_one" style={{ color: "#66B2DF" }}>
                            <i class="bi bi-plus-lg"></i>
                            <span className='px-1'>Add tags</span>
                        </span>
                    </div>
                    <hr />
                    <div className="assigned-to">
                        <label className="assignedTo">Description</label>
                        <span className="value_one" style={{ color: "#66B2DF" }}>
                        <textarea rows="3" cols="70" style={{ resize: "none" }}></textarea>
                        </span>
                    </div>
                    <hr />
                    <div className="subtasks px-3">
                        <div className="p-3 mb-2 bg-primary-subtle text-primary">
                            <span className="ps-3"><i class="bi bi-plus-lg"></i></span>
                            <span className='ps-2'>Add Subtask</span>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Restrict user to mark as done after or before due date?
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                File Upload is mandatory during mark as done?
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                High Priority Task
                            </label>
                        </div>

                    </div>
                    <div className="add">
                        <button type="submit" className="btn btn-primary mt-5">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header;
