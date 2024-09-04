
import React, { useState } from 'react';

function ExcelSheet() {
    // Initialize data state with some rows and columns
    const [data, setData] = useState([
        ["MONTH 1", "", "", ""],
        ["Onboarding Call", "", "", ""],
        ["Google Search Console Access", "", "", ""],
        ["Google Analytics Access", "", "", ""],
        ["Website Access", "", "", ""],
        ["Technical Audit", "", "", ""],
        ["Anchor Text and Semantic Analysis", "", "", ""],
        ["Competitor Analysis", "", "", ""],
        ["Anchor Text / URL Mapping", "", "", ""],
        ["Google Data Studio Report + Local Reporting Suite", "", "", ""],
        ["Content Creation", "", "", ""],
        ["Authority Niche Placements", "", "", ""],
        ["Review Management", "", "", ""],
        ["Index Links", "", "", ""],
        ["Video Recap", "", "", ""]
    ]);

    // Handle input changes
    const handleInputChange = (rowIndex, colIndex, value) => {
        const newData = [...data];
        newData[rowIndex][colIndex] = value;
        setData(newData);
    };

    //## Function to handle submitting data to an API
    const handleSubmit = () => {
        console.log("Submitting data:", data);

    };
    //key event listener
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
    // returning the entire div and handling edit functionality dynamically with button(used to send api call to dabase);
    return (
        <div onKeyDown={handleKeyPress} tabIndex="0">
            <table>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>
                                    <input
                                        type="text"
                                        value={cell}
                                        onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}

                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSubmit}>Submit Data</button>
        </div>
    );

}

export default ExcelSheet;
