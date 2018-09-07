export class DataBinding {
    constructor(binding) {
        this.elementBindings = [];
        this.value = binding.object[binding.property];
        Object.defineProperty(binding.object, binding.property, {
            set: this.setter.bind(this),
            get: this.getter.bind(this)
        });
        binding.object[binding.property] = this.value;
    }

    getter() {
        return this.value;
    }

    setter(val) {
        this.value = val;
        if (this.elementBindings) {
            this.elementBindings.forEach((b) => {
                b.element[b.attribute] = val;
            });
        }
    }

    addBinding(element, boundAttribute) {
        const binding = {
            element: element,
            attribute: boundAttribute
        };
        this.elementBindings.push(binding);
        element[boundAttribute] = this.value;
    }
}