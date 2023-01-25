# Installation guidelines 

1. Install node version >=16
2. Run `npm install`
3. To run locally , run `npm run start`
4. To create a new web component - use command `npm run create sl-<web_component_name>`
5. Update files according at following files : 
    - /Users/livspace/Documents/locust/shoelace/src/components/<web_component_name>/<web_component_name>.ts
    - /Users/livspace/Documents/locust/shoelace/src/components/<web_component_name>/<web_component_name>.styles.ts
    -  /Users/livspace/Documents/locust/shoelace/src/components/<web_component_name>/<web_component_name>.test.ts
    -  /Users/livspace/Documents/locust/shoelace/docs/components/<web_component_name>.md
    -  /Users/livspace/Documents/locust/shoelace/docs/_sidebar.md
6. After completion, Raise PR to prod branch , get it reviewed by @Tarun Pai /@Anil Arya and merge PR


### Note: Sync code with parent repo before creating branch from prod
