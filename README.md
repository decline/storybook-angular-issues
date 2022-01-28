I'm experiencing numerous issues with Angular in newer versions of Storybook. It seems they are all related to Compodoc. These issues include:
* Arrays are interpreted as strings
* Enums are not correctly interpreted
* EventEmitters throw errors

I tracked down the version when this started happening and I found out that these issues started to occur in [v6.4.0-alpha.34](https://github.com/storybookjs/storybook/releases/tag/v6.4.0-alpha.34) (in **v6.4.0-alpha.33** everything is fine). I assume it is related to this pull request:  #15744

### Reproduce:
Clone this repository: https://github.com/decline/storybook-angular-issues

There are 3 stories that describe what is going wrong.

#### See errors in v6.4.0-alpha.34:

```sh
yarn && yarn storybook
```

#### See it working in v6.4.0-alpha.33:

```sh
git checkout 6.4.0-alpha.33
yarn && yarn storybook
```

As soon as you remove the `setCompodocJson(docJson);` line in `.storybook/preview.js` it will also work in v6.4.0-alpha.34, but then you will also lose Compodoc support 😕

I also recorded a video that shows the comparison between the two versions:


https://user-images.githubusercontent.com/5609744/151581283-fa3f5def-5371-47e7-8054-311fef8703a0.mov

### Environment Info:
```
  System:
    OS: macOS 11.6.3
    CPU: (12) x64 Intel(R) Core(TM) i7-8850H CPU @ 2.60GHz
  Binaries:
    Node: 14.17.5 - ~/.nvm/versions/node/v14.17.5/bin/node
    Yarn: 3.1.1 - /usr/local/bin/yarn
    npm: 6.14.14 - ~/.nvm/versions/node/v14.17.5/bin/npm
  Browsers:
    Chrome: 97.0.4692.99
    Firefox: 96.0.2
    Safari: 15.3
  npmPackages:
    @storybook/addon-actions: 6.4.0-alpha.34 => 6.4.0-alpha.34 
    @storybook/addon-docs: 6.4.0-alpha.34 => 6.4.0-alpha.34 
    @storybook/addon-essentials: 6.4.0-alpha.34 => 6.4.0-alpha.34 
    @storybook/addon-links: 6.4.0-alpha.34 => 6.4.0-alpha.34 
    @storybook/angular: 6.4.0-alpha.34 => 6.4.0-alpha.34 
    @storybook/builder-webpack5: 6.4.0-alpha.34 => 6.4.0-alpha.34 
    @storybook/manager-webpack5: 6.4.0-alpha.34 => 6.4.0-alpha.34 

```

### Additional context:
Issue https://github.com/storybookjs/storybook/issues/17302 is related to this one, I will close that issue in favour of this new one here.
