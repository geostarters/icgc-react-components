# @geostarters/react-components
[![npm version](https://badge.fury.io/js/%40geostarters%2Freact-components.svg)](https://badge.fury.io/js/%40geostarters%2Freact-components)
[![Build Status Linux](https://travis-ci.org/geostarters/icgc-react-components.svg?branch=master)](https://travis-ci.org/geostarters/icgc-react-components)
[![Build status](https://ci.appveyor.com/api/projects/status/18yhfa5c2y32s2h9/branch/master?svg=true)](https://ci.appveyor.com/project/geostarters/icgc-react-components/branch/master)
[![Dependency Status](https://david-dm.org/geostarters/icgc-react-components.svg)](https://david-dm.org/geostarters/icgc-react-components)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A lib of React Components
https://geostarters.github.io/icgc-react-components/

## Installation

```
npm install --save @geostarters/react-components
```

## Development
```
npm install or yarn
```

## Provided scripts

**lint**: Checks the code linting

**build**: Creates de dist file of each component

**build:dev**: Creates de dist file of each component (using working windows commands)

**storybook**: Run storybook locally

**deploy-storybook**: Deploy storybook to github pages

	/*por si falla*/
	npm run build-storybook
	cd docs
	git init
	git add .
	git commit -m "Deploy Storybook to GitHub Pages"
	git push --force --quiet git@github.com:geostarters/icgc-react-components.git master:gh-pages

	/*otra forma*/
	npm run build-storybook
	git subtree split --prefix docs -b gh-pages
	git push -f origin gh-pages:gh-pages
	git branch -D gh-pages

**build-storybook**:

**test**: Runs the static type checker and runs the tests

## Para desplegar los cambios en el registro de npm

	npm login
	Username: icgcgeostarters
	Password: XXXXXXXX
	Email: (this IS public): geostarters [at] gmail [dot] com
	npm version <update_type> //<update_type> patch, major, or minor
	npm publish --access public 


## Semantic UI React personalization

https://jsramblings.com/2018/03/04/how-to-use-semantic-ui-with-a-custom-theme-in-your-CRA-app.html


## License

Copyright (c) 2019 - Geostarters (MIT License) See LICENSE file for more info.
