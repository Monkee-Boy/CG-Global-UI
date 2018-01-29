# CG-Global-UI
Global UI styles for Camp Gladiator

## Introduction
The CG Global UI is a universal design system developed to be the foundational framework for all major UI projects within the company. This framework should act as the base for all major UI projects to ensure brand consistency and minimize code repetition. This practice also allows updates to our global UI to a single source of truth which will then trickle down to all sites/applications using these dependencies.

## Using this framework
To use the framework, add it to your project as a dependancy and link the files in your html files. Using a dependancy manager like [bower](https://bower.io/) will ensure you can easily update the framework to the latest version at any time. Be sure to load in this framework before any local stylesheets or scripts.

**Sample bower.json:**
```json
{
    "name": "...",
    "version": "...",
    "dependencies": {
        "cg-global-ui": "https://github.com/CampGladiator/CG-Global-UI.git#master",
    }
}
```

```html
<head>
    <link rel="stylesheet" href="[url_to_stylesheet]">
    ...
```

The framework has 2 main files to consume which are available in the ```/dist``` directory of this repository: 
```
    /dist/css/cg-global-ui.min.css
    /dist/js/cg-global-ui.min.css
```

Unminified versions of these files are also available in those respective directories for testing purposes. However, the minified versions should always be used for production sites/apps.
