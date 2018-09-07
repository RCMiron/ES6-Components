import {DataBinding} from "./data-binding";

const boundAttrs = {
    title: 'title',
    text: 'innerText',
    value: 'value'
};

export class Component {
    constructor(template, boundProps) {
        const t = document.createElement('div');
        t.innerHTML = template;
        this.createBindings(boundProps);
        this.bindElement(t, boundProps);
        return {template: t};
    }

    createBindings(props) {
        this.bindings = {};
        for (const prop in props) {
            if (props.hasOwnProperty(prop)) {
                this.bindings[prop] = new DataBinding({object: props, property: prop});
            }
        }
    }

    bindElement(element, boundProps) {
        const dataSet = element.dataset;
        for (const data in dataSet) {
            if (dataSet.hasOwnProperty(data) && data in boundAttrs && dataSet[data] in boundProps) {
                this.bindings[dataSet[data]].addBinding(element, boundAttrs[data]);
            }
        }
        element.childNodes.forEach(childNode => this.bindElement(childNode, boundProps));
    }
}