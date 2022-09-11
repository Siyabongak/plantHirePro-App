import dozer1 from "../../assets/Dozer.jpg"
import excavator1 from "../../assets/excavator.jpg"
import adt1 from "../../assets/ADT.jpg"
import grader1 from "../../assets/grader.png"

const MachineList = [
    {
        name: "Komatsu D475A",
        type: "Dozer",
        rate: "R 670/h",
        company: "CML Pioneers",
        hours: "5800.6 hours",
        Image:dozer1,
        contact:"034 104 1112",
        coords: {latitude:-28.017334, longitude:30.060345},
    },
    {
        name: "Caterpillar 390D",
        type: "Excavator",
        rate: "R 1050/h",
        company: "SlS Plant Hire",
        hours: "3467.6 hours",
        Image:excavator1,
        contact:"034 612 0000",
        coords: {latitude:-27.925390, longitude:30.165665},
    },
    {
        name: "Bell B40D",
        type: "Articulated Dump Truck",
        rate: "R 440/h",
        company: "Bob's Earth Moving",
        hours: "45999.3 hours",
        Image:adt1,
        contact:"034 123 9517",
        coords: {latitude:-28.047285, longitude:30.020985},
    },
    {
        name: "Caterpillar 140H",
        type: "Grader",
        rate: "R 400/h",
        company: "Scribante",
        hours: "36.5 hours",
        Image:grader1,
        contact:"034 745 9668",
        coords: {latitude:-28.036331, longitude:30.025365},
    }
]

export default MachineList;