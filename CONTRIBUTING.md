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

## Installing this project

**Dependencies:**
- [Node.js + npm](https://nodejs.org)
- [Grunt](https://gruntjs.com/)

To install all dependencies, you'll need Node.js installed on your machine.

Once node is installed, open a terminal and navigate to the directory where your cloned the project.

Install the project dependancies using npm: 
```bash
> npm install
```

## Next Steps
Once you have all dependancies installed, you are ready to make your updates to the codebase.

Make your edits to files in the **/src** directory. When you are ready to push your code back to github, we need to copy minified versions of those files into the /dist directory. Grunt will handle all of the heavy lifting here. Just run the 'grunt' command and it will take care of this process for us:

```bash
> grunt
```