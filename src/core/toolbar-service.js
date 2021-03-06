
export default class ToolbarService {

    constructor() {
        this.buttons = [];
        this.$wp = window.angularize_server;
    }

    getButtons() { 
        return this.buttons
    }

    add(button) {

        // if user didn't specify an index, then it's last
        if (!button.position)
            button.position = 1000;

        // if button already exist, don't add it.
        for (let b of this.buttons) {
            if (b.id == button.id) {
                console.debug(b.id, " already exists")
                return;
            }
        }

        // todo: remove sorting
        this.buttons.push(button);
        this.buttons.sort(function (a, b) {
            if (a.position < b.position)
                return -1;
            else if (a.position > b.position)
                return 1;
            else return 0;
        });

    }

    remove(button) {
        var index = this.buttons.indexOf(button);
        if (index > -1) {
            this.buttons.splice(index, 1);
        }
        else {
            console.debug(button.title, " not found");
        }
    }

    removeById(buttonId) {
        var button = this.buttons.filter(b => b.id == buttonId)[0]
        this.remove(button);
    }

    disable(button) {
        var index = this.buttons.indexOf(button);
        this.buttons[index].disabled = true;
    }

    enable(button) {
        var index = this.buttons.indexOf(button);
        this.buttons[index].disabled = false;
    }
}