import React from 'react';
import './RankTable.css'

function RankTable() {
    return (
        <>
            <div className='rank__table'>
                <table>
                    <tbody>
                        <tr className='rank__name-col'>
                            <td></td>
                            <td>Đội</td>
                            <td>Trận</td>
                            <td>Thắng</td>
                            <td>Thua</td>
                            <td>HS</td>
                            <td>Điểm</td>
                        </tr>
                        <tr className='rank__team top-1'>
                            <td>1</td>
                            <td>SGP</td>
                            <td>14</td>
                            <td>39</td>
                            <td>10</td>
                            <td>32</td>
                            <td>39</td>
                        </tr>
                        <tr className='rank__team top-2'>
                            <td>2</td>
                            <td>VGM</td>
                            <td>14</td>
                            <td>37</td>
                            <td>15</td>
                            <td>25</td>
                            <td>37</td>
                        </tr>
                        <tr className='rank__team top-3'>
                            <td>3</td>
                            <td>FL</td>
                            <td>14</td>
                            <td>35</td>
                            <td>19</td>
                            <td>16</td>
                            <td>35</td>
                        </tr>
                        <tr className='rank__team top-4'>
                            <td>4</td>
                            <td>BOX</td>
                            <td>14</td>
                            <td>32</td>
                            <td>19</td>
                            <td>13</td>
                            <td>32</td>
                        </tr>
                        <tr className='rank__team top-5'>
                            <td>5</td>
                            <td>CES</td>
                            <td>14</td>
                            <td>21</td>
                            <td>36</td>
                            <td>-15</td>
                            <td>21</td>
                        </tr>
                        <tr className='rank__team top-6'>
                            <td>6</td>
                            <td>HEV</td>
                            <td>14</td>
                            <td>21</td>
                            <td>36</td>
                            <td>-15</td>
                            <td>21</td>
                        </tr>
                        <tr className='rank__team top-7'>
                            <td>7</td>
                            <td>B2F</td>
                            <td>14</td>
                            <td>21</td>
                            <td>36</td>
                            <td>-15</td>
                            <td>18</td>
                        </tr>
                        <tr className='rank__team top-8'>
                            <td>8</td>
                            <td>FAP</td>
                            <td>14</td>
                            <td>21</td>
                            <td>36</td>
                            <td>-15</td>
                            <td>17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RankTable;
