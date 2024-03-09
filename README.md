## Important Notes

This is the updated version of welab-task.

### Here are changes I made:

-Useing query params (searchParams) instead of useState to filter Todos.
-Use json-server to store Todos data instead of LocalStorage and context.
-Seperates project components into server & client components.
-Created a serverFunctions folder to extend the requierd server functions into the server components.

### How I applied SOLID principles in the project:

#### Single Responsiibility:

Breaking down the component so each component has one job such as:

-MyCard only takes children and gives them styling
=MyButton
-MyTextField

#### Open-Closed Principle:

The component should be open for extending and closed for modification so:

-I made a serverFunctions folder and extends the function in the components requiring it.
-In MyCard component, the children components extends the behavior of MyCard without modifying their own code.

#### Liskov substitution:

-children of MyButton component inherits It's style and the behavior of it
-children of MyCard inherits It's style.
-layout of the root takes added the Header components and pass the root page children to it.

#### Interface segregation principle:

Creating focused and specific interface for our components
-I have applied it with MyCard, MyButton, MyTextfield

#### Dependency inversion:

High level components should not depend on low level component, both should abstract thier data from abstraction.

-Using theme as a context so it provides data for all components of the project.
-serverFunctions which I abstract it into the server components directly to get and modify data.

## Getting Started

First, you need to run the json-server on port 5000:

```bash
npx json-server --port 5000 data.json
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
