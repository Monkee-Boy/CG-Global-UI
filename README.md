# CG-Global-UI
Global UI styles for Camp Gladiator

## Introduction
The CG Global UI is a universal design system developed to be the foundational framework for all major UI projects within the company. This framework should act as the base stylesheet for all major UI projects to ensure brand consistency and minimize code repetition.


## Using this framework
To use the framework, it can be added to any project as a dependancy. Using a dependancy manager like [bower](https://bower.io/) will ensure you can easily update the framework to the latest version at any time.

**Sample bower.json:**
```json
  {
    "name": "project-name",
    "version": "1.0",
    "dependencies": {
      "cg-global-ui": "https://github.com/CampGladiator/CG-Global-UI.git#master",
    }
  }
```

## Conventions and Architecture
This framework should closely follow the BEM CSS architecture. You can learn more about BEM [here](http://getbem.com/introduction/)


## Code Organization

**Media Queries:**


## Separations
To prevent contamination of the global styles, please separate out all styles that arent specific to the global design system. Such code should be placed in a separate stylesheet that lives outside of this repository. By separating overrides to the general design system, we are able to minimize the amount of unnecessary code and keep the global stylesheet clean for other projects that use it. Again, this should only be done for rules that are not likely/able to be reused as a part of the global design system.

**Example:**
```css
/* global element */
  .btn {
      border: 2px solid #c8102e;
      background-color: #c8102e;
      color: white;
      font-size: 14px;
      display: inline-block;
      padding: 13px 48px;
      margin: 10px;
      height: 42px;
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
  }
  
/* the following selector is specific to a single site/page/app and should thus be moved into a seperate stylesheet outside of the global framework */
  #hubspot-form-id-12345 .btn {
      line-height: 1;
      text-decoration: none;
  }
```
