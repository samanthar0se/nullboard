# Nullboard PWA

This is a fork of the original [Nullboard](https://github.com/apankrat/nullboard) project with added Progressive Web App (PWA) capabilities and Modernized UI.

Original project by Alexander Pankratov / [apankrat](https://github.com/apankrat)

Nullboard is a minimalist take on a kanban board / a task list manager, designed to be compact, readable and quick in use.

https://3samourai.github.io/nullboard/

![Nullboard](images/nullboard-example-alt.png)

The name also happens to abbreviate to [NB](https://en.wikipedia.org/wiki/Nota_bene), which I think is a nice touch.

## What's Different in This Fork?

This fork enhances the original Nullboard by adding:
- Progressive Web App support for installation on mobile and desktop
- Offline functionality via service worker
- Improved theme styling and cross-browser compatibility
- Updated accent colors and visual improvements

See the [Recent Enhancements](#recent-enhancements) section for complete details.

## Dead simple

* Single-page web app - just one HTML file, an ancient jQuery package and a webfont pack.
* Can be used completely offline. In fact, it's written exactly with this use in mind.

## Locally stored

* All data is stored locally, for now using [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage).
* The data can be exported to- or imported from a plain text file in a simple JSON format.


## UI & UX

The whole thing is largely about making it convenient to use.

Everything is editable in place, all changes are saved automatically and last 50 revisions are kept for undo/redo:

![In-place editing](images/nullboard-inplace-editing.gif)

New notes can be quickly added directly where they are needed, e.g. before or after existing notes:

![Ctrl-add note](images/nullboard-ctrl-add-note.gif)

Notes can also be dragged around, including to and from other lists:

![Drag-n-drop](images/nullboard-drag-n-drop.gif)

Nearly all controls are hidden by default to reduce visual clutter to its minimum:

![Hidden controls](images/nullboard-hidden-controls.gif)

Longer notes can be collapsed to show just the first line, for even more compact view of the board:

![Collapsed notes](images/nullboard-collapsed-notes.gif)

The default font is IBM Plex

![Barlow speciment](images/barlow-specimen.png)

Notes can also be set to look a bit different. This is useful for partitioning lists into sections:

![Raw notes](images/nullboard-raw-notes.gif)

Links starting with https:// and http:// are recognized. They will "pulse" on mouse hover and can be opened via the right-click menu.

![Links on hover](images/nullboard-links-on-hover.gif)

Pressing CapsLock will highlight all links and make them left-clickable.

![Links reveal](images/nullboard-links-reveal.gif)

Lists can be moved around as well, though not as flashy as notes:

![List swapping](images/nullboard-list-swap.gif)

The font can be changed; its size and line height can be adjusted:

![Theme and zoom](images/nullboard-ui-preferences.gif)

The color theme can be inverted:

![Dark theme](images/nullboard-dark-theme.gif)

Also:

* Support for multiple boards with near-instant switching
* Undo/redo for 50 revisions per board (configurable in the code)
* Keyboard shortcuts, including Tab'ing through notes

## Caveats

* Written for desktop and keyboard/mouse use
* Works in Firefox,Chrome, Edge and Brave
* Uses localStorage for storing boards/lists/notes, so be careful around [clearing your cache](https://stackoverflow.com/questions/9948284/how-persistent-is-localstorage)

You spot a bug, file an issue.

## License

The [2-clause BSD license](https://opensource.org/licenses/BSD-2-Clause/) with the [Commons Clause](https://commonsclause.com/).

That is, you can use, change and re-distribute it for as long as you don't try and sell it.

## Recent Enhancements

We've made several improvements to Nullboard:

* **UI Enhancements**
  * Changed default theme to dark mode for better eye comfort
  * Increased default font size to 14px for improved readability
  * Added a monospace font option for code and structured content
  * Set IBM Plex as the default font for a more modern look
  * Updated accent colors to Apple blue (#007AFF) for better contrast

* **Progressive Web App Support**
  * Added PWA capabilities for installation on mobile devices and desktops
  * Created manifest.json file with app information and configuration
  * Implemented service worker (sw.js) for offline functionality and caching
  * Added appropriate meta tags for iOS and Android compatibility 
  * Fixed CSS syntax errors in theme styling for better cross-browser support
  * Added service worker registration script for PWA initialization
  * Created app icon placeholders in multiple required sizes (16x16, 192x192, 512x512)
  * Configured offline caching for essential files and assets

These changes enhance usability while maintaining the minimalist design philosophy of Nullboard.
