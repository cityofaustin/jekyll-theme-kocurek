# Kocurek Theme

Kocurek is a Jekyll theme for static sites published on GitHub Pages. It was developed for the Austin Convention Center Department for use on documentation sites.

## Theme Template

The [Kocurek Jekyll Theme Template](https://github.com/cityofaustin/jekyll-theme-kocurek-template) repository is a template that you can use to quickly create your own Github Pages site in minutes, _without the need for a developer_.

## How it Works

Kocurek is added as a `remote_theme` in your Jekyll project. The theme includes default styling and layouts for a site's homepage, content pages, and navigation.

Content is edited directly in markdown files in the `collections/` subdirectories.

## Features

- Automated navigation generation
- Create Sections of grouped Pages
- Custom ordering for Sections, and for Pages within a Section
- Full site search (configuration required)
- WAG Accessibility

## Live Examples

- Austin Convention Center Operations Manual  
  [https://ops.austinconventioncenter.com](https://ops.austinconventioncenter.com)
- Palmer Events Center Operations Manual  
  [https://ops.palmereventscenter.com](https://ops.palmereventscenter.com)
- Austin Convention Center Web Publishing Guides  
  [https://webguides.austinconventioncenter.com](https://webguides.austinconventioncenter.com)

---

## Quickstart

Learn how to create your own Kocurek-powered microsite, or how to manage an existing one.

## Options

The following options can be set in `_config.yml` in your project site.

### Parent Site

Specify a parent site to the microsite.

- `title` (required): The name of the parent site, used as alternate text if a logo is not present
- `url` (required): The web address of the parent site, linked from the parent site logo or title
- `logo` (optional): An image representing the parent site

```
parent_site:
  title: Austin Convention Center
  url: https://www.austinconventioncenter.com
  logo: acc-logo.png
```

### Printable

Add a link to "Print This Page" on each section and sub-section to make it easy to download the page contents in PDF format.

The entire site is accessible as a single PDF document at `/pdf`,so if the site URL is `ops.austinconventioncenter.com` then the PDF can be accessed at `ops.austinconventioncenter.com/pdf`.

### Random Background Images

You can supply any number of images to be used as full-page background images, randomly picked on each page load.

Background images must:

- Be named sequentially from 1 to the number you specify (`1.jpg`, `2.jpg`, etc...)
- Be in JPG format
- Be placed in `assets/images/backgrounds/`

### Search

Display a search box with typeahead atop the navigation panel. All site content is automatically indexed and made full-text-searchable. Set to `false` or remove to remove the 

Search support is provided by the [Jekyll Simple Site Search](https://github.com/christian-fei/Simple-Jekyll-Search) JavaScript library.

```
searchable: true
```
