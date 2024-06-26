import react, { useState } from 'react';
import { ReactDOM } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Attendence.css";
const val=4;


const Attendence=()=>{
  const [attended, setAttended] = useState(new Array(5).fill(0));
    const [missed, setMissed] = useState(new Array(5).fill(0));
    const [percent,setPercent]=useState(0);

    const handleIncrement = (index) => {
        const updatedAttended = [...attended];
        updatedAttended[index]++;
        setAttended(updatedAttended);
    };

    const handleDecrement = (index) => {
        const updatedAttended = [...attended];
        if (updatedAttended[index] > 0) {
            updatedAttended[index]--;
            setAttended(updatedAttended);
        }
    };

    const handleMissedIncrement = (index) => {
        const updatedMissed = [...missed];
        updatedMissed[index]++;
        setMissed(updatedMissed);
    };

    const handleMissedDecrement = (index) => {
        const updatedMissed = [...missed];
        if (updatedMissed[index] > 0) {
            updatedMissed[index]--;
            setMissed(updatedMissed);
        }
    };
    const calcPercentage=()=>{
        var totalclass=0;
        attended.map(val=>{totalclass+=val});
        missed.map(val=>totalclass+=val);
        if(totalclass==0){alert("The session has not commenced yet!!");return;}
        
        console.log("totalclass are ",totalclass);
        var attendedclass=0;
        attended.map(val=>{attendedclass+=val});
        console.log("totalclass attended are ",attendedclass);
        var percent=(attendedclass*100)/totalclass;
        console.log(percent);
        setPercent(Math.round(percent,2));
        if(percent<75){
            console.log("less attendence")
            toast.error("ATTENDENCE IS LESS THAN 75%")
        }
    }
    return(
        <div className='attendence'>
           <div className='attendence-box'>
             <h1>ATTENDENCE TRACKER</h1>
           </div>
           <div>
            <table className='table-box'>
                <tr>
                    <th className='subject'>SUBJECT</th> <th className='attended'>CLASS ATTENDED</th> <th className='missed' >CLASS MISSED</th>
                </tr>
                   {attended.map((value, index) => (
                        <tr key={index}>
                            <td className='subject'>DCCN</td>
                            <td className='attended'>
                                <div>
                                    <RemoveCircleOutlineIcon onClick={() => handleDecrement(index)} />
                                    <span>{value}</span>
                                    <AddCircleOutlineIcon onClick={() => handleIncrement(index)} />
                                </div>
                            </td>
                            <td className='missed'>
                                <div>
                                <RemoveCircleOutlineIcon onClick={() => handleMissedDecrement(index)} />
                                <span>{missed[index]}</span>
                                <AddCircleOutlineIcon onClick={() => handleMissedIncrement(index)} />
                                </div>
                            </td>
                        </tr>
                    ))}

           
            </table>
            <div className='conclusion'>
                <button className='calc-attendence' onClick={calcPercentage}>Attendence:</button><span className='percentage'>{percent}%</span>
            </div>
           </div>
            <ToastContainer />
        </div>
    )
}
export default Attendence;