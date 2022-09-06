//import images from our assets folder
import dozer from "../../assets/Dozer.jpg"
import grader from "../../assets/grader.png"
import excavator from "../../assets/excavator.jpg"
import adt from "../../assets/ADT.jpg"

const machineData = [
    {
        name:"D11",
        type:"Dozer",
        company:"CML",
        image:dozer,
        bgColor:"white"
    },
    {
        name:"390D",
        type:"Excavator",
        company:"SLS plant hire",
        image:excavator,
        bgColor:"white"
    },
    {
        name:"B40D",
        type:"ADT",
        company:"Bob's Earth moving",
        image:adt,
        bgColor:"white"
    },
    {
        name:"UHP 175",
        type:"Grader",
        company:"SCRIBANTE",
        image:grader,
        bgColor:"white"
    },
]

export default machineData