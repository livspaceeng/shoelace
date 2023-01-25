# Installation guidelines 

1. Install Node.js version `16` or higher.
2. Run the command `npm install` to install the necessary dependencies.
3. To run the doc locally, execute the command `npm run start`.
4. To create a new web component, use the command npm `run create sl-<web_component_name>`.
5. Update the following files according to the given path:
    - /Users/livspace/Documents/locust/shoelace/src/components/<web_component_name>/<web_component_name>.ts
    - /Users/livspace/Documents/locust/shoelace/src/components/<web_component_name>/<web_component_name>.styles.ts
    - /Users/livspace/Documents/locust/shoelace/src/components/<web_component_name>/<web_component_name>.test.ts
    - /Users/livspace/Documents/locust/shoelace/docs/components/<web_component_name>.md
    - /Users/livspace/Documents/locust/shoelace/docs/_sidebar.md
6. After completion of the installation process, A pull request should be submitted to the prod branch for newly created web component and get it reviewed by @Tarun Pai and/or @Anil Arya before being merged into the production branch.


### Note: Sync code with parent repo before creating branch from prod
