# Shadcn + Rust

This is a template for developing native applications in Rust with Shadcn UI.
This uses a React front-end in TypeScript + SWC using TailwindCSS and Shadcn.
This uses a Tauri/Rust back-end.

While there can be a variety of adaptations of this template, my initial goal is to write an application in Rust, but make use of Shadcn for my UI.
I believe Shadcn will be supported in Dioxus v0.6 because Shadcn is in their [roadmap](https://github.com/DioxusLabs/dioxus/discussions/2223)

# Setup

I believe all that is needed is running `npm install` in **both** the `.` and `./src-react/` directories.

# Add Shadcn Component

```bash
cd src-react
npx shadcn-ui@latest add <component-name>
```

