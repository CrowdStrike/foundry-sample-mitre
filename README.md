![CrowdStrike Falcon](/docs/asset/cs-logo.png?raw=true)

# Triage with MITRE Attack sample Foundry app

The Triage with MITRE Attack sample Foundry app is a community-driven, open source project which serves as an example of an app which can be built using CrowdStrike's Foundry ecosystem.
`foundry-sample-mitre` is an open source project, not a CrowdStrike product. As such, it carries no formal support, expressed or implied.

This app is one of several App Templates included in Foundry that you can use to jumpstart your development. It comes complete with a set of 
preconfigured capabilities aligned to its business purpose. Deploy this app from the Templates page with a single click in the Foundry UI, or 
create an app from this template using the CLI.

## Description

The CrowdStrike Triage for MITRE ATT&CK app provides SOC analysts with a focused, MITRE-prioritized view of their XDR detections and enables 
both automated and manual remediation actions.

This app provides a filtered dashboard for the existing Falcon console Detections page, helping users focus on a manageable set of detections.

You can use this app to configure automated and manual actions for specific tactics and techniques.

## Prerequisites

* The Foundry CLI (instructions below).
* Go v1.21+ (needed if modifying the app's functions). See https://go.dev/learn for installation instructions.
* Yarn (needed if modifying the app's UI). See https://yarnpkg.com/getting-started for installation instructions.

### Install the Foundry CLI

You can install the Foundry CLI with Scoop on Windows or Homebrew on Linux/macOS.

**Windows**:

Install [Scoop](https://scoop.sh/). Then, add the Foundry CLI bucket and install the Foundry CLI.

```shell
scoop bucket add foundry https://github.com/crowdstrike/scoop-foundry-cli.git
scoop install foundry
```

Or, you can download the [latest Windows zip file](https://assets.foundry.crowdstrike.com/cli/latest/foundry_Windows_x86_64.zip), expand it, and add the install directory to your PATH environment variable.

**Linux and macOS**:

Install [Homebrew](https://docs.brew.sh/Installation). Then, add the Foundry CLI repository to the list of formulae that Homebrew uses and install the CLI:

```shell
brew tap crowdstrike/foundry-cli
brew install foundry
```

Run `foundry version` to verify it's installed correctly.

## Getting Started

Clone this sample to your local system, or [download as a zip file](https://github.com/CrowdStrike/foundry-sample-mitre/archive/refs/heads/main.zip).

```shell
git clone https://github.com/CrowdStrike/foundry-sample-mitre
cd foundry-sample-mitre
```

Log in to Foundry:

```shell
foundry login
```

Select the following permissions:

- [x] Run RTR Scripts
- [x] Run, execute, and test Workflows
- [x] Run, execute, and test API integrations
- [x] Run, execute, and test LogScale queries
- [ ] (optional) Generate mock data to test your app

Deploy the app:

```shell
foundry apps deploy
```

> [!TIP]
> If you get an error that the name already exists, change the name to something unique to your CID in `manifest.yml`.

Once the deployment has finished, you can release the app:

```shell
foundry apps release
```

Next, go to **Foundry** > **App catalog**, find your app, and install it. Select the **Open App** button in the success dialog. 

> [!TIP]
> If the app doesn't load, reload the page.

You'll see the different types of [MITRE ATT&CK](https://attack.mitre.org/)s and see the detections associated with them.

### Development

In order to be able to see (and develop) your local page/extension you have to:

1. Run `foundry ui run` in this directory.
2. The pages/extensions you're developing must have been built (_suggestion:_ use watchers for hot module reload).

With the following, you should be able to start and develop all the projects under `mitre`:

1. Run `yarn`.
2. Run `yarn start`, this will run **type-checks** and `build-watch` for every project.
3. Concurrently, run `foundry ui run`.
4. Now, you are ready to test your changes with local code (remember to turn on "development mode").

## About this sample app

### Foundry capabilities used

- **Collections.** Used by the app to store JIRA configuration for response actions and the history of issues created from the app.
- **UI navigation.** Adds the app to the Falcon navigation for easy access.
- **UI pages.** Custom UI pages to display results and manage the app.
- **UI extensions.** UI extension that is configured to run in a socket on the Detections page of the Falcon console.

### Languages and frameworks used

- UI
  - HTML, CSS
  - TypeScript, Vue

### Directory structure

- `collections`. Schemas used in the collections used by this app.
- `ui/pages/chart-vue`. Single Page Application which serves as the frontend of the app.
- `ui/extensions/remediations`. Single Page Application which serves as the extension mounted in the Detections page of the Falcon console.
- `shared/mitre-vue`. Utility code and components shared between the `ui/pages/chart-vue` and `ui/extensions/remediations`.

## Foundry resources

- Foundry documentation: [US-1](https://falcon.crowdstrike.com/documentation/category/c3d64B8e/falcon-foundry) | [US-2](https://falcon.us-2.crowdstrike.com/documentation/category/c3d64B8e/falcon-foundry) | [EU](https://falcon.eu-1.crowdstrike.com/documentation/category/c3d64B8e/falcon-foundry)
- Foundry learning resources: [US-1](https://falcon.crowdstrike.com/foundry/learn) | [US-2](https://falcon.us-2.crowdstrike.com/foundry/learn) | [EU](https://falcon.eu-1.crowdstrike.com/foundry/learn)

---

<p align="center"><img src="https://raw.githubusercontent.com/CrowdStrike/falconpy/main/docs/asset/cs-logo-footer.png"><BR/><img width="300px" src="https://raw.githubusercontent.com/CrowdStrike/falconpy/main/docs/asset/adversary-goblin-panda.png"></P>
<h3><P align="center">WE STOP BREACHES</P></h3>
