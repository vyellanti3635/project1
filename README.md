# Splashes Aquatics

Responsive marketing website for Splashes Aquatics, a children's swim school with 21 locations in California and Denver. Built for Westcliff University WEB601 Project 1.

## Stack

HTML5, CSS3, JavaScript (ES5), jQuery with Ajax, Bootstrap 4, Vue 2.

## Pages

- `index.html` Home
- `about.html` About Splashes
- `swimming-lessons.html` Which Lesson is Best?
- `swim-programs.html` Summer Swim Camps
- `adult-programs.html` Adult Lap Swimming
- `contact.html` Contact Us

Locations open as a dropdown from the navigation bar and Register / Sign In opens in a modal.

## Structure

- `css/` reset and site styles
- `js/` site scripts
- `data/` JSON loaded with Ajax
- `images/` provided brand assets

## Requirements coverage

- Headings, paragraphs, lists, links and images on every page
- HTML comments mark the navigation, main content, footer and modal regions
- HTML table: regional phone numbers in the footer
- Form with submit button: Register / Sign In modal
- CSS3 layout and styling in `css/styles.css` on top of a CSS reset
- JavaScript interactions: active nav link, locations menu shortcut, form validation
- jQuery components: sign-in modal with live validation, and the locations mega menu loaded from `data/locations.json` with Ajax
- Bootstrap 4 grid, navbar, dropdown, modal and utilities throughout
- Vue component: `awards-grid` renders the awards on the Home and About pages

## Screenshots

Full-page captures of every page at desktop (1280px) and phone (375px) width are in `screenshots/`.

## Running locally

Serve the folder over HTTP (for example VS Code Live Server) so the Ajax request for the locations file works. Opening the HTML files directly from disk blocks that request in Chrome.
