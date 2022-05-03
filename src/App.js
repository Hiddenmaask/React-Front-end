import starry from './starry.jpg';
import wheel from './wheel.svg';
import './App.scss';
import bed from './seabed.svg';
import rock1 from './rock1-whole.svg'
import rock1b from './rock1-broken.svg'
let clicked1 = 0;

function changeImage(e){
    e.preventDefault()
    clicked1 = clicked1 + 1;



    if (document.getElementById("rock1").src != rock1b && clicked1 == 5) {
        document.getElementById("rock1").src = rock1b;
        console.log("change")
    } else {
        document.getElementById("rock1").style.animation += "shake 1s";
        setTimeout(function(){
            document.getElementById("rock1").style.animation = "";
        }, 1000);
        console.log("no change")
    }

}

function App() {
    var scrollTimer = -1;




    window.onscroll = e => {

        console.log("scrolling")

        if(e.deltaY >= 0) {
            // Scrolling Down with mouse
            console.log(e.deltaY)
            console.log('Scroll Down');
            document.getElementById("wheel").style.animation += "rotate 1s linear infinite reverse";
        } else {
        // Scrolling Up with mouse
        console.log(e.deltaY)

        document.getElementById("wheel").style.animation += "rotate 1s linear infinite";
        }


        if (scrollTimer != -1)
            clearTimeout(scrollTimer);

        scrollTimer = window.setTimeout("document.getElementById(\"wheel\").style.animation = \"\";", 500);

        }


        /*
        if(e.deltaY >= 0){
            // Scrolling Down with mouse
            console.log(e.deltaY)
            console.log('Scroll Down');
            document.getElementById("wheel").style.animation = "rotate 1s linear infinite reverse";
            //wait 1s and then pause the animation
            setTimeout(function(){
                document.getElementById("wheel").style.animation = "";
            }, 1000);

        } else {
            // Scrolling Up with mouse
            console.log(e.deltaY)

            document.getElementById("wheel").style.animation = "rotate 1s linear infinite ";
        }



    }

         */




    return (

        <div className="App">

            <header className="App-header">
                <div className={"wheel-wrapper"}>
                    <div className={"wheelfloat"}>
                        <div className={"wheel"} id={"wheel"}>
                            <img  src={wheel}></img>

                        </div>
                    </div>
                    <ul className={"bubbles2"} >
                        <li draggable={"true"} ></li>
                        <li draggable={"true"} ></li>
                        <li draggable={"true"} ></li>
                        <li draggable={"true"} ></li>
                        <li draggable={"true"} ></li>
                        <li draggable={"true"} ></li>
                        <li draggable={"true"} ></li>
                    </ul>
                </div>





            </header>




            <main className={"App-body"}>

                <ul className={"bubbles"} >
                    <li draggable={"true"} ></li>
                    <li draggable={"true"}></li>
                    <li draggable={"true"}> </li>
                    <li draggable={"true"}></li>
                    <li draggable={"true"}></li>
                    <li draggable={"true"}></li>
                    <li draggable={"true"}></li>
                </ul>



                <div className={""}>
                    <div className={"typewriter"}>
                        <p>
                            Scroll down
                        </p>
                    </div>
                </div>
                <div className={"break"}></div>

                <div className={""}>
                    <div className={"typewriter"}>
                        <p>
                            Hi there
                        </p>
                    </div>
                </div>
                <div className={"seabed-wrapper"}>
                    <img src={bed} className={"seabed"}></img>

                    <img src={rock1} className={"rock1"} id={"rock1"} onClick={changeImage}></img>
                </div>






            </main>


        </div>
    );

}




export default App;

