import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;
import GameScene from "./scenes/GameScene";
import {Game} from "phaser";

const config: GameConfig = {
    backgroundColor: "#ff0040",
    render: {
        pixelArt: true,
    },
    type: Phaser.AUTO,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        fullscreenTarget: "app",
        mode: Phaser.Scale.RESIZE,
        parent: "phaser-game",
        zoom: 1,
    },
    scene: [
        GameScene
    ],
};

new Game(config);