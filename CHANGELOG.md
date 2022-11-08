# Change Log

## [v1.0.3] 2022-11-08
### Improvements

- Save Compat matrix in `package.json`
  - `build` node
  - Yarn, NPM
  - NodeJS versions

## [v1.0.2] 2022-11-06
### Improvements

- Updated for Deploy on RENDER using [Python Deployer](https://github.com/app-generator/deploy-automation-render)
  - `python.exe .\deployer.py nodejs https://github.com/app-generator/api-server-nodejs`
  - The new API is usable via `https://api-server-nodejs-<RANDOM>.onrender.com/api/`

## [v1.0.1] 2022-06-02
### Improvements

- Dependencies Update for
  - NodeJS `v17.0.0`
  - NodeJS `v16.15.1`  

## [v1.0.0] 2021-07-20
### Stable release

- Persistance migrated to SQLite3 / TypeORM 
- Stack: Node JS/ Express / TypeORM / SQLite3
- API:
   - Sign UP: `/api/users/register`
   - Sign IN: `/api/users/login`
   - Logout: `/api/users/logout`
   - Check Session: `/api/users/checkSession`
   - Edit User: `/api/users/edit`
- Data persistence
  - TypeORM / SQLite3
  - Db migrations are in `src/migrations` folder
  - Added new config `ormconfig.json`

## [0.0.9] 2021-07-19
### Production Update

- Use `pm2` in production - new targets added to `package.json`
    - `start` uses `pm2` to start
    - `start-node` - load typescript build with Node JS

## [0.0.8] 2021-07-09
### Improvements & Fixes

- Patch #8: Typescript Migration - Tests are failing
- Code refactoring:
    - `src/config/keys.ts` - removed
    - `keys.ts` variables moved to `.env`

## [0.0.7] 2021-07-09
### Improvements

- Added typescript support

## [0.0.6] 2021-07-07
### Improvements

- Deprecate `src/app.js` - now the app is constructed by:
    - `src/server/index.js`
    - `src/index.js`
- Integrate JTest: `yarn test`

## [0.0.5] 2021-07-05
### Improvements

- Move sources to `src` folder
- Dockerize project (unstable) - See issue [#6](https://github.com/app-generator/api-server-nodejs/issues/6)

## [0.0.4] 2021-07-04
### Improvements

- Use `Joy` as input validator for `login` & `register`
- Remove `bodyParser` dependency (flagged as deprecated)

## [0.0.3] 2021-07-04
### Complete rewrite

- Update Passport strategy to `JwtStrategy`
- Persistance via MongoDB
- API:
   - Sign UP: `/api/users/register`
   - Sign IN: `/api/users/login`
   - Logout: `/api/users/logout`
   - Check Session: `/api/users/checkSession`
   - Edit User: `/api/users/edit`
- Merge PR #5 - Added `nodemon` to `devDependencies`

## [0.0.2] 2021-07-03
### Improvements & Fixes

- Patch #3 - Error when installing modules
- Patch #2 - Passport Authentication always returns missing credentials
- Remove `body-parser` dependency

## [0.0.1] 2021-07-03
### Improvements

- Update Dependencies
- Update License file
- Add CHANGELOG.md to track all changes
