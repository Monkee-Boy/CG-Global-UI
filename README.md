# CG-Global-UI
Global UI styles for Camp Gladiator

## Introduction
The CG Global UI is a universal design system developed to be the foundational framework for all major UI projects within the company. This framework should act as the base for all major UI projects to ensure brand consistency and minimize code repetition.

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
