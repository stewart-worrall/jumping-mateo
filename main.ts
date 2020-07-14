enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walking_right,
    Walking_left,
    Idle_right,
    Idle_left
}
namespace SpriteKind {
    export const coin = SpriteKind.create()
}
function setLevel (num: number, mySprite: Sprite) {
    scene.setBackgroundColor(6)
    scene.setTile(14, img`
e d d d d d d d d f e d d d d e 
d e e e e e e e e f d e e e e f 
d e e e e e e e e f d e e e e f 
d e e e e e e f e f d e e e e f 
d e e e e e e e e f d f e e e f 
d e e e e e e e e f e f f f f e 
d e e e e e e e e f d d d d d f 
d e e e f e e e e f d e e e e f 
d e e e e e e e e f d e e e e f 
d e e e e e e f e f d e e e e f 
d e e e e e e e e f d e e e e f 
f f e e e e e e f d e e e f e f 
d d f f e e e e f d e e e e e f 
d e d d f f f f d e e e e e e f 
d e e e d d d f d e e e e e e f 
d e e e e e e f d e e e e e f f 
`, true)
    scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 
d 7 e 7 5 7 7 7 e f 7 7 7 e 7 f 
d e e e 7 7 e e e f d 7 e e e f 
d e e e e e e f e f d e e e e f 
d e e e e e e e e f d f e e e f 
d e e e e e e e e f e f f f f e 
d e e e e e e e e f d d d d d f 
d e e e f e e e e f d e e e e f 
d e e e e e e e e f d e e e e f 
d e e e e e e f e f d e e e e f 
d e e e e e e e e f d e e e e f 
f f e e e e e e f d e e e f e f 
d d f f e e e e f d e e e e e f 
d e d d f f f f d e e e e e e f 
d e e e d d d f d e e e e e e f 
d e e e e e e f d e e e e e f f 
`, true)
    scene.setTile(5, img`
7 . 7 . 7 . 7 . 7 . 7 . 7 . 7 . 
. 7 . 7 . 7 . 7 . f . 7 . e . f 
d . e . 7 . e . e . d . e . e . 
. e . e . e . f . f . e . e . f 
d . e . e . e . e . d . e . e . 
. e . e . e . e . f . f . f . e 
d . e . e . e . e . d . d . d . 
. e . e . e . e . f . e . e . f 
d . e . e . e . e . d . e . e . 
. e . e . e . f . f . e . e . f 
d . e . e . e . e . d . e . e . 
. f . e . e . e . d . e . f . f 
d . f . e . e . f . e . e . e . 
. e . d . f . f . e . e . e . f 
d . e . d . d . d . e . e . e f 
. e . e . e . f . e . e . e . f 
`, true)
    scene.setTile(2, img`
4 4 4 4 f 4 4 4 4 4 4 4 4 4 4 4 
2 2 2 e f 4 4 2 2 2 2 2 2 2 2 2 
2 2 2 e f 4 2 2 2 2 2 2 2 2 2 2 
2 2 2 e f 4 2 2 2 2 2 2 2 2 2 2 
2 2 2 e f 4 2 2 2 2 2 2 2 2 2 2 
2 2 e e f 4 2 2 2 2 2 2 2 2 2 2 
e e e e f 4 e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
4 4 4 4 4 4 4 4 4 4 4 f 4 4 4 4 
2 2 2 2 2 2 2 2 2 2 e f 4 4 2 2 
2 2 2 2 2 2 2 2 2 2 e f 4 2 2 2 
2 2 2 2 2 2 2 2 2 2 e f 4 2 2 2 
2 2 2 2 2 2 2 2 2 2 e f 4 2 2 2 
2 2 2 2 2 2 2 2 2 e e f 4 2 2 2 
e e e e e e e e e e e f 4 e e e 
f f f f f f f f f f f f f f f f 
`, true)
    scene.setTile(3, img`
2 2 5 4 2 2 2 2 5 2 2 2 4 2 2 2 
2 2 2 2 2 2 4 2 2 2 2 5 5 2 5 2 
4 2 2 2 5 5 2 2 4 5 2 5 5 2 2 2 
5 2 2 2 5 5 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 
2 2 4 2 2 2 2 2 2 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 4 2 2 2 4 4 2 2 2 2 
2 2 2 4 4 2 2 2 2 2 4 4 2 5 5 2 
2 2 2 4 4 2 2 2 5 2 2 2 2 5 5 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 5 2 2 4 2 2 2 2 2 2 2 2 2 4 2 
2 2 2 2 2 2 2 5 2 2 2 2 2 2 2 2 
2 2 2 2 4 2 2 2 2 2 2 2 5 2 2 2 
2 2 2 5 2 2 2 2 2 2 4 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
    scene.setTile(8, img`
1 1 1 1 9 9 9 9 9 9 1 9 9 1 1 1 
1 1 1 1 1 9 9 9 9 9 9 9 9 9 1 1 
1 1 1 1 1 1 9 9 1 9 9 9 9 9 9 1 
1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 
9 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 
9 9 1 1 1 1 1 1 1 9 9 9 9 1 9 9 
9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 1 9 9 9 9 1 1 1 1 1 1 1 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 9 9 9 1 1 1 1 1 1 1 
1 9 9 9 1 1 1 9 9 9 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 9 1 1 1 1 1 
1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 
`, true)
    scene.setTile(9, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 9 1 1 1 1 1 1 1 1 
9 1 1 1 1 1 1 1 9 9 1 1 9 9 9 1 
9 9 1 1 1 1 1 1 1 9 9 9 9 1 9 9 
9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 9 9 1 9 
9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 1 9 9 9 9 1 1 1 1 1 1 1 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 9 9 9 1 1 1 1 1 1 1 
1 9 9 9 1 1 1 9 9 9 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 9 1 1 1 1 1 
1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 
`, true)
    scene.setTile(15, img`
. . . . . . . c c c a c . . . . 
. . c c b b b a c a a a c . . . 
. c c a b a c b a a a b c c . . 
. c a b c f f f b a b b b a . . 
. c a c f f f 8 a b b b b b a . 
. c a 8 f f 8 c a b b b b b a . 
c c c a c c c c a b c f a b c c 
c c a a a c c c a c f f c b b a 
c c a b 6 a c c a f f c c b b a 
c a b c 8 6 c c a a a b b c b c 
c a c f f a c c a f a c c c b . 
c a 8 f c c b a f f c b c c c . 
. c b c c c c b f c a b b a c . 
. . a b b b b b b b b b b b c . 
. . . c c c c b b b b b c c . . 
. . . . . . . . c b b c . . . . 
`, true)
    scene.setTile(1, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 5 . . . 
. . . . . . . 2 2 2 2 2 c . . . 
. . . 2 2 2 2 2 2 2 2 4 c . . . 
. . . . 4 2 2 2 2 2 2 4 c . . . 
. . . . . 4 4 2 2 2 4 4 c . . . 
. . . . . . . 4 4 4 . c c . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . c c . . . 
`, true)
    if (num == 1) {
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . a . . . . . . . . 1 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`)
        myTile = scene.getTile(0, 5)
        myTile.place(mySprite)
        effects.clouds.startScreenEffect()
    } else if (num == 2) {
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . 7 7 7 
. . . . . . . . . . . 7 7 e e e 
. . . . . . . . . 7 7 e e e e e 
. . . . . . . 7 7 e e e e e e e 
. . . . . 7 7 e e e e e e e e e 
. . . 7 7 e e e e e e e e e e e 
7 7 7 e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`)
        myTile = scene.getTile(0, 13)
        myTile.place(mySprite)
    } else if (num == 3) {
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
7 7 7 7 . . 7 7 7 7 . . 7 7 7 7 . . 7 7 7 7 . . 7 7 7 7 . . 7 7 
e e e e 3 3 e e e e 3 3 e e e e 3 3 e e e e 3 3 e e e e 3 3 e e 
`)
        myTile = scene.getTile(0, 5)
        myTile.place(mySprite)
    } else if (num == 4) {
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 . . . . . . 2 2 . . . . . . 2 2 2 . . 2 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
7 7 7 7 . . . . 7 7 7 7 . . . . 7 7 7 7 . . . . . . . . . . 7 7 
e e e e 3 3 3 3 e e e e 3 3 3 3 e e e e 3 3 3 3 3 3 3 3 3 3 e e 
`)
        myTile = scene.getTile(0, 5)
        myTile.place(mySprite)
    } else if (num == 5) {
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . e e 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . e e 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
. . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . e e 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e 
. . . . . . . . . . . . . . . . 7 7 7 7 . . . . . . . . . . e e 
. . . . . . . . . . . . . . . . e e e e 3 3 3 3 3 3 3 3 3 3 e e 
. . . . . . . . . . . . . 2 2 . e e e e 3 3 3 3 3 3 3 3 3 3 e e 
. . . . . . . . . . . . . . . . e e e e 3 3 3 3 3 3 3 3 3 3 e e 
. . . . . . . . 7 7 7 7 . . . . e e e e 3 3 3 3 3 3 3 3 3 3 e e 
. . . . . . . . e e e e 3 3 3 3 e e e e 3 3 3 3 3 3 3 3 3 3 e e 
. . . . . 2 2 . e e e e 3 3 3 3 e e e e 3 3 3 3 3 3 3 3 3 3 e e 
. . . . . . . . e e e e 3 3 3 3 e e e e 3 3 3 3 3 3 3 3 3 3 e e 
7 7 7 7 . . . . e e e e 3 3 3 3 e e e e 3 3 3 3 3 3 3 3 3 3 e e 
e e e e 3 3 3 3 e e e e 3 3 3 3 e e e e 3 3 3 3 3 3 3 3 3 3 e e 
`)
        myTile = scene.getTile(0, 29)
        myTile.place(mySprite)
    } else if (num == 6) {
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
7 7 7 . . 7 7 . . 7 7 . . 7 7 . . 7 7 . . 7 7 . . 7 7 . . . . 7 7 . . 7 7 . . 7 7 . . 7 7 . . 7 . . 7 . . 7 . . 7 . . 7 . . 7 7 
e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e e 
`)
        myTile = scene.getTile(0, 5)
        myTile.place(mySprite)
    } else if (num == 7) {
        scene.setTile(3, img`
1 . . . . . . . 1 . . . . . . . 
9 1 . . . . . 1 9 1 . . . . . 1 
9 1 . . . . . 1 9 1 . . . . . 1 
9 9 1 . . . 1 9 9 9 1 . . . 1 9 
9 9 1 . . . 1 1 9 9 1 . . . 1 9 
9 9 9 1 . 1 1 1 1 9 9 1 . 1 9 9 
9 9 9 1 . 1 1 1 1 1 9 1 . 1 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 1 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 1 9 9 9 9 1 1 1 1 1 1 1 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 9 9 9 1 1 1 1 1 1 1 
1 9 9 9 1 1 1 9 9 9 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 9 1 1 1 1 1 
1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 
`, true)
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
9 9 9 9 9 9 9 . 9 9 9 9 9 9 9 . 9 9 9 9 9 9 9 . 9 9 9 9 9 9 9 9 
8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 3 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
        myTile = scene.getTile(0, 3)
        myTile.place(mySprite)
        effects.clouds.endScreenEffect()
        effects.blizzard.startScreenEffect()
    } else if (num == 8) {
        scene.setTile(3, img`
1 . . . . . . . 1 . . . . . . . 
9 1 . . . . . 1 9 1 . . . . . 1 
9 1 . . . . . 1 9 1 . . . . . 1 
9 9 1 . . . 1 9 9 9 1 . . . 1 9 
9 9 1 . . . 1 1 9 9 1 . . . 1 9 
9 9 9 1 . 1 1 1 1 9 9 1 . 1 9 9 
9 9 9 1 . 1 1 1 1 1 9 1 . 1 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 1 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 1 9 9 9 9 1 1 1 1 1 1 1 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 9 9 9 1 1 1 1 1 1 1 
1 9 9 9 1 1 1 9 9 9 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 9 1 1 1 1 1 
1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 
`, true)
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 . . . . 
. . . . . . . . 9 . . 9 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 9 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 9 9 9 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 9 9 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
9 9 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 9 9 9 9 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 9 9 9 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 9 9 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 9 9 9 . . . . 
. . . . . . . . 8 8 8 8 3 3 3 3 
. . . . . 9 9 . 8 8 8 8 8 8 8 8 
. . . . . . . . 8 8 8 8 8 8 8 8 
9 9 9 9 . . . . 8 8 8 8 8 8 8 8 
8 8 8 8 3 3 3 3 8 8 8 8 8 8 8 8 
`)
        myTile = scene.getTile(0, 29)
        myTile.place(mySprite)
        effects.blizzard.startScreenEffect()
    } else if (num == 9) {
        scene.setTile(3, img`
1 . . . . . . . 1 . . . . . . . 
9 1 . . . . . 1 9 1 . . . . . 1 
9 1 . . . . . 1 9 1 . . . . . 1 
9 9 1 . . . 1 9 9 9 1 . . . 1 9 
9 9 1 . . . 1 1 9 9 1 . . . 1 9 
9 9 9 1 . 1 1 1 1 9 9 1 . 1 9 9 
9 9 9 1 . 1 1 1 1 1 9 1 . 1 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 1 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 1 9 9 9 9 1 1 1 1 1 1 1 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 9 9 9 1 1 1 1 1 1 1 
1 9 9 9 1 1 1 9 9 9 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 9 1 1 1 1 1 
1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 
`, true)
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 9 9 9 9 9 
. . . . . . . . . . . . . 9 9 . . . . . . . . . 9 . . . 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 
. . . . . . . . . . . 9 . . . . 9 . . 9 . . 9 . . . . . . . 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 
. . . . . . . . . 9 . . . . . . . . . . . . . . . . . . . . 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 
. . . . . . . 9 . . . . . . . . . . . . . . . . 9 9 . . . . 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 
. . . . . 9 . . . . . . . . . . . . . . . . . . . . . . . . 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 8 8 
. . . 9 . . . . . . . . . . . . . . 9 9 . . . . . . . . . 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 8 8 8 
9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 3 8 8 8 8 
. . . 9 9 . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . . 3 8 8 8 8 8 
. . . . . . 9 9 . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . . 3 8 8 8 8 8 8 
. . . . . . . . . 9 9 . . . . . . . . . . . . . . 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . . 3 8 8 8 8 8 8 8 
. . . . . . . . . . . . 9 9 . . . . . . . . . . 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . . 3 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . 9 9 . . . . . . 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . . 3 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . 9 9 . . 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . . . . 3 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . 9 9 . . . . 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . . . . 3 3 3 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . 9 9 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . . . . 3 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . 9 9 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . . . . 3 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . 9 9 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . . . . 3 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . 9 9 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . . . . 3 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
9 9 . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . . 3 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
3 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
        myTile = scene.getTile(0, 42)
        myTile.place(mySprite)
        effects.blizzard.startScreenEffect()
    } else {
        scene.setTile(3, img`
1 . . . . . . . 1 . . . . . . . 
9 1 . . . . . 1 9 1 . . . . . 1 
9 1 . . . . . 1 9 1 . . . . . 1 
9 9 1 . . . 1 9 9 9 1 . . . 1 9 
9 9 1 . . . 1 1 9 9 1 . . . 1 9 
9 9 9 1 . 1 1 1 1 9 9 1 . 1 9 9 
9 9 9 1 . 1 1 1 1 1 9 1 . 1 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 1 9 9 9 
9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 1 9 9 9 9 1 1 1 1 1 1 1 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 
9 9 9 9 9 1 9 9 9 1 1 1 1 1 1 1 
1 9 9 9 1 1 1 9 9 9 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 9 1 1 1 1 1 
1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 
`, true)
        scene.setTile(1, img`
. . . . . c c c c c c . . . . . 
. . . 1 1 b b b b b b c c . . . 
. . 1 b b b c b b b b b b c . . 
. 1 b b b b b b 1 b b b b b c . 
. c b b b b b b b b c b b b c . 
c b b b b c c b b b b b b b b c 
c b b b c 1 b c b b b b b b b c 
c b b b b c c b b b b b c b b c 
c b b b b b b b b b b b b b b c 
c b b 1 b b b b b b c b b b b c 
c b b b b b b b b c b c b b b c 
. c b b b c b b b b c b b b c . 
. c b b b b b b b b b b b b c . 
. . c b b b b b b b b b b c . . 
. . . c c b b b b b b c c . . . 
. . . . . c c c c c c . . . . . 
`, true)
        scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . f . . . f . . . f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f . . . f . . . f . . . f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 9 9 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 9 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 9 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 9 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 9 9 . . 9 9 . . 9 9 . . 9 9 . . 9 9 . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 9 9 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 9 9 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
        myTile = scene.getTile(0, 43)
        myTile.place(mySprite)
        effects.blizzard.startScreenEffect()
    }
    for (let value of scene.getTilesByType(10)) {
        coin2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 4 5 5 . . . . . . 
. . . . . 5 5 4 5 5 . . . . . . 
. . . . . 5 5 4 5 5 . . . . . . 
. . . . . 5 5 4 5 5 . . . . . . 
. . . . . 5 5 4 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.coin)
        scene.place(value, coin2)
    }
    scene.setTile(10, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    game.splash("Level " + num)
    facingRight = 1
    animation.setAction(mySprite, ActionKind.Idle_right)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facingRight = 0
})
controller.combos.attachCombo("d+b", function () {
	
})
scene.onHitTile(SpriteKindLegacy.Player, 3, function (sprite) {
    info.changeLifeBy(-1)
    setLevel(level, mySprite)
    if (info.life() == 0) {
        game.over(false, effects.dissolve)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -160
        mySprite.startEffect(effects.trail, 500)
        music.jumpUp.play()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facingRight = 1
})
scene.onHitTile(SpriteKindLegacy.Player, 1, function (sprite) {
    info.changeScoreBy(1)
    info.changeLifeBy(1)
    if (level < 10) {
        level += 1
        setLevel(level, mySprite)
    } else {
        game.over(true, effects.confetti)
    }
})
function intitPlayer () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`, SpriteKindLegacy.Player)
    anim_idle_right = animation.createAnimation(ActionKind.Idle_right, 300)
    anim_idle_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_idle_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_idle_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d b d d b . . . . 
