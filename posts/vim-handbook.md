---
title: "Mini Vim handbook"
subtitle: "Vim is a highly configurable and useful text editor and an evolution of Vi of Bill Joy's Unix."
date: "2024-01-04"
color: '#fb923c'
---

# Vim Cheatsheet

## MOVEMENT:
- `h` - Move cursor left
- `j` - Move cursor down
- `k` - Move cursor up
- `l` - Move cursor right
- `w` - Move forward one word
- `b` - Move backward one word
- `0` - Move to beginning of line
- `$` - Move to end of line
- `gg` - Move to the beginning of the file
- `G` - Move to the end of the file
- `{` - Move to previous paragraph
- `}` - Move to next paragraph
- `Ctrl + f` - Page down
- `Ctrl + b` - Page up
- `Ctrl + d` - Half page down
- `Ctrl + u` - Half page up

## EDITING:
- `i` - Insert text before the cursor
- `a` - Append text after the cursor
- `A` - Append text at the end of the line
- `o` - Open a new line below the current line
- `O` - Open a new line above the current line
- `x` - Delete character under the cursor
- `dd` - Delete current line
- `yy` - Copy current line
- `p` - Paste copied or deleted text after the cursor
- `P` - Paste copied or deleted text before the cursor
- `u` - Undo
- `Ctrl + r` - Redo

## VISUAL MODE:
- `v` - Start visual mode
- `V` - Start visual line mode
- `Ctrl + v` - Start visual block mode
- `Esc` - Exit visual mode

## SEARCH AND REPLACE:
- `/` - Search forward
- `?` - Search backward
- `n` - Move to the next search result
- `N` - Move to the previous search result
- `:%s/old/new/g` - Replace all occurrences of 'old' with 'new' in the entire file
- `:%s/old/new/gc` - Replace all occurrences of 'old' with 'new' in the entire file with confirmation

## SAVING AND QUITTING:
- `:w` - Save changes
- `:q` - Quit (will not work if changes have been made)
- `:q!` - Quit without saving changes
- `:wq` or `:x` - Save changes and quit

## MULTIPLE FILES:
- `:e filename` - Open a file for editing
- `:bn` - Move to the next buffer
- `:bp` - Move to the previous buffer
- `:bd` - Close the current buffer

## WINDOW MANAGEMENT:
- `:split` - Split the window horizontally
- `:vsplit` - Split the window vertically
- `Ctrl + w + arrow keys` - Switch between windows
- `Ctrl + w + c` - Close the current window
- `Ctrl + w + _` - Maximize the height of the current window
- `Ctrl + w + |` - Maximize the width of the current window
- `Ctrl + w + =` - Make all windows equal size

For more information, you can always refer to Vim's built-in help by typing `:help`.
