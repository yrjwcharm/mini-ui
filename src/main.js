import { createApp } from 'vue'
import {
    ActionBar,
    Search,
    Picker,
    Uploader,
    Area,
    ActionBarIcon,
    ActionBarButton,
    Divider,
    Popup,
    Overlay,
    Loading,
    Dialog,
    ContactCard,
    Form,
    AddressEdit,
    AddressList,
    Field,
    CellGroup,
    Cell,
    SwipeCell,
    Icon,
    Stepper,
    Card,
    Checkbox,
    CheckboxGroup,
    Button,
    Swipe,
    SwipeItem,
    PullRefresh,
    List,
    Tab,
    Tabs,
    SubmitBar,
    Toast,
    Switch
} from 'vant'
import App from './App.vue'
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式
import '@/common/style/reset.css'
const app = createApp(App) // 创建实例

app.use(ActionBarButton).use(Switch).use(Toast).use(Uploader).use(Area).use(Picker).use(Search).use(ActionBarIcon).use(ActionBar).use(Divider).use(Popup).use(Overlay).use(Loading).use(Dialog).use(ContactCard).use(Form).use(AddressEdit).use(AddressList).use(Field).use(CellGroup).use(Cell).use(SwipeCell).use(Icon).use(Stepper).use(Card).use(Button).use(Swipe).use(SwipeItem).use(PullRefresh).use(List).use(Tab).use(Tabs).use(SubmitBar).use(Checkbox).use(CheckboxGroup)
app.use(router)
app.use(store)
app.mount('#app')