. . . . e d d d b d d b . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    animation.attachAnimation(mySprite, anim_idle_right)
    anim_idle_left = animation.createAnimation(ActionKind.Idle_left, 300)
    anim_idle_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . f d d f d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_idle_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . f d d f d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_idle_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . b d d b d e d e . . . . 
. . . . b d d b d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    animation.attachAnimation(mySprite, anim_idle_left)
    anim_walk_right = animation.createAnimation(ActionKind.Walking_right, 100)
    anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . d d . 4 4 4 4 . d d . . . 
. . . d d . 4 4 4 4 . d d . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . . e . . . . . 
. . . . . e . . . . e . . . . . 
. . . . . 2 . . . . 2 . . . . . 
`)
    anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_walk_right.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 2 4 4 4 2 . . . . . 
. . . . . d d 4 4 4 d . . . . . 
. . . . . d d 4 4 4 d . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
`)
    animation.attachAnimation(mySprite, anim_walk_right)
    anim_walk_left = animation.createAnimation(ActionKind.Walking_left, 100)
    anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . f d d f d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . f d d f d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . d d . 4 4 4 4 . d d . . . 
. . . d d . 4 4 4 4 . d d . . . 
. . . . . . e e e e . . . . . . 
. . . . . e . . . e . . . . . . 
. . . . . e . . . . e . . . . . 
. . . . . 2 . . . . 2 . . . . . 
`)
    anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . f d d f d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
`)
    anim_walk_left.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . f d d f d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . . d 4 4 4 d d . . . . . 
