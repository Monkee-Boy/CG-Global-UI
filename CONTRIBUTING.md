## Getting Started
To contribute to the project, clone the project to begin working on your local copy.

The branching structure follows a common pattern of working branch, develop branch, and feature branch: 
```
|-- master branch
|  |-- develop branch
|  |  |-- feature branch
```

In this pattern, the master branch is the working branch, so **no code changes can be made directly on this branch**. To merge code to master, it must first be merged into the develop branch via a feature branch. Then, you can make a pull request from develop into master to syncronize the working branch with the develop branch.

To maintain the integrity of the codebase, be sure to rebase from the develop branch regularly. At the very least, be sure you rebase before merging your feature branch into the develop branch.

```bash
> git pull --rebase origin develop
```

Once your feature branch is rebased and ready to merge, you can merge into develop:
```bash
> git merge origin develop
```

Finally, to merge into master, submit a pull request from develop into master. Merging pull requests will be the responsibility of the senior web designer at CG.

## Installing this project for development

**Dependencies:**
- [Node.js + npm](https://nodejs.org)
- [Grunt](https://gruntjs.com/)

To install all dependencies, you'll need Node.js installed on your machine.

Once node is installed, open a terminal and navigate to the directory where your cloned the project.

Install the project dependancies using npm: 
```bash
> npm install
```

## Contributing to the project
Once you have all dependancies installed, you are ready to make your updates to the codebase.

Make your edits to files in the **/src** directory. When you are ready to push your code back to github, we need to copy minified versions of those files into the **/dist** directory. Grunt will handle all of the heavy lifting here. Just run the 'grunt' command and it will take care of this process for us:

```bash
> grunt
```

## Conventions and Architecture
This framework should closely follow the BEM CSS architecture. You can learn more about BEM [here](http://getbem.com/introduction/)

## Code Organization
The global stylesheet should be divided into component sections. Each component should include any blocks, elements, and modifiers for that particular component. 

By breaking the site into standalone components, we are able to reuse those components in other sites with minimal effort. This also means that should we decide to update the look of a specific component, we can update those styles here and those changes will be brought into all other projects by simply updating that project to use latest version of the framework.

Before each component's styles, add a comment section that describes the component. Include the common name of the component, followed by the word 'component'.

**Example:**
```css
/*-----------------------------------
HEADER COMPONENT
-----------------------------------*/
.header {
    ...
}
```
**Media Queries:**
Be sure to include media queries relevant to the component with that components other selectors. This will allow for those queries to be easily located and ensure they are clearly identified that they belong to that component.


## Separations
To prevent contamination of the global styles, please separate out all styles that arent specific to the global design system. Such code should be placed in a separate stylesheet that lives outside of this repository. By separating overrides to the general design system, we are able to minimize the amount of unnecessary code and keep the global stylesheet clean for other projects that use it. Again, this should only be done for rules that are not likely/able to be reused as a part of the global design system.

**Example:**
```css
/* global element */
.btn {
    border-width: 2px;
    border-style: solid;
    display: inline-block;
    margin: 10px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 700;
}
  
/* the following selector is specific to a single site/page/app and should thus be moved into a seperate local stylesheet outside of the global framework */
#hubspot-form-id-12345 .btn {
    line-height: 1;
    text-decoration: none;
}
```
