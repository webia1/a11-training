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
```
