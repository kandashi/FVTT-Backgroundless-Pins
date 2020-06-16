export class BackgroundlessControlIcon extends ControlIcon {
    /**
     * Override ControlIcon#draw to remove drawing of the background.
     * 
     * The content of this method is copied from foundry.js:30077 (foundry version 0.6.2)
     */
    async draw() {
        // Draw border
        this.border.clear().lineStyle(2, this.borderColor, 1.0).drawRoundedRect(...this.rect, 5).endFill();
        this.border.visible = false;

        // Draw icon
        this.icon.texture = await loadTexture(this.texture);
        this.icon.width = this.icon.height = this.size;
        this.icon.tint = Number.isNumeric(this.tintColor) ? this.tintColor : 0xFFFFFF;
        return this;
    }
}