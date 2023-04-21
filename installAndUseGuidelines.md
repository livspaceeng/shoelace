# Installation guidelines

1. The first step is to install Node.js version 16 or higher.
2. Next, run the command npm install to install the necessary dependencies.
3. To run the documentation locally, you should execute the command npm run start.
4. To create a new web component, use the command npm run create sl-<web_component_name>.
5. Finally, update the files listed below based on their corresponding paths:

```
   - /shoelace/src/components/<web_component_name>/<web_component_name>.ts
   - /shoelace/src/components/<web_component_name>/<web_component_name>.styles.ts
   - /shoelace/src/components/<web_component_name>/<web_component_name>.test.ts
   - /shoelace/docs/components/<web_component_name>.md
   - /shoelace/docs/_sidebar.md
```

6. Once the installation process is complete, a pull request must be submitted to the prod branch for the newly created web component.
7. The pull request should be reviewed by either @Anil Arya or @Rohit before it is merged into the production branch.



## Library Consumption
 

1. To begin, execute the command `npm run login` .
2. Next, install the package by running `npm install --save-dev @livspace/web-component` from the Livspace [AWS codeArtifact](https://livspaceengg.atlassian.net/wiki/spaces/UC/pages/160202863/Private+npm+registry+CodeArtifact)
3. Import a specific web component by including the statement import "@livspace/web-component/dist/components/livcard/livcard.js".
4. Alternatively, all components can be imported at once, depending on the framework being used.
5. Import the CSS file by including the statement `import '@livspace/web-component/dist/themes/livspace.css' ` 
To use a sl- component, prefix the component name with `sl-` . For example, to use the livcard component, write `<sl-livcard>` .


TODO : Deploying build files to s3 bucket for better consumption in pure JS based application.

### Note: 
2. Code is published on livspace aws code-artifact.
