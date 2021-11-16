---
title: GameGenerator Documentation
category: Software documentation
article_type: technical_document
featured_image: flak-cannon.jpg
featured_image_alt: An anti-aircraft cannon near Dover Castle
---

[GameGenerator](https://github.com/jborjon/gg){:target="_blank" rel="noopener"} (GG) is a simple 2D game engine for creating Flak games in Python. It provides a customizable game environment for pedagogical purposes, freeing you from having to write algorithms and use complex programming constructs. It was created by yours truly for Madison Middle School's Young Engineers.


## What's a Flak game?

Flak, the style of game supported by GG, consists of a player on the ground (the bottom of the screen) attempting to shoot down enemy planes performing their bombing runs. The player and the ground structures the player defends must survive, with the player reloading every few shots when out of ammo (with unlimited reloads). It's fast-paced, challenging, and exciting!

The player gets a number of points for hitting enemies and bombs, and loses points when ground structures are destroyed by bombs. There is an unlimited number of enemy planes, who will continue to spawn as long as the game is running. Once all the buildings are destroyed or the player has lost all her lives, the game is over. The only way to win? Beat the high score.

In case you're itching to know: Flak is short for *Flugzeugabwehrkanone* (say it fast 10 times), which is German for "aircraft defense cannon." Anti-aircraft artillery.


## Getting started

### Prerequisites

You need to have [Python 3.x](https://www.python.org/downloads){:target="_blank" rel="noopener"} and [Pygame](https://www.pygame.org/wiki/GettingStarted){:target="_blank" rel="noopener"} installed in your machine in order to run GameGenerator and the games created with it.


### Installing

The `gg` folder contains the full GameGenerator package; you might say it *is* the package. Copy that folder to your own game folder, or put it somewhere else and [add it to the Python path](https://www.digitalocean.com/community/tutorials/how-to-write-modules-in-python-3){:target="_blank" rel="noopener"} using `sys.path.append(full_path_to_folder_containing_gg)` from the Python Shell.

*Note to Madison Middle School students:* As of July 31, 2018, each Raspberry Pi in the Young Engineers classroom has a copy of `gg` in the `Documents` folder. Simply copy and paste the `gg` folder into your own folder to create games.


### Example game

The `flak_example.py` file in this repository contains a working game. Okay, not a very good one, but one you can still use for reference. The images required by the example game are in the `example_pics` folder. The background and splash screen images were created using nothing but Scratch.


### Creating your first game

#### Images

For your game to look like a game, it needs images. These images are used to dress up the sprites (that is, the characters and objects) and backgrounds in your game. For testing purposes, you can simply draw colored circles, squares, or lines.

Using any drawing program that can save images, create a separate file for each of the following items:

  * The player
  * The enemy (a single enemy image will be applied to all the enemies, so you only need to draw it once)
  * The missile fired by the player
  * A bomb dropped by the enemy
  * A ground building

There are also optional images you can draw, with no consequences if you don't:

  * The background (try to get the size in pixels as close as possible to the way you want it in the game)
  * A destroyed building to display when a building gets hit
  * A splash screen, possibly with your logo and credits, displayed before the game starts

Save your images with a descriptive file name in the same folder as your game code or, as I would recommend, in its own subfolder within the game folder.

GG can handle PNG, JPG, GIF, and all other [image formats supported by Pygame](https://www.pygame.org/docs/ref/image.html){:target="_blank" rel="noopener"}. Make sure the sprite images are not so big that they cover the entire screen or make the game unplayable, and that they have a transparent background.

*Note to Madison students:* Although I haven't found any good free Raspberry Pi software for creating images, you can use [Scratch](https://scratch.mit.edu){:target="_blank" rel="noopener"} to draw sprites and backgrounds and then export them as images; or you can create images in a different computer and then bring them to class in a USB drive.


#### Programming

After putting the `gg` folder in the location of your choice, create a new `.py` file (you could call it `flak.py`, for example) in your folder and import the GG package from the top of the file:

```python
import gg
```

Then create a variable to contain the game. For simplicity, let's call it `game`:

```python
game = gg.Game()
```

This variable contains your entire game environment: the player, enemies, images, text, behaviors, etc.

Next, customize your game at will by modifying whatever **attributes** of `game` you wish to customize using the `variable_name.attribute_name = attribute_value` syntax (notice the period or dot), often called "dot notation":

```python
game.name = 'My Shiny Flak Game'
game.player_image = 'good-guy.png'
game.enemy_image = 'bad-guy.png'
game.player_num_shots = 10
game.is_fullscreen = True
```

You can see the full list of attributes under the section called... well, [Full attribute and method list](#full-attribute-and-method-list).

All attributes other than image files come with useful defaults, so you don't *have* to set any non-image attributes, but it's way more fun if you make the game your very own.

Okay, images do have defaults: if you don't specify an image file for a certain character, the file you specify doesn't exist, or the image specified can't be loaded for any reason, the missing image will be replaced by the Red Square of Doom, a red square with a white question mark inside. In spite of its ominous name, the RSOD is very useful: it makes it obvious to you that an image is missing and shows you where, saving you some guesswork.

The exception to the RSOD is the game background. If you don't specify a file, you get a solid-black background.

Once you're finished customizing your game, run it:

```python
game.run()
```

That's it! When you run your Python game file, your game should start.


###  Playing the game

#### Default keys

To play the game with its default set of keys, you'll need to know the following:

  * Move left: left arrow
  * Move right: right arrow
  * Shoot: space
  * Reload ammo: control
  * Pause the game: P or pause

All these keys are available for you to change. See [Changing default keys](#changing-default-keys) for details.


#### High score

After the first time a player attains a score greater than 0, the game will automatically create a folder called `gamedata` to save that score as the high score. You don't need to worry about this folder or its contents; the high score will be automatically updated as needed.

To reset the high score to 0, simply delete the folder.


#### Viewing the framerate

If you're curious about the current framerate of your game, you can toggle displaying it by pressing F1. The maximum allowed framerate is 60 FPS and, since the graphics aren't complex, it will probably remain really close to that unless there is some issue.


#### Closing the game

You can close the game at any time by pressing the window's closing X icon (if not in fullscreen mode), the Esc key, or Alt+F4. A prompt will ask you to confirm.


## Full attribute and method list

The following are all the attributes you can modify to make the game your own. Most likely, you'll only need to modify a handful of these to get the results you want, but all of them are there for you to play with to your heart's content. You'll see that you are not limited to making a game in the way I described under [What's a Flak game?](#whats-a-flak-game) Be creative and break boundaries.

| Attribute | Description | Type | Default value |
| --- | --- | --- | --- |
| `name` | The name of the game, displayed on the window title bar, if there is one. | String | `'GG Flak'` |
| `images_dir` | The path of the directory where the images are. | String | `None` |
| `window_icon` | File name of the icon to display next to the name. | String | `None` |
| `splash_image` | The image that covers the screen at the beginning. | String | `None` |
| `screen_width` | The window width in pixels if not fullscreen. | Number | `800` |
| `aspect_ratio` | The aspect ratio of the window if not fullscreen. | Number | `1.7778` |
| `is_fullscreen` | Whether the window covers the entire screen. | Boolean | `False` |
| `font_color` | The color of the text that appears on the screen. | Tuple | `gg.colors.WHITE` |
| `screen_font_size` | The point size of the info text on the screen. | Number | `36` |
| `background_color` | A solid color used if no image is specified. | Tuple | `gg.colors.BLACK` |
| `background_image` | File name of the image to put as background. | String | `None` |
| `player_image` | The image file for the player object. | String | `None` |
| `player_num_lives` | Number of tries the player gets before losing. | Number | `3` |
| `player_num_shots` | Number of shots per reload. 0 means no reloading. | Number | `10` |
| `player_speed` | How far the player moves left or right in one second. | Number | `800` |
| `player_x_pos` | The initial x-coordinate of the player's top left. | Number | `None` |
| `player_y_pos` | The initial y-coordinate of the player's top left. | Number | `None` |
| `has_player_sprite_dir` | Flip the player sprite when moving? | Boolean | `True` |
| `missile_image` | The image file for the missile fired by the player | String | `None` |
| `missile_speed` | How fast the player missile travels. | Number | `2000` |
| `is_missile_upward` | Does the missile move up or down? Up if true. | Boolean | `True` |
| `enemy_image` | The image for all the enemy objects. | String | `None` |
| `enemy_speed` | How fast the enemy airplanes move. | Number | `600` |
| `enemy_count` | Max number of enemies on the screen at any given time. | Number | `5` |
| `enemy_top_edge` | Top of the boundary where enemies can spawn. | Number | `None` |
| `enemy_bottom_edge` | Bottom of the boundary where enemies can spawn. | Number | `None` |
| `bomb_image` | The image file for the bomb dropped by the enemy. | String | `None` |
| `bomb_speed` | How fast the enemy bombs travel. | Number | `800` |
| `is_bomb_downward` | Does the bomb move down or up? Down if true. | Boolean | `True` |
| `building_image` | The image file for the ground structure objects. | String | `None` |
| `building_razed_image` | Optional image for buildings that are hit. | String | `None` |
| `building_count` | How many buildings to start game with. Must be > 1. | Number | `4` |
| `building_y_pos` | Y-coordinate of buildings; `None` means near bottom. | Number | `None` |
| `score_pos` | The position where the score is displayed on the screen. | Tuple | `(10, 10)` |
| `score_factor` | How many points the player gets per hit. | Number | `1` |
| `score_loss_factor` | Points lost when a building is destroyed. | Number | `10` |
| `high_score_pos` | Where to display highscore; `None` means top-center. | Tuple | `None` |
| `num_lives_pos` | The location of the player's remaining lives panel. | Tuple | `(10, 40)` |
| `num_shots_pos` | The location of the player's remaining shots panel. | Tuple | `(10, 74)` |
| `thumbnails_height` | The height of the lives and shots thumbnails. | Number | `24` |
| `message_high_score` | Message to show when the player gets highscore. | String | `'You beat the high score!'` |
| `message_game_over` | Message to show when the player loses. | String | `'Game over'` |
| `keys_move_left` | List of keys that move the player left. | List | `[pygame.K_LEFT]` |
| `keys_move_right` | List of keys that move the player right. | List | `[pygame.K_RIGHT]` |
| `keys_shoot` | List of keys that fire the missile. | List | `[pygame.K_SPACE]` |
| `keys_reload_ammo` | List of keys that reload the ammo when out. | List | `[pygame.K_LCTRL, pygame.K_RCTRL]` |
| `keys_pause` | List of keys that pause the game. | List | `[pygame.K_p, pygame.K_PAUSE]` |
{:.pure-table .pure-table-striped .game-attributes-table }

There is a single method (function) you need to call:

  * `run()`: once all the modifiable attributes are set as desired, call this method to start the game.


### Changing default keys

To change the default keys used to play the game, you must provide a list of keys as the attribute for a given behavior, even if your list contains a single key; providing more than one key allows each of the keys specified to perform the action.

See the [`pygame.key` documentation](https://www.pygame.org/docs/ref/key.html){:target="_blank" rel="noopener"} for a list of key names under Pygame. All key names begin with `K_` and must be prefixed with `pygame.` since they are internal to Pygame, which, in turn, means you need to import the `pygame` module into your game to be able to modify default keys.


## Special thanks

A shout-out to all my Young Engineers students at Madison Middle School during the 2016--2017 and 2017--2018 school years for inspiring me to spend countless unpaid hours for about 4 grueling weeks in order to create this software. It was a labor of love. You guys are the best!
