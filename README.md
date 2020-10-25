<p align="center">
<image width="100" src="./docs/assets/icon.png" >
</p>

# GitHub Releases Sniffer

![CI](https://github.com/ralvescosta/github_releases_sniffer/workflows/CI/badge.svg?branch=rn-develop)


This simple project has the purpose to configure Android Push Notification to alert when specific Framework/Library update last release.


**Project in Building**

First Release is building in React Native

---

## Features

- **Dashboard**: List of all Github Repositories the user has selected to monitoring
- **Dashboard Details**: Show details to specific repository
- **Search**: Search Github repositories using github api
- **Settings**: Some actions to improve user more flexibility


## Architecture

This project architecture was based on Robert C. Martin book "Clean Architecture". In this wat the project was divided into seven modules.

- Core module

- Dashboard module

- Headless module

- Navigation module

- Search module

- Settings module

- Signin module

Each of this modules has same structure respecting Clean Architecture principles:

- Application
- Business
- Infrastructure
- Interfaces
- Presenter

Also, each of this module has on file called xxxx.module.tsx, this file is responsible to combine all os class implementations and provide the React Native Screen. The dependency diagram can be seeing using VSCode extension "Dependency Cruiser Extension", but to use this extension correctly you need to pay attention to some details 

- **First**: You have to start seeing the xxxx.module.tsx file, because this file combine all of module implementation files. In this file you only see how features are implementing in this module, when you knowing the features you can see this implementations on directory "Application". Under you can see a picture to file __dashboard.module.tsx__:

<p align="center">
  <image width="480" src="./docs/assets/dashboard_module.png" >
</p>


- **Second**: You have to see decencies into the application classes, because this classes is the Usecases implementations. But most dependencies is interfaces, in this project all interfaces name start with "I". Under you can see a picture to file __get.sniffer.repos.and.account.usecase.tsx__:

<p align="center">
  <image width="480" src="./docs/assets/dashboard_usecase.png" >
</p>

- **Third**: Lastly you can find all interfaces implementations on the __Infrastructure directory__. All of the React Native interface are in __Presenter directory__. And all of React Native "viewmodule" are in __Interfaces directory__.

---

### Screens

- SignIn

<image width="200" src="./docs/assets/signin.png" >


- Dashboard and Details

<image width="195" src="./docs/assets/dashboard.png" >
<image width="195" src="./docs/assets/details.png" >


- Search

<image width="195" src="./docs/assets/search.png" >


- Settings

<image width="195" src="./docs/assets/settings.png" >


