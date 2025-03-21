import './table.css'
export { Table };

function Table() {
    const rows = [['айтем1', 12], ['айтем2', 10]];
    const aggr = 9001;

    return (<table>
        <thead>
            <tr>
                <th scope="col">Название</th>
                <th scope="col">Количество</th>
            </tr>
        </thead>

        <tbody>
            {
                rows.map(row =>
                    <tr>
                        <th>{row[0]}</th>
                        <td>{row[1]}</td>
                    </tr>
                )
            }

        </tbody>

        <tfoot>
            <tr>
                <th scope="row">Свойство</th>
                <td>{aggr}</td>
            </tr>
        </tfoot>
    </table>
    );

    // return (<table>
    //     {
    //         rows.forEach(
    //             row => { console.log(row); <tr><th><p>{row}</p></th></tr> }
    //         )
    //     }
    // </table>);
}