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
        this.elementBindings.push({element: element, attribute: boundAttribute});
        element[boundAttribute] = this.value;
    }
}