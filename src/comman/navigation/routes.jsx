import View from "../../pages/view/view.jsx";
import Action from "../../pages/Action/Action.jsx";

const routes =[
    {
        name:'view',
        key:'view',
        path:'/view',
        component: <View/>
    },
    {
        name:'Action',
        key:'action',
        path:'/action',
        component: <Action/>
    }


];

export default routes;








