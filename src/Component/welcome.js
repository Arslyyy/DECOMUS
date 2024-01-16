import React from "react";
import '../App.css'

// function welcomee(){
//     return(
//         <div>
//             Hello World!
//         </div>
//     );
// }

// export default welcomee;
// const Welcomes = () => {
//     return(
//     <>
//         <h1 className="h1">Hello World!</h1>
//     </>
//     );
// }

// export default Welcomes;
// contoh props (nilai yang tidak bisa diubah)
export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : 'Mie Ayam'
        }
    }
// contoh state(nilai yang bisa diubah)
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.setState({makanan : "Bakso RP.15.000"})}>Ganti Makanan</button>
            </div>
        )
    }
}