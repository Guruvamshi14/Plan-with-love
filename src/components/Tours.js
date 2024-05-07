
import Card from './Card';




function Tours({tours,removeTour}){


    // function c(){
    //     console.log(tours);
    // }


    return (
        <div className='container'>

            <div>
                <h2 className='title'>Plan with Love</h2>
            </div >

            <div className='cards'>

            {
                

                tours.map((t) => {
                    return <Card {...t} removeTour={removeTour}></Card>
                } )

            }

            </div>

        </div>

    );
}

export default Tours;



// import Card from './Card'
// function Tours({tours}) {
//     return (
//         <div className='container'>
//             <div>
//                 <h2 className='title'> Plan With Love</h2>
//             </div>
//             <div className='cards'>
//                 {
//                     tours.map( (tour) => {
//                         return <Card {...tour}></Card>
//                     } )
//                 }
//             </div>
//         </div>
//     );
// }

// export default Tours;
