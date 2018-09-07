import {Component} from "../core/component";

export class VanillaComponent extends Component {
    constructor(inputs) {
        const boundProps = inputs;
        const template = `
                <div data-title="title">
                    <span data-text="title"></span>
                    <span data-text="label"></span>
                </div>
        `;
        super(template, boundProps);
    }
}