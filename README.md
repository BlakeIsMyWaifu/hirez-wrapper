# HiRez Wrapper

[![Version](<https://img.shields.io/npm/v/hirez-wrapper.svg>)](<https://www.npmjs.com/package/hirez-wrapper>)
[![License](<https://img.shields.io/github/license/BlakeIsMyWaifu/hirez-wrapper>)](https://github.com/BlakeIsMyWaifu/hirez-wrapper/blob/master/LICENSE)

> Wrapper for the HiRez API

## Features

- Zero dependencies
- TypeScript support
- Promise based
- Downloading of data
- Interfaces for all endpoints

## Install

```sh
npm install hirez-wrapper -s
```

## API

Before you can use this package you must apply for API access.
[Development Credentials Application Form](https://fs12.formsite.com/HiRez/form48/secure_index.html)
The official documentation can also be found [google docs](https://docs.google.com/document/d/1OFS-3ocSx-1Rvg4afAnEHlT3917MAK_6eJTR6rzr-BM)

## How to use

### Basic usage

Import whichever game you would like to use.
Set your API credentials before making any API calls.
Await the method of your choice and get the data!

```ts
import { paladins, realmRoyale, smite } from 'hirez-wrapper'

// Replace with your credentials
// (dev_id, auth_key)
smite.credentials(1004, 23DF3C7E9BD14D84BF892AD206B6755C)

const data = await smite.getGods('english')
console.log(data) // => Array of all God data
```

### Downloading data

All endpoints can be downloaded automatically with the `download` method

```ts
const data = await smite.getGods('english')
data.download()
```

Download has some optional options

```ts
const data = await smite.getGods('english')
data.download({
  filePath: '/path/to/location', // default: creates a download folder in project root
  fileName: 'god-data', // defaults: {unix time}-{game}-{endpoint}-{parameters}
  prettyPrint: false // default: true
})
```

Download will still return the original data

```ts
const data = (await smite.getGods('english')).download()
console.log(data) // => Array of all God data
```

### Manually setting process environment

Both the credentials and sessions are stored in the user process environment.
If using a package to set the environment such as [dotenv](https://www.npmjs.com/package/dotenv), you can create a `.env` file to skip setting the credentials.

Here is an example `.env` file

```env
HIREZDEVID=1004
HIREZAUTHKEY=23DF3C7E9BD14D84BF892AD206B6755C
```

The current active sessions are `SMITESESSION`, `PALADINSSESSION` and `REALMROYALSESSION`

```ts
const smiteSession = process.env.SMITESESSION
console.log(smiteSession) // => SESSION TOKEN
```

## Contributing

Pull requests, issues and feature requests are all welcome

## Copyright & License

This is an unofficial wrapper not affiliated or maintained by Hi-Rez Studios.
Don't contact them regarding issues with this package.
The package is covered with the [MIT license](https://github.com/BlakeIsMyWaifu/hirez-wrapper/blob/master/LICENSE)
