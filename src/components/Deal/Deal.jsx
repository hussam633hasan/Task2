import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Deal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Deal() {
    return (
        <section>
            <div className="headDeal">
                <div className="headDealtxt">
                    <h4>| Best Deal</h4>
                    <h1>Find Your Best Deal Right Now!</h1>
                </div>
                <div className="headDealbtn">
                    <button className="redbtn">Appartment</button>
                    <button>Villa House</button>
                    <button>Penthouse</button>
                </div>
            </div>
            <div className="contentDeal">
                <div className="Dealtablet">
                    <div className="Deal-hh">
                        <p>Total Flat Space</p>
                        <h1>185 m2</h1>
                    </div>
                    <div className="Deal-hh">
                        <p>Floor number</p>
                        <h1>26th</h1>
                    </div>
                    <div className="Deal-hh">
                        <p>Number of rooms</p>
                        <h1>4</h1>
                    </div>
                    <div className="Deal-hh">
                        <p>Parking Available</p>
                        <h1>Yes</h1>
                    </div>
                    <div className="Deal-hh">
                        <p>Payment Process</p>
                        <h1>Bank</h1>
                    </div>
                </div>
                <div className="Dealimg">
                    <img src="/images/deal-01.jpg" />
                </div>
                <div className="Dealtxt">
                    <h4>Extra Info About Property</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse</p>
                    <p>.When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                    <a className="HHDeal"><FontAwesomeIcon className="calendericon" icon={faCalendar} style={{ color: "#ffffff", marginRight: 15, marginLeft: -1, marginTop: 0, marginBottom: -15, backgroundColor: "#f35525", height: 25, width: 37 }} />Schedule a visit</a>
                </div>
            </div>
            <div className="headpropetry">
                <h4>| Properties</h4>
                <h1>We Provide The Best Property You Like</h1>
            </div>
        </section>
    )
}

export default Deal