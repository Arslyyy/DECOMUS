// contoh mapping menggunakana react js
import React from "react";

const makanans = [
    {
        nama : 'Soto',
        Harga : 10000
    },
    {
        nama : 'Bakso',
        Harga : 15000
    },
    {
        nama : 'Mie Ayam',
        Harga : 10000
    },
    {
        nama : 'Mie Ayam Bakso',
        Harga : 17000
    },
    {
        nama : 'Bakso Urat',
        Harga : 15000
    },
    {
        nama : 'Bakso borak',
        Harga : 15000
    },
    {
        nama : 'Gorengan',
        Harga : 2000
    },
]
// menghitung total menu
const total_bayar = makanans.reduce((total_Harga, makanan) => {
    return total_Harga + makanan.Harga;},0)
// menghitung total harga yang lebih dari 11.000
const total_bayarr = makanans.filter((makanany) => makanany.Harga > 11000).reduce((total_Harga, makanany) => {
    return total_Harga + makanany.Harga;},0)


    const Map = () => {
        return (
            <div>
                <h2>Maping</h2>
                <ul>
                    {makanans.map((makanan, index) =>(
                        <li>{index + 1}. {makanan.nama} - Harga {makanan.Harga}</li>
                    ))}
                </ul>
                    <h3>Total Bayar : {total_bayar}</h3>
                
                <h2>Map Filter Harga Yang Lebih Dari 11.000</h2>
                <ul>
                    {makanans.filter((makanany) => makanany.Harga > 11000)
                        .map((makanany, index) =>(
                            <li>{index +1}. {makanany.nama} - Harga {makanany.Harga}</li>
                        ))}
                </ul>

                <h3>Total Bayar : {total_bayarr}</h3>
            </div>
        )
    } 

export default Map