import {VanillaComponent} from "./components/vanilla.component";

class AppComponent {
    constructor() {
        const data = {
            label: "Some input label",
            title: "This is a component with input data"
        };

        document.getElementById("app-container")
                .appendChild(new VanillaComponent(data).template);

        setTimeout(() => {
            data.label = 'Changed'
        }, 3000);
    }
}

new AppComponent();
