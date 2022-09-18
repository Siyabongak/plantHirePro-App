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
        bgColor:"white",
        bdrColor:"#c49000"
    },
    {
        name:"390D",
        type:"Excavator",
        company:"SLS plant hire",
        image:excavator,
        bgColor:"white",
        bdrColor:"#c49000"
    },
    {
        name:"B40D",
        type:"ADT",
        company:"Bob's Earth moving",
        image:adt,
        bgColor:"white",
        bdrColor:"#c49000"
    },
    {
        name:"CAT 140H",
        type:"Grader",
        company:"SCRIBANTE",
        image:grader,
        bgColor:"white",
        bdrColor:"#c49000"
    },
    
]

export default machineData;