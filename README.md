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
      - [Implementing DarthVaderAPI](#implementing-darthvaderapi)
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

#### Implementing DarthVaderAPI

> src/app/services/common.service.ts

```ts
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  darthVaderUrl: string = 'http://swapi.dev/api/people/4/';

  constructor(private http: HttpClient) {}

  getDarthVaderData() {
    return this.http
      .get(this.darthVaderUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  log(message: string, isImportant = false) {
    isImportant
      ? console.log(`%c${message}`, 'color:red; font-size:18px')
      : console.log(`%c${message}`, 'color:lime; font-size:18px');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`,
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.',
    );
  }
}
```

> src/app/components/dashboard/dashboard.component.ts

```ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'tof-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  getDarthVaderData: Subscription = new Subscription();
  darthVaderData: unknown;

  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.getDarthVaderDataFromService();
  }

  getDarthVaderDataFromService() {
    this.cs.log('getDarthVaderDataFromService has been invoked');

    this.getDarthVaderData = this.cs
      .getDarthVaderData()
      .subscribe(
        (darthVaderDataFromService) =>
          (this.darthVaderData = darthVaderDataFromService),
      );
  }

  ngOnDestroy() {
    if (this.getDarthVaderData) {
      this.getDarthVaderData.unsubscribe();
    }
  }
}
```

> src/app/components/dashboard/dashboard.component.html

```html
<p>My DarthVaderData:</p>

<pre><code>{{ darthVaderData | json }}</code></pre>
```

## Backup - Relevant Topics

### SOLID Principles

> <https://en.wikipedia.org/wiki/SOLID>
