[![Sponsored](https://img.shields.io/badge/chilicorn-sponsored-brightgreen.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAMAAADjyg5GAAABqlBMVEUAAAAzmTM3pEn%2FSTGhVSY4ZD43STdOXk5lSGAyhz41iz8xkz2HUCWFFhTFFRUzZDvbIB00Zzoyfj9zlHY0ZzmMfY0ydT0zjj92l3qjeR3dNSkoZp4ykEAzjT8ylUBlgj0yiT0ymECkwKjWqAyjuqcghpUykD%2BUQCKoQyAHb%2BgylkAyl0EynkEzmkA0mUA3mj86oUg7oUo8n0k%2FS%2Bw%2Fo0xBnE5BpU9Br0ZKo1ZLmFZOjEhesGljuzllqW50tH14aS14qm17mX9%2Bx4GAgUCEx02JySqOvpSXvI%2BYvp2orqmpzeGrQh%2Bsr6yssa2ttK6v0bKxMBy01bm4zLu5yry7yb29x77BzMPCxsLEzMXFxsXGx8fI3PLJ08vKysrKy8rL2s3MzczOH8LR0dHW19bX19fZ2dna2trc3Nzd3d3d3t3f39%2FgtZTg4ODi4uLj4%2BPlGxLl5eXm5ubnRzPn5%2Bfo6Ojp6enqfmzq6urr6%2Bvt7e3t7u3uDwvugwbu7u7v6Obv8fDz8%2FP09PT2igP29vb4%2BPj6y376%2Bu%2F7%2Bfv9%2Ff39%2Fv3%2BkAH%2FAwf%2FtwD%2F9wCyh1KfAAAAKXRSTlMABQ4VGykqLjVCTVNgdXuHj5Kaq62vt77ExNPX2%2Bju8vX6%2Bvr7%2FP7%2B%2FiiUMfUAAADTSURBVAjXBcFRTsIwHAfgX%2FtvOyjdYDUsRkFjTIwkPvjiOTyX9%2FAIJt7BF570BopEdHOOstHS%2BX0s439RGwnfuB5gSFOZAgDqjQOBivtGkCc7j%2B2e8XNzefWSu%2BsZUD1QfoTq0y6mZsUSvIkRoGYnHu6Yc63pDCjiSNE2kYLdCUAWVmK4zsxzO%2BQQFxNs5b479NHXopkbWX9U3PAwWAVSY%2FpZf1udQ7rfUpQ1CzurDPpwo16Ff2cMWjuFHX9qCV0Y0Ok4Jvh63IABUNnktl%2B6sgP%2BARIxSrT%2FMhLlAAAAAElFTkSuQmCC)](http://spiceprogram.org/oss-sponsorship)

## Pilvilinnan leipomo

Website for Pilvilinnan leipomo, a home bakery located in Nokia, Finland. Built with
[Next.js](https://nextjs.org/) (App Router) and React, with content managed in
[Contentful](https://www.contentful.com/) and fetched via its GraphQL API.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Contentful** (GraphQL Content API) for content
- **CSS Modules** for styling
- **ESLint** + **Prettier**

## Getting started

### Prerequisites

- Node.js (the version supported by Next.js 16)
- A Contentful space with the expected content model

### Environment variables

Create a `.env.local` file in the project root:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

Without these, content requests to Contentful will fail and images render with an empty source.

### Install

```bash
npm install
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server at [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production build. |
| `npm run lint` | Lint the codebase with ESLint. |

## Project structure

```
src/
  app/          Next.js App Router routes, layout and metadata
  components/    Reusable UI components (CSS Modules per component)
  containers/    Page-level sections composed from components
  lib/           Contentful API client and shared types
  utils/         Routing and string helpers
  style/         Global styles and design tokens
public/          Static assets (images, manifest, robots.txt)
```