. . . . . d 4 4 4 d d . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . e e . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
`)
    animation.attachAnimation(mySprite, anim_walk_left)
    mySprite.ay = 300
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
    scene.cameraFollowSprite(mySprite)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -160
        mySprite.startEffect(effects.trail, 500)
        music.jumpUp.play()
    }
})
info.onLifeZero(function () {
	
})
let anim_walk_left: animation.Animation = null
let anim_walk_right: animation.Animation = null
let anim_idle_left: animation.Animation = null
let anim_idle_right: animation.Animation = null
let facingRight = 0
let coin2: Sprite = null
let myTile: tiles.Tile = null
let mySprite: Sprite = null
let level = 0
game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . d d 4 4 4 4 d d . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . 4 . . 4 . . . . . . 
`)
game.splash("Jumping Mateo")
info.setLife(5)
level = 1
info.setScore(0)
intitPlayer()
setLevel(level, mySprite)
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
game.onUpdate(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (controller.right.isPressed()) {
            animation.setAction(mySprite, ActionKind.Walking_right)
        } else if (controller.left.isPressed()) {
            animation.setAction(mySprite, ActionKind.Walking_left)
        } else {
            if (facingRight == 1) {
                animation.setAction(mySprite, ActionKind.Idle_right)
            } else {
                animation.setAction(mySprite, ActionKind.Idle_left)
            }
        }
    } else {
        if (mySprite.vy < 0) {
            if (facingRight == 1) {
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d f d d f e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d d d d d . . . . 
. . . . . e d d d d d d . . . . 
. . . . . . 2 4 4 4 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . d d . 4 4 4 4 d . . . . . 
. . . d d . 4 4 4 4 d . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . e . . 2 . . . . . . . 
. . . . 2 . . . . . . . . . . . 
`)
            } else {
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e f d d f d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . d d d d d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . . 4 4 4 2 . . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . . d 4 4 4 4 . d d . . . 
. . . . . d 4 4 4 4 . d d . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . . 2 . . e . . . . . 
. . . . . . . . . . . 2 . . . . 
`)
            }
        } else {
            if (facingRight == 1) {
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e d e e e e . . . 
. . . . e e e d d d d d e . . . 
. . . . e d e d f d d f . . . . 
. . . . e d d d f d d f . . . . 
. . . . . e d d d d d d . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . . d d 4 4 4 . d d . . . 
. . . . . d d 4 4 4 . d d . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . . . 2 . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
`)
            } else {
                mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e d e e e e . . . . 
. . . e d d d d d e e e . . . . 
. . . . f d d f d e d e . . . . 
. . . . f d d f d d d e . . . . 
. . . . d d d d d d e . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . d d . 4 4 4 d d . . . . . 
. . . d d . 4 4 4 d d . . . . . 
. . . . . . e e e e . . . . . . 
. . . . . . e . . e . . . . . . 
. . . . . 2 . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            }
        }
    }
})
game.onUpdate(function () {
    if (level == 10) {
        if (mySprite.y > 394) {
            scene.setBackgroundImage(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`)
            effects.blizzard.startScreenEffect()
            mySprite.ay = 300
        } else if (mySprite.y > 256) {
            scene.setBackgroundImage(img`
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 f 6 f 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`)
            effects.blizzard.startScreenEffect()
            mySprite.ay = 300
        } else if (mySprite.y > 128) {
            scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 f f f f f f f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 f f f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 f f f 6 f 6 f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 
f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 f 6 
`)
            effects.blizzard.endScreenEffect()
            mySprite.ay = 150
        } else {
            scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 
f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
            effects.blizzard.endScreenEffect()
            mySprite.ay = 150
        }
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(coin2)) {
        info.changeScoreBy(3)
        coin2.destroy(effects.smiles, 5000)
        music.baDing.play()
    }
})
