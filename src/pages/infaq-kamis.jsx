import Navbar from "../components/navbar";

function InfaqKamis() {
    return (
        <>
        <Navbar/>
        <div className="container">
            <h3>Laporan Infaq Kamis</h3>
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tanggal</th>
                        <th>Total Uang</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>07-09-2023</td>
                        <td>Rp. !00.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default InfaqKamis