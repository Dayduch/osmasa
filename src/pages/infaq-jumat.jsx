import Navbar from "../components/navbar";

function InfaqJumat() {
    return (
        <>
        <Navbar/>
        <div className="container">
            <h3>Laporan Infaq Jumat</h3>
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
                        <td>08-09-2023</td>
                        <td>Rp. !00.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default InfaqJumat