import {VanillaComponent} from "./components/vanilla.component";

class AppComponent {
    constructor() {
        const data = {
            label: "Some input label",
            title: "This is a component with input data"
        };
        const myDOMElement = document.getElementById("app-container");
        const component = new VanillaComponent(data).component;
        myDOMElement.appendChild(component.template);
        setTimeout(() => {
            data.label = 'Changed'
        }, 2000);
    }
}

new AppComponent();
