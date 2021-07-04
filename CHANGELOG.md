# Change Log

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
