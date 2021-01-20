import React from 'react'

import './table.styles.scss'


const exportTableToExcel = ( tableID, filename = '' ) => {
    let downloadLink
    let dataType = 'application/vnd.ms-excel'
    let tableSelect = document.getElementById( tableID )
    let tableHTML = tableSelect.outerHTML.replace( / /g, '%20' )

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls'

    // Create download link element
    downloadLink = document.createElement( "a" )

    document.body.appendChild( downloadLink )

    if ( navigator.msSaveOrOpenBlob ) {
        let blob = new Blob( [ '\ufeff', tableHTML ], {
            type: dataType
        } )
        navigator.msSaveOrOpenBlob( blob, filename )
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML

        // Setting the file name
        downloadLink.download = filename

        //triggering the function
        downloadLink.click()
    }
}

// const DATA = [
//     {
//        thead: {
//            thFirst: 'Name',
//            thSecond: 'Email',
//            thThird: 'Country'
//        },
//         tbody: [
//             {
//                 tdFirst: 'John Doe',
//                 tdSecond: 'John Doe',
//                 tdThird: 'John Doe'
//             },
//             {
//                 tdFirst: 'Michael Addison',
//                 tdSecond: 'michael@gmail.com',
//                 tdThird: 'UK'
//             },
//             {
//                 tdFirst: 'Sam Farmer',
//                 tdSecond: 'sam@gmail.com',
//                 tdThird: 'France'
//             }
//         ]
//     }
// ]

const TableComponent = ( props ) => (
    <div className='table-component'>
        <table id="tbl-data" className='table-component__table'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>John Doe</td>
                <td>john@gmail.com</td>
                <td>USA</td>
            </tr>
            <tr>
                <td>Michael Addison</td>
                <td>michael@gmail.com</td>
                <td>UK</td>
            </tr>
            <tr>
                <td>Sam Farmer</td>
                <td>sam@gmail.com</td>
                <td>France</td>
            </tr>
            </tbody>

        </table>

        <button onClick={ () => exportTableToExcel( 'tbl-data', 'test_excel' ) } className='table-component__button'>Export
            Table Data To Excel File
        </button>
    </div>


)

export default TableComponent
