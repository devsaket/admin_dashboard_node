import { toast } from 'react-toastify';

export function getFormattedDate(date){
    let d = new Date(date)

    let d1 = d.getDate()
    let m1 = d.getMonth()+1
    let y1 = d.getFullYear()

    if(m1<10){
        m1 = '0'+m1
    }
    if(d1<10){
        d1 = '0'+d1
    }

    return d1+'/'+ m1 + "/"+ y1
}



// React Toastify
export const showToastMessage = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT
    });
};