import Text = Phaser.GameObjects.Text;
import Image = Phaser.GameObjects.Image;

export default class GameScene extends Phaser.Scene {
    private readonly FONT_SIZE = 32;

    private _image: Image;
    private _text: Text;

    constructor() {
        super({key: "GameScene"});
    }

    protected create() {
        const {VITE_NICE_PARAMETER} = import.meta.env;

        // Add a lovely image
        this._image = this.add.image(this.scale.width / 2, this.scale.height / 2, "feather").setOrigin(0.5, 0.5);

        // Add some nice text in the middle
        this._text = this.add.text(0, (this.scale.height - this.FONT_SIZE) * 0.5, <string>VITE_NICE_PARAMETER, {
            align: "center",
            color: "#000000",
            fixedWidth: this.scale.displaySize.width,
            fontFamily: "monospace",
            fontSize: this.FONT_SIZE + "px"
        });

        // Make it do something a little bit
        this.tweens.add({
            alpha: 0,
            duration: 4096,
            ease: "Cubic",
            loop: -1,
            targets: this._text,
            yoyo: true,
        });

        // Make sure we rescale the game when the window resizes
        this.scale.on("resize", (gameSize) => {
            const {height, width} = gameSize;

            // Keep stuff nice and centered
            this._image.setPosition(width * 0.5, height * 0.5);
            this._text.y = (height - this.FONT_SIZE) * 0.5;
            this._text.setFixedSize(width, this._text.height);
        });
    }

    protected preload() {
        this.load.image("feather", "assets/feather.png");
    }
}