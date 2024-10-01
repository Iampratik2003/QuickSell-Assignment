import Nopriority from '../icons_FEtask/No-priority.svg'
import Lowpriority from '../icons_FEtask/Img - Low Priority.svg'
import Medpriority from '../icons_FEtask/Img - Medium Priority.svg'
import Highpriority from '../icons_FEtask/Img - High Priority.svg'
import Urgentpriority from '../icons_FEtask/SVG - Urgent Priority colour.svg'
import BackLog from '../icons_FEtask/Backlog.svg'
import InProgress from '../icons_FEtask/in-progress.svg'
import Done from '../icons_FEtask/Done.svg'
import Cancelled from '../icons_FEtask/Cancelled.svg'
import Todo from '../icons_FEtask/To-do.svg'


const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <img src={Nopriority} alt="" width={15} height={15}/> },
    { title: "low", color: "lightgray", icon: <img src={Lowpriority} alt="" width={15} height={15}/> },
    { title: "medium", color: "gray", icon: <img src={Medpriority} alt="" width={15} height={15}/>  },
    { title: "high", color: "black", icon: <img src={Highpriority} alt="" width={15} height={15}/>  },
    { title: "urgent", color: "orange", icon: <img src={Urgentpriority} alt="" width={15} height={15}/>  }
];
export const status = [
    { title: "backlog", color: "black", icon: <img src={BackLog} alt="" width={15} height={15}/>},
    { title: "todo", color: "lightgrey", icon: <img src={Todo} alt="" width={15} height={15}/> },
    { title: "in progress", color: "#EBCB62", icon: <img src={InProgress} alt="" width={15} height={15}/> },
    { title: "done", color: "#606ACB", icon: <img src={Done} alt="" width={15} height={15}/>  },
    { title: "cancelled", color: "gray", icon:  <img src={Cancelled} alt="" width={15} height={15}/> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <img src={BackLog} alt="" width={15} height={15}/>,
    },
    todo: {
        color: "lightgrey",
        icon:  <img src={Todo} alt="" width={15} height={15}/>,
    },
    "in progress": {
        color: "#EBCB62",
        icon:  <img src={InProgress} alt="" width={15} height={15}/>,
    },
    done: {
        color: "#606ACB",
        icon:  <img src={Done} alt="" width={15} height={15}/>,
    },
    cancelled: {
        color: "gray",
        icon: <img src={Cancelled} alt="" width={15} height={15}/>,
    },
};
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};