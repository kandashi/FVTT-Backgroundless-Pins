import { BackgroundlessControlIcon } from "./backgroundless-control-icon.js";


Hooks.on("init", () => {
    // Override map notes to use the BackgroundlessControlIcon
    // the content of this method is copied from foundry.js:35629 (foundry version 0.6.2)
    Note.prototype._drawControlIcon = function() {
        let tint = this.data.iconTint ? colorStringToHex(this.data.iconTint) : null;
        let icon = new BackgroundlessControlIcon({texture: this.data.icon, size: this.size, tint: tint});
        icon.x -= (this.size / 2);
        icon.y -= (this.size / 2);
        return icon;
    }
});
