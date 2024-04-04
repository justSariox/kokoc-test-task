import { Router } from "@/app/routes";
import { Provider } from "react-redux";
import { store } from "@/app/store";

function App() {

    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
}

export { App }