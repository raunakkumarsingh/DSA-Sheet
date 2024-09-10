import React, { useEffect,useState  } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import Progressbar from '../components/Progress/Progressbar';
import data from './data.json';

function Card({ mode }) {
    const navigate = useNavigate();
    const [cardColor,setCardColor]=useState({
        800:1,
        1000:1,
        1100:1,
        1200:1,
        1300:1,
        1400:1,
        1500:1,
        1600:1
    });


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(()=>{
        if(localStorage.getItem('ratingData')){
           const storedData = JSON.parse(localStorage.getItem('ratingData'));
        //    console.log(storedData.error);
          if(!storedData.error!=="Data not found"){
            setCardColor({
                800: storedData[800]?.length ,
                900: storedData[900]?.length,
                1000: storedData[1000]?.length,
                1100: storedData[1100]?.length,
                1200: storedData[1200]?.length,
                1300: storedData[1300]?.length,
                1400: storedData[1400]?.length,    
                1500: storedData[1500]?.length,
                1600: storedData[1600]?.length
            });
          }
           
            //    console.log(storedData[800].length==32);
            // console.log(cardColor);
        }       
    },[localStorage.getItem('cpProgress')])
    // Set background color based on mode
    useEffect(() => {
        document.body.style.background = mode === "light" ? "white" : "#0E1C25";
    }, [mode]);

    return (
        <>
            <Progressbar 
    sheetName="CP Sheet" 
    totalQuestions={279} 
    completedQuestions={localStorage.getItem('cpProgress')} 
    mode={mode} 
/>
            <div className='container my-3 d-flex justify-content-between'>
                <div className='row'>
                    {data.map((element) => (
                        <div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center' key={element.Rating}>
                            <div className={`card-${cardColor[element.Rating]==32 ? 'green':mode} my-2 mx-1`} style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h1 className={`card-${cardColor[element.Rating]==32 ? 'green':mode}-title smallh1`}>Rating-{element.Rating}</h1>
                                    <p className={`card-${cardColor[element.Rating]==32 ? 'green':mode}-text`}>Total Questions - {element.questions}</p>
                                    <p className={`card-${cardColor[element.Rating]==32 ? 'green':mode}-text`}>Questions Solved - {cardColor[element.Rating]-1 || 0}</p>
                                    <div className='d-flex justify-content-end'>
                                        <Link 
                                            to={`/cpsheet/${element.Rating}`} 
                                            className="btn-light btn-primary"
                                        >
                                            GO
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Card;
