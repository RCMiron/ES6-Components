import {Component} from "../core/component";

export class VanillaComponent {
    constructor(inputs) {
        this.boundProps = inputs;
        const template = `
                <div data-text="label" data-title="title"></div>
        `;

        this.component = new Component(template, this.boundProps);
    }
}