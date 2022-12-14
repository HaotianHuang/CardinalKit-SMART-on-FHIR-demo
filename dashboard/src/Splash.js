import logo from './images/cardinalkit_logo.png';

export default function Splash() {
    console.log("Splash");
    return (
        <div>
            <div className="mx-auto mt-5 mb-5 text-center">
                <img src={logo} alt="CardinalKit Logo" />
                <br />
                <h2>CardinalKit SMART Dashboard</h2>
                <br />
                <p className="lead">Please launch the dashboard from a SMART-on-FHIR compatible launcher to continue.</p>
            </div>
        </div>
    )
}
