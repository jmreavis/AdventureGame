A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Cell, Secret, Main, Graveyard, and Exit
- **2+ scenes *not* based on `AdventureScene`**: Intro, Outro1, and Outro2
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - emphasizeItem()- When the mouse is hovered over an applicable item, a tweens animation will be applied to it and its size will scale up. Upon moving the mouse cursor off the object, it will return to its previous size.
    - spriteDestroy()- Combines the associated actions of picking up an object (fade out and destroy from the scene once added to the inventory) into a single function.

Experience requirements:
- **4+ locations in the game world**: Dingy Cell, Secret Chamber, Main Chamber, Graveyard, and Castle Exterior
- **2+ interactive objects in most scenes**: Destructable wall in the Cell scene, leads to a key that can be picked up
- **Many objects have `pointerover` messages**: Painting in the main chamber has a mouseover description, as well as the tombstone in the Graveyard.
- **Many objects have `pointerdown` effects**: Doors and passageways must be clicked on to traverse. Items need to be clicked on to be added to the inventory
- **Some objects are themselves animated**: All items that may be picked up are animated via the enhancement function enhanceItem()

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

- Prison cell background image: SybariteVI via DeviantArt: https://www.deviantart.com/sybaritevi/art/Prison-cell-concept-189479989. Edited via Krita to add "cracks" in the wall and a keyhole icon on the cell door

- Key, brick, and pickaxe emoji via https://emojiterra.com/

- Secret room background image via https://www.dreamstime.com/creepy-castle-basement-fantasy-arched-columns-image104230232. Edited in Krita to contain extra spooky details

- Main chamber background via https://coolhunting.com/travel/inside-an-abandoned-italian-castle-that-looks-untouched/. Edited in Krita to add additional details

- Graveyard image via https://stock.adobe.com/bg/images/3d-illustration-of-spooky-graveyard-at-halloween/534603384. Edited in Krita to add additional details

- Exit background image via philipslotte https://www.reddit.com/r/evilbuildings/comments/ebzyul/a_spooky_castle_in_germany/. Monster drawn in via Krita
Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.