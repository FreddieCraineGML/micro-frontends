# Run a build, and run / load the app on port 5000

```
cd ./component-library
npm run build
npm run serve
```

# Change to the betja-app in another terminal

`cd ../betja-app`

# Build and run the application

```
npm run build
npm run dev
```

# Adding a new component in the component library

- Create the component in the component library
- Expose it in the vite.config.ts in the component library
- Rebuild & server the component library
- Add it to the TypeScript declaration file (remote-app.d.ts) in the consuming app
- Rebuild the consuming app
- Create a component that imports from the component library e.g.

`const RemoteSignUp = React.lazy(() => import("component_library/SignUpShell"));`
