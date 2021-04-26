# A11 - TOF

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [A11 - TOF](#a11-tof)
  - [Steps](#steps)
    - [Angular CLI Installation](#angular-cli-installation)
    - [Create a new project](#create-a-new-project)
    - [Preparing git](#preparing-git)
      - [Delete existing `.git` folder](#delete-existing-git-folder)
    - [Initialize Git](#initialize-git)
    - [Create an empty component](#create-an-empty-component)
    - [Preparing Code Style Guides (Prettier)](#preparing-code-style-guides-prettier)
    - [Create a new route](#create-a-new-route)
    - [REST API](#rest-api)
      - [HttpClientModule](#httpclientmodule)
      - [Create a Service](#create-a-service)
  - [Backup - Relevant Topics](#backup-relevant-topics)
    - [SOLID Principles](#solid-principles)

<!-- /code_chunk_output -->

## Steps

### Angular CLI Installation

```shell
ng i -g @angular/cli
```

### Create a new project

```shell
ng new a11 --prefix=tof
```

### Preparing git

#### Delete existing `.git` folder

```shell
cd a11
rm -rf .git
```

### Initialize Git

```shell
git init
git add .
git commit -m "INITIAL COMMIT"
```

### Create an empty component

```shell
ng g c components/dashboard
git add .
git commit -m "Dashboard Component created"
```

### Preparing Code Style Guides (Prettier)

Create `.prettierrc` at root folder:

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 70,
  "tabWidth": 2
}
```

### Create a new route

> src/app/app-routing.module.ts

z.B.

```ts
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
```

### REST API

> https://swapi.dev/
> Darth Vader API URL (Endpoint): http://swapi.dev/api/people/4/

#### HttpClientModule

> src/app/app.module.ts

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <---- HERE!
  ],
  providers: [],
  bootstrap: [AppComponent],
})

```

#### Create a Service

```shell
ng g s services/common
```

## Backup - Relevant Topics

### SOLID Principles

> <https://en.wikipedia.org/wiki/SOLID>
