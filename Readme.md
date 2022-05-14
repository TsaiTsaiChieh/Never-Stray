<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TsaiTsaiChieh/never-stray">
    <img src="frontend/public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Never Stray</h3>

  <p align="center">
    An animal adoption platform that integrated the shelters and meet map in Taiwan. Users can quickly find pets through multiple search conditions or track the pets they are interested in.
    <br />
    <a href="https://never-stray.com/"><strong>Explore the website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/TsaiTsaiChieh/never-stray/issues">Report Bug</a>
    ·
    <a href="https://github.com/TsaiTsaiChieh/never-stray/graphs/contributors">Contributor</a>
  </p>
</div>

<!-- GETTING STARTED -->
## Features

1. Integrated the pet information from shelters and meet map in Taiwan for multiple condition search. Search conditions include kind, age, sex, ligation, color, city, shelter, status, data reference, and keyword search in color, remark, and title from the detail of the pet.
2. Users could track the pets they are interested in if user login by Google, and it could filter out easily when clicking the 'My little nest' and pet information also could be sorted by update time.
3. Dynamic show the count number and result of the pet when the condition is changing at once, and the details of the pet include a link which the user could go to the original data source to adopt the pet.

### Technologies
1. Use **Docker** that makes any deployment consistent, portable, and scalable.
2. Scripts generated by **TypeORM** or manually are about database migration and initial essential elements of a database table in the database deployments.
3. Integrating **CodeDeploy** with GitHub for Amazon EC2 auto-deployment.
4. **Node-schedule** and **Cheerio** for web crawling and frequent database updates.
5. Using **Redux Toolkit** for centralizing state management and simplifying many common use cases like creating reducer
6. Eliminating the need to hand-write data fetching and caching logic yourself by using **RTK Query**.
6. Create a responsive design with **SCSS** and **styled-components**.

### Built With

#### Programming Language

* [JavaScript](https://www.javascript.com/)
* [Typescript](https://www.typescriptlang.org/)

#### Backend
* [Node.js](https://nodejs.org/en/) / [Express.js](https://expressjs.com/)
* [TypeORM](https://typeorm.io/)
* [Ajv](https://ajv.js.org/)
* [Cheerio](https://cheerio.js.org/)

#### Frontend
* [React.js](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
* [styled-components](https://styled-components.com/)
#### AWS Cloud Platform (Free Tier)
* [Elastic Compute Cloud (Linux t2.micro)](https://aws.amazon.com/ec2/instance-types/t2/)
* [Simple Storage Service (S3)](https://aws.amazon.com/tw/s3/)
* [Relational Database Service (MySQL db.t2.micro)](https://aws.amazon.com/tw/rds/)


#### DevOps
* [Nginx](https://www.nginx.com/)
* [Docker](https://www.docker.com/)
* [AWS CodeDeploy](https://aws.amazon.com/tw/codedeploy/)
* [TypeORM Migrations](https://typeorm.io/migrations)
<p align="right">(<a href="#top">back to top</a>)</p>

### Database schema
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0b8cced1-def8-4bb1-96ec-7f57903b9bb4/ERD.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220513T123030Z&X-Amz-Expires=86400&X-Amz-Signature=c87c3ca234755fce12143aaae8fba402cc9747245d745ad273278065ce99850f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ERD.png%22&x-id=GetObject)
