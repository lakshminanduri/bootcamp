# Retail iOS Kickstarter Project

## Dependencies

The bootstrap script is not checking if your machine has all the necessary software and configuration.
Please make sure you have the following set up:

* Ruby (macOS comes with ruby pre-installed, version 2.6.5 works nicely)
* [Xcodegen](https://github.com/yonaskolb/XcodeGen)
* [Cocoapods](https://cocoapods.org/)
* JFrog artifactory repositories set up, according to [community documentation](https://community.backbase.com/documentation/mobile-sdk/latest/integrating_ios_library#integrating_ios_library)

## How to get started with a new project

1. Clone or download the repository
2. Run the `ruby bootstrap/init.rb ProjectName` command in the folder

## Important Note

In order to detect debuggers attached to the app a C file was added to the project, this shouldn't affect your release process, but if your app gets rejected due to this, please remove file `jb_protect.c` from your project and implement a different solution.
