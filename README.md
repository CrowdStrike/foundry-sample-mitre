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

## Basic information

### Dependencies

- Foundry CLI
- Go v1.21+ (needed if modifying functions). See https://go.dev/learn/ for instructions to install.
- YARN (needed if modifying UI). See https://yarnpkg.com/getting-started for instructions to install.

### Foundry capabilities used

- **Collections.** Used by the app to store JIRA configuration for response actions and the history of issues created from the app.
- **UI navigation.** Adds the app to the Falcon navigation for easy access.
- **UI pages.** Custom UI pages to display results and manage the app.
- **UI extensions.** UI extension that is configured to run in a socket on the Detections page of the Falcon console.

### Languages and frameworks used

- UI
  - HTML, CSS
  - Typescript, Vue

### Directory structure

- `collections`. Schemas used in the collections used by this app.
- `ui/pages/chart-vue`. Single Page Application which serves as the frontend of the app.
- `ui/extensions/remediations`. Single Page Application which serves as the extension mounted in the Detections page of the Falcon console.
- `shared/mitre-vue`. Utility code and components shared between the `ui/pages/chart-vue` and `ui/extensions/remediations`.

## Development

In order to be able to see (and develop) your local page/extension you just have to:

1. Run `foundry ui run` in this directory
2. The pages/extensions you're developing must have been built (_suggestion:_ use watchers for hot module reload).

With the following, you should be able to start and develop all of the projects under `mitre`:

1. Run `yarn`
2. Run `yarn start`, this will run **type-checks** and `build-watch` for every project.
3. Concurrently, run `foundry ui run`.
4. now you are ready to test your changes with local code (remember to turn on "development mode"

## Running, deploying and installing the app

For detailed info about running, deploying and installing this app in your CID, see the Falcon Foundry product documentation:

- Overview and setup
    * US-1: [Before you begin](https://falcon.crowdstrike.com/documentation/page/f5f7cd69/falcon-console-user-interface-capabilities)
    * US-2: [Before you begin](https://falcon.us-2.crowdstrike.com/documentation/page/f5f7cd69/falcon-console-user-interface-capabilities)
    * EU-1: [Before you begin](https://falcon.eu-1.crowdstrike.com/documentation/page/f5f7cd69/falcon-console-user-interface-capabilities)
- Deploy an app
  - US-1: [Deploy an app](https://falcon.crowdstrike.com/documentation/page/ofd46a1c/deploy-an-app)
  - US-2: [Deploy an app](https://falcon.us-2.crowdstrike.com/documentation/page/ofd46a1c/deploy-an-app)
  - EU-1: [Deploy an app](https://falcon.eu-1.crowdstrike.com/documentation/page/ofd46a1c/deploy-an-app)
- Create a new app using this app as template
  - US-1: [Create an app from a template](https://falcon.crowdstrike.com/documentation/page/l159717b/create-an-app#c4378b86)
  - US-2: [Create an app from a template](https://falcon.us-2.crowdstrike.com/documentation/page/l159717b/create-an-app#c4378b86)
  - EU-1: [Create an app from a template](https://falcon.eu-1.crowdstrike.com/documentation/page/l159717b/create-an-app#c4378b86)
- Run this app in development mode after deployment
  - US-1: [Iterate in development mode](https://falcon.crowdstrike.com/documentation/page/fb88e442/view-and-manage-apps#d5175ae2)
  - US-2: [Iterate in development mode](https://falcon.us-2.crowdstrike.com/documentation/page/fb88e442/view-and-manage-apps#d5175ae2)
  - EU-1: [Iterate in development mode](https://falcon.eu-1.crowdstrike.com/documentation/page/fb88e442/view-and-manage-apps#d5175ae2)
- Work with the Foundry capabilities of this app
  - US-1: [App capabilities](https://falcon.crowdstrike.com/documentation/category/u0daabab/app-capabilities)
  - US-2: [App capabilities](https://falcon.us-2.crowdstrike.com/documentation/category/u0daabab/app-capabilities)
  - EU-1: [App capabilities](https://falcon.eu-1.crowdstrike.com/documentation/category/u0daabab/app-capabilities)

## Foundry resources

See our product documentation:

- US-1: [Falcon Foundry](https://falcon.crowdstrike.com/documentation/category/c3d64B8e/falcon-foundry)
- US-2: [Falcon Foundry](https://falcon.us-2.crowdstrike.com/documentation/category/c3d64B8e/falcon-foundry)
- EU-1: [Falcon Foundry](https://falcon.eu-1.crowdstrike.com/documentation/category/c3d64B8e/falcon-foundry)

---

<p align="center"><img src="https://raw.githubusercontent.com/CrowdStrike/falconpy/main/docs/asset/cs-logo-footer.png"><BR/><img width="300px" src="https://raw.githubusercontent.com/CrowdStrike/falconpy/main/docs/asset/adversary-goblin-panda.png"></P>
<h3><P align="center">WE STOP BREACHES</P></h3>
